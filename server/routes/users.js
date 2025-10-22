const express = require('express');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/users
// @desc    Get all users (with pagination and search)
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, search, skill, sortBy = 'joinDate' } = req.query;
    
    const query = { isActive: true };
    
    // Search by name or skills
    if (search) {
      query.$or = [
        { fullName: { $regex: search, $options: 'i' } },
        { skillToTeach: { $regex: search, $options: 'i' } },
        { skillToLearn: { $regex: search, $options: 'i' } }
      ];
    }
    
    // Filter by specific skill
    if (skill) {
      query.$or = [
        { skillToTeach: { $regex: skill, $options: 'i' } },
        { skillToLearn: { $regex: skill, $options: 'i' } }
      ];
    }
    
    // Sorting options
    let sortOptions = {};
    if (sortBy === 'rating') {
      sortOptions.rating = -1;
    } else if (sortBy === 'name') {
      sortOptions.fullName = 1;
    } else {
      sortOptions.joinDate = -1;
    }
    
    const users = await User.find(query)
      .select('-password')
      .sort(sortOptions)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    
    const total = await User.countDocuments(query);
    
    res.json({
      users,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/users/registered
// @desc    Get recently registered users
// @access  Public
router.get('/registered', async (req, res) => {
  try {
    const users = await User.find({ isActive: true })
      .select('-password')
      .sort({ joinDate: -1 })
      .limit(4);
    
    res.json(users);
  } catch (error) {
    console.error('Get registered users error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/users/active
// @desc    Get currently active users
// @access  Public
router.get('/active', async (req, res) => {
  try {
    const users = await User.find({ isActive: true })
      .select('-password')
      .sort({ rating: -1, totalReviews: -1 })
      .limit(4);
    
    res.json(users);
  } catch (error) {
    console.error('Get active users error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/users/:id
// @desc    Get user by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(user);
  } catch (error) {
    console.error('Get user error:', error);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/users/profile
// @desc    Update user profile
// @access  Private
router.put('/profile', auth, async (req, res) => {
  try {
    const { fullName, skillToTeach, skillToLearn, bio, avatar } = req.body;
    
    const updateFields = {};
    if (fullName) updateFields.fullName = fullName;
    if (skillToTeach) updateFields.skillToTeach = skillToTeach;
    if (skillToLearn) updateFields.skillToLearn = skillToLearn;
    if (bio !== undefined) updateFields.bio = bio;
    if (avatar) updateFields.avatar = avatar;
    
    const user = await User.findByIdAndUpdate(
      req.user._id,
      updateFields,
      { new: true, runValidators: true }
    ).select('-password');
    
    res.json({
      message: 'Profile updated successfully',
      user
    });
  } catch (error) {
    console.error('Update profile error:', error);
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ message: messages.join(', ') });
    }
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
