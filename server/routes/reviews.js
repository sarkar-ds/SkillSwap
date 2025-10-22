const express = require('express');
const Review = require('../models/Review');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/reviews
// @desc    Get all reviews (with pagination and filtering)
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, userId, skill, sortBy = 'createdAt' } = req.query;
    
    const query = {};
    
    // Filter by user
    if (userId) {
      query.reviewedUser = userId;
    }
    
    // Filter by skill
    if (skill) {
      query.skill = { $regex: skill, $options: 'i' };
    }
    
    // Sorting options
    let sortOptions = {};
    if (sortBy === 'rating') {
      sortOptions.rating = -1;
    } else if (sortBy === 'newest') {
      sortOptions.createdAt = -1;
    } else {
      sortOptions.createdAt = -1;
    }
    
    const reviews = await Review.find(query)
      .populate('reviewer', 'fullName avatar')
      .populate('reviewedUser', 'fullName avatar')
      .sort(sortOptions)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    
    const total = await Review.countDocuments(query);
    
    res.json({
      reviews,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    console.error('Get reviews error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/reviews/featured
// @desc    Get featured reviews for landing page
// @access  Public
router.get('/featured', async (req, res) => {
  try {
    const reviews = await Review.find({ isVerified: true })
      .populate('reviewer', 'fullName avatar')
      .sort({ rating: -1, createdAt: -1 })
      .limit(3);
    
    res.json(reviews);
  } catch (error) {
    console.error('Get featured reviews error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/reviews
// @desc    Create a new review
// @access  Private
router.post('/', auth, async (req, res) => {
  try {
    const { reviewedUserId, skill, rating, review } = req.body;
    
    // Check if user is trying to review themselves
    if (req.user._id.toString() === reviewedUserId) {
      return res.status(400).json({ message: 'You cannot review yourself' });
    }
    
    // Check if user already reviewed this person for this skill
    const existingReview = await Review.findOne({
      reviewer: req.user._id,
      reviewedUser: reviewedUserId,
      skill
    });
    
    if (existingReview) {
      return res.status(400).json({ message: 'You have already reviewed this user for this skill' });
    }
    
    // Create new review
    const newReview = new Review({
      reviewer: req.user._id,
      reviewedUser: reviewedUserId,
      skill,
      rating,
      review
    });
    
    await newReview.save();
    
    // Populate user details for response
    await newReview.populate('reviewer', 'fullName avatar');
    await newReview.populate('reviewedUser', 'fullName avatar');
    
    res.status(201).json({
      message: 'Review created successfully',
      review: newReview
    });
  } catch (error) {
    console.error('Create review error:', error);
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ message: messages.join(', ') });
    }
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/reviews/:id
// @desc    Update a review
// @access  Private
router.put('/:id', auth, async (req, res) => {
  try {
    const { rating, review } = req.body;
    
    const existingReview = await Review.findById(req.params.id);
    
    if (!existingReview) {
      return res.status(404).json({ message: 'Review not found' });
    }
    
    // Check if user owns this review
    if (existingReview.reviewer.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to update this review' });
    }
    
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      { rating, review },
      { new: true, runValidators: true }
    ).populate('reviewer', 'fullName avatar')
     .populate('reviewedUser', 'fullName avatar');
    
    res.json({
      message: 'Review updated successfully',
      review: updatedReview
    });
  } catch (error) {
    console.error('Update review error:', error);
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ message: messages.join(', ') });
    }
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   DELETE /api/reviews/:id
// @desc    Delete a review
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    
    // Check if user owns this review
    if (review.reviewer.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to delete this review' });
    }
    
    await Review.findByIdAndDelete(req.params.id);
    
    res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    console.error('Delete review error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
