const mongoose = require('mongoose');
require('dotenv').config({ path: './config.env' });

const Skill = require('./models/Skill');
const User = require('./models/User');
const Review = require('./models/Review');

// Sample skills data
const skillsData = [
  { name: 'Python', icon: '💻', category: 'Technology' },
  { name: 'JavaScript', icon: '🌐', category: 'Technology' },
  { name: 'React', icon: '⚛️', category: 'Technology' },
  { name: 'Node.js', icon: '🚀', category: 'Technology' },
  { name: 'Guitar', icon: '🎸', category: 'Music' },
  { name: 'Piano', icon: '🎹', category: 'Music' },
  { name: 'Singing', icon: '🎤', category: 'Music' },
  { name: 'Violin', icon: '🎻', category: 'Music' },
  { name: 'Spanish', icon: '🇪🇸', category: 'Language' },
  { name: 'French', icon: '🇫🇷', category: 'Language' },
  { name: 'Mandarin', icon: '🇨🇳', category: 'Language' },
  { name: 'Japanese', icon: '🇯🇵', category: 'Language' },
  { name: 'Mathematics', icon: '🧮', category: 'Science' },
  { name: 'Physics', icon: '🔬', category: 'Science' },
  { name: 'History', icon: '📜', category: 'Science' },
  { name: 'Chemistry', icon: '🧪', category: 'Science' },
  { name: 'Drums', icon: '🥁', category: 'Music' },
  { name: 'Drawing', icon: '🎨', category: 'Art' },
  { name: 'Photography', icon: '📸', category: 'Art' },
  { name: 'Cooking', icon: '👨‍🍳', category: 'Other' },
  { name: 'Yoga', icon: '🧘', category: 'Sports' },
  { name: 'Swimming', icon: '🏊', category: 'Sports' }
];

// Sample users data
const usersData = [
  {
    fullName: 'Alice Johnson',
    email: 'alice@example.com',
    password: 'password123',
    skillToTeach: 'UI/UX Design',
    skillToLearn: 'Python Development',
    avatar: 'https://placehold.co/100x100/7E22CE/FFFFFF?text=A',
    bio: 'Creative designer passionate about user experience'
  },
  {
    fullName: 'Ben Carter',
    email: 'ben@example.com',
    password: 'password123',
    skillToTeach: 'Python Development',
    skillToLearn: 'Guitar',
    avatar: 'https://placehold.co/100x100/2563EB/FFFFFF?text=B',
    bio: 'Full-stack developer who loves coding and music'
  },
  {
    fullName: 'Chloe Davis',
    email: 'chloe@example.com',
    password: 'password123',
    skillToTeach: 'Digital Marketing',
    skillToLearn: 'Spanish',
    avatar: 'https://placehold.co/100x100/DB2777/FFFFFF?text=C',
    bio: 'Marketing specialist with a passion for languages'
  },
  {
    fullName: 'David Evans',
    email: 'david@example.com',
    password: 'password123',
    skillToTeach: 'Creative Writing',
    skillToLearn: 'Photography',
    avatar: 'https://placehold.co/100x100/16A34A/FFFFFF?text=D',
    bio: 'Aspiring author who wants to capture stories through images'
  }
];

// Sample reviews data
const reviewsData = [
  {
    skill: 'Python Development',
    rating: 5,
    review: 'SkillSwap connected me with a fantastic mentor for learning piano. The platform is intuitive and the community is incredibly supportive. Highly recommended!'
  },
  {
    skill: 'Guitar',
    rating: 4,
    review: 'I\'ve met so many interesting people from around the world. It\'s more than just learning; it\'s about building genuine connections. A truly global classroom.'
  },
  {
    skill: 'UI/UX Design',
    rating: 5,
    review: 'The search functionality is powerful and helped me find exactly what I was looking for in minutes. The UI is clean, modern, and a pleasure to use.'
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Skill.deleteMany({});
    await User.deleteMany({});
    await Review.deleteMany({});
    console.log('Cleared existing data');

    // Insert skills
    const skills = await Skill.insertMany(skillsData);
    console.log(`Inserted ${skills.length} skills`);

    // Insert users
    const users = await User.insertMany(usersData);
    console.log(`Inserted ${users.length} users`);

    // Create reviews (connecting users)
    const reviews = [];
    for (let i = 0; i < reviewsData.length; i++) {
      const reviewData = reviewsData[i];
      const reviewer = users[i % users.length];
      const reviewedUser = users[(i + 1) % users.length];
      
      reviews.push({
        reviewer: reviewer._id,
        reviewedUser: reviewedUser._id,
        skill: reviewData.skill,
        rating: reviewData.rating,
        review: reviewData.review,
        isVerified: true
      });
    }

    await Review.insertMany(reviews);
    console.log(`Inserted ${reviews.length} reviews`);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
