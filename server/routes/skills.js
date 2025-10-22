const express = require('express');
const Skill = require('../models/Skill');

const router = express.Router();

// @route   GET /api/skills
// @desc    Get all skills (with search and filtering)
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { search, category, sortBy = 'name' } = req.query;
    
    const query = { isActive: true };
    
    // Search by name
    if (search) {
      query.name = { $regex: search, $options: 'i' };
    }
    
    // Filter by category
    if (category) {
      query.category = category;
    }
    
    // Sorting options
    let sortOptions = {};
    if (sortBy === 'popularity') {
      sortOptions.popularity = -1;
    } else if (sortBy === 'totalUsers') {
      sortOptions.totalUsers = -1;
    } else {
      sortOptions.name = 1;
    }
    
    const skills = await Skill.find(query).sort(sortOptions);
    
    res.json(skills);
  } catch (error) {
    console.error('Get skills error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/skills/popular
// @desc    Get popular skills
// @access  Public
router.get('/popular', async (req, res) => {
  try {
    const skills = await Skill.find({ isActive: true })
      .sort({ popularity: -1, totalUsers: -1 })
      .limit(16);
    
    res.json(skills);
  } catch (error) {
    console.error('Get popular skills error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/skills/categories
// @desc    Get all skill categories
// @access  Public
router.get('/categories', async (req, res) => {
  try {
    const categories = await Skill.distinct('category');
    res.json(categories);
  } catch (error) {
    console.error('Get categories error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/skills/:id
// @desc    Get skill by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    
    res.json(skill);
  } catch (error) {
    console.error('Get skill error:', error);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
