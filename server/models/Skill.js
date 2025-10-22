const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Skill name is required'],
    unique: true,
    trim: true,
    maxlength: [50, 'Skill name cannot exceed 50 characters']
  },
  icon: {
    type: String,
    required: [true, 'Skill icon is required'],
    default: '💻'
  },
  category: {
    type: String,
    enum: ['Technology', 'Music', 'Language', 'Art', 'Science', 'Sports', 'Other'],
    default: 'Other'
  },
  description: {
    type: String,
    maxlength: [200, 'Description cannot exceed 200 characters']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  popularity: {
    type: Number,
    default: 0,
    min: 0
  },
  totalUsers: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Index for search functionality
skillSchema.index({ name: 'text', category: 'text' });

module.exports = mongoose.model('Skill', skillSchema);
