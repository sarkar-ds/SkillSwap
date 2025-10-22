const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  reviewer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Reviewer is required']
  },
  reviewedUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Reviewed user is required']
  },
  skill: {
    type: String,
    required: [true, 'Skill is required'],
    trim: true
  },
  rating: {
    type: Number,
    required: [true, 'Rating is required'],
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating cannot exceed 5']
  },
  review: {
    type: String,
    required: [true, 'Review text is required'],
    trim: true,
    maxlength: [500, 'Review cannot exceed 500 characters']
  },
  isVerified: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Ensure a user can only review another user once per skill
reviewSchema.index({ reviewer: 1, reviewedUser: 1, skill: 1 }, { unique: true });

// Update user rating when review is created/updated
reviewSchema.post('save', async function() {
  await this.constructor.calculateAverageRating(this.reviewedUser);
});

reviewSchema.post('remove', async function() {
  await this.constructor.calculateAverageRating(this.reviewedUser);
});

// Static method to calculate average rating
reviewSchema.statics.calculateAverageRating = async function(userId) {
  const stats = await this.aggregate([
    {
      $match: { reviewedUser: userId }
    },
    {
      $group: {
        _id: '$reviewedUser',
        avgRating: { $avg: '$rating' },
        totalReviews: { $sum: 1 }
      }
    }
  ]);

  if (stats.length > 0) {
    await mongoose.model('User').findByIdAndUpdate(userId, {
      rating: Math.round(stats[0].avgRating * 10) / 10,
      totalReviews: stats[0].totalReviews
    });
  }
};

module.exports = mongoose.model('Review', reviewSchema);
