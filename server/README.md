# SkillSwap Backend API

A Node.js/Express backend for the SkillSwap platform that connects people to learn and teach skills.

## Features

- **User Authentication**: JWT-based authentication with bcrypt password hashing
- **User Management**: User profiles, skills, and ratings
- **Skill Management**: Categorized skills with search and filtering
- **Review System**: User reviews and ratings for skill exchanges
- **RESTful API**: Clean, documented API endpoints
- **MongoDB Integration**: Mongoose ODM with proper data modeling

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **CORS**: Cross-origin resource sharing enabled
- **Environment**: dotenv for configuration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

## Installation

1. **Clone the repository and navigate to server directory**
   ```bash
   cd server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Copy `config.env` and update the values:
     ```env
     PORT=5000
     MONGODB_URI=mongodb://localhost:27017/skillswap
     JWT_SECRET=your_jwt_secret_key_here_change_in_production
     NODE_ENV=development
     ```

4. **Start MongoDB**
   - Local: Ensure MongoDB is running on your machine
   - Atlas: Use your MongoDB Atlas connection string

5. **Seed the database (optional)**
   ```bash
   npm run seed
   ```

6. **Start the server**
   ```bash
   # Development mode with nodemon
   npm run dev
   
   # Production mode
   npm start
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user profile

### Users
- `GET /api/users` - Get all users (with pagination, search, filtering)
- `GET /api/users/registered` - Get recently registered users
- `GET /api/users/active` - Get currently active users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/profile` - Update user profile

### Skills
- `GET /api/skills` - Get all skills (with search and filtering)
- `GET /api/skills/popular` - Get popular skills
- `GET /api/skills/categories` - Get all skill categories
- `GET /api/skills/:id` - Get skill by ID

### Reviews
- `GET /api/reviews` - Get all reviews (with pagination and filtering)
- `GET /api/reviews/featured` - Get featured reviews
- `POST /api/reviews` - Create a new review
- `PUT /api/reviews/:id` - Update a review
- `DELETE /api/reviews/:id` - Delete a review

## Data Models

### User
- Basic info: fullName, email, password
- Skills: skillToTeach, skillToLearn
- Profile: avatar, bio, rating, totalReviews
- Timestamps: joinDate, createdAt, updatedAt

### Skill
- Basic info: name, icon, category
- Metadata: description, isActive, popularity, totalUsers
- Categories: Technology, Music, Language, Art, Science, Sports, Other

### Review
- Relationship: reviewer, reviewedUser
- Content: skill, rating, review
- Metadata: isVerified, timestamps

## Authentication

Protected routes require a JWT token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

## Error Handling

The API returns consistent error responses:
```json
{
  "message": "Error description"
}
```

Common HTTP status codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

## Development

### Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run seed` - Seed database with sample data

### File Structure
```
server/
├── models/          # Database models
├── routes/          # API route handlers
├── middleware/      # Custom middleware
├── config.env       # Environment variables
├── server.js        # Main server file
├── seed.js          # Database seeding script
└── package.json     # Dependencies and scripts
```

## Database Seeding

The seed script creates:
- 22 predefined skills across different categories
- 4 sample users with different skill combinations
- Sample reviews connecting users

Run with: `npm run seed`

## Security Features

- Password hashing with bcryptjs
- JWT token authentication
- Input validation and sanitization
- CORS configuration
- Environment variable protection

## Production Considerations

- Change JWT_SECRET to a strong, unique value
- Use environment variables for all sensitive data
- Enable HTTPS in production
- Set up proper MongoDB authentication
- Implement rate limiting
- Add request logging
- Set up monitoring and error tracking

## API Testing

You can test the API endpoints using:
- Postman
- Insomnia
- curl commands
- Frontend integration

## Support

For issues or questions:
1. Check the error logs in the console
2. Verify MongoDB connection
3. Check environment variable configuration
4. Ensure all dependencies are installed
