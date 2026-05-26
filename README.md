SkillSwap — Learn, Teach & Grow Together

SkillSwap is a full-stack peer-to-peer skill exchange platform built with the MERN stack that allows users to connect with people who can teach skills they want to learn while sharing their own expertise in return.

Instead of traditional paid learning platforms, SkillSwap focuses on collaborative learning through direct user-to-user interaction. Users can create profiles, showcase their skills, discover other learners, send exchange requests, and connect through integrated real-time video meetings.
The platform was designed with scalability, clean architecture, authentication security, and modern UI/UX practices in mind.

## Why I Built This Project

Most online learning platforms focus only on paid courses or one-way teaching. I wanted to build something more community-driven where people could:

* Learn from each other directly
* Exchange knowledge instead of money
* Build meaningful learning connections
* Practice communication and collaboration
* Access learning opportunities more easily

SkillSwap solves this by creating a simple ecosystem where users can both teach and learn.

# Core Features

## User Authentication & Security

The platform includes a secure authentication system using JWT tokens and encrypted passwords.

### Features Included

* User signup and login
* Secure password hashing using bcrypt
* JWT-based authentication
* Protected backend routes
* Persistent login sessions
* Authorization middleware
* Input validation and error handling

## User Profiles

Every user can create a personalized profile containing:

* Skills they can teach
* Skills they want to learn
* Bio and profile details
* Experience level
* Availability information

This makes discovering suitable learning partners easier.

## Skill Exchange System

The main functionality of the platform revolves around skill swapping.

### Users Can

* Browse other user profiles
* Search users based on skills
* Send collaboration/swap requests
* Accept or reject incoming requests
* Track active learning exchanges
* Manage connected users

The exchange system is designed to simulate real-world collaboration platforms.

---

## Real-Time Video Communication

SkillSwap integrates Jitsi Meet for browser-based video conferencing.

### Benefits

* No additional software required
* One-click video meetings
* Real-time interaction between users
* Smooth learning collaboration experience
* Lightweight integration with frontend

---

## Modern Frontend Experience

The frontend focuses heavily on usability and clean design.

### UI Features

* Fully responsive design
* Mobile-friendly layouts
* Smooth navigation
* Interactive dashboards
* Dynamic rendering
* Reusable React components
* Modern Tailwind CSS styling
* Loading states and notifications

# Tech Stack

## Frontend

| Technology       | Purpose                          |
| ---------------- | -------------------------------- |
| React.js         | Building dynamic user interfaces |
| Tailwind CSS     | Modern responsive styling        |
| React Router DOM | Frontend routing                 |
| Axios            | API communication                |
| Context API      | State management                 |


## Backend

| Technology | Purpose             |
| ---------- | ------------------- |
| Node.js    | Runtime environment |
| Express.js | Backend framework   |
| MongoDB    | Database            |
| Mongoose   | Database modeling   |
| JWT        | Authentication      |
| bcrypt     | Password security   |

---

## Third-Party Integrations

| Service          | Usage               |
| ---------------- | ------------------- |
| Jitsi Meet API   | Video communication |
| MongoDB Atlas    | Cloud database      |
| Render           | Backend deployment  |
| Vercel           | Frontend deployment |


# Application Architecture

The project follows a modular MERN architecture to keep the codebase scalable and maintainable.

```bash
SkillSwap/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── layouts/
│   │   └── utils/
│   │
│   └── public/
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── config/
│   ├── validators/
│   └── utils/
│
└── README.md
```

# Installation Guide

## Clone Repository

```bash
git clone https://github.com/your-username/skillswap.git
cd skillswap
```

---

# Backend Setup

```bash
cd server
npm install
```

## Create Environment Variables

Create a `.env` file inside the `server` directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```

## Start Backend Server

```bash
npm run dev
```

# Frontend Setup

```bash
cd client
npm install
```

## Create Environment Variables

Create a `.env` file inside the `client` directory.

```env
VITE_API_URL=http://localhost:5000/api
```

## Start Frontend

```bash
npm run dev
```

# API Overview

## Authentication Routes

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| POST   | `/api/auth/register` | Register new user |
| POST   | `/api/auth/login`    | Authenticate user |
| GET    | `/api/auth/profile`  | Fetch profile     |

# Security Implementations

Security was an important part of this project.

### Implemented Measures

* JWT Authentication
* Password hashing using bcrypt
* Protected API routes
* Environment variable protection
* Input sanitization
* Backend validation middleware
* Error handling middleware


# Problems Solved During Development

While building SkillSwap, several practical engineering problems had to be solved.

### Some Key Challenges

#### Managing Authentication Flow

Handling token-based authentication across frontend and backend while maintaining protected routes and persistent sessions.

#### Structuring Scalable Backend Code

Designing the backend using controllers, middleware, routes, and modular architecture for maintainability.

#### Real-Time Communication Integration

Integrating Jitsi Meet smoothly into the React frontend while maintaining clean user experience.

#### State Management

Managing user authentication state, API loading states, and dashboard data across multiple pages.

#### Responsive UI Design

Ensuring proper responsiveness across desktop, tablet, and mobile devices.


# Future Improvements

There are several features planned for future versions of the platform.

### Planned Features

* Real-time messaging system
* AI-based skill recommendations
* Notification system
* User reviews and ratings
* Skill verification badges
* Scheduling and calendar integration
* Group learning rooms
* Dark mode support
* Multi-language support
* WebSocket-based live features


# What I Learned From This Project

Building SkillSwap helped me strengthen my understanding of:

* Full-stack MERN development
* REST API design
* Authentication systems
* Database modeling
* React state management
* Backend architecture
* Third-party API integrations
* Responsive frontend development
* Real-world project structuring
* Deployment workflows


# Deployment

## Frontend Deployment

Recommended platforms:

* Vercel
* Netlify

## Backend Deployment

Recommended platforms:

* Render
* Railway
* VPS using Docker

## Database

* MongoDB Atlas

# Screenshots

## Landing Page

<img width="943" height="433" alt="image" src="https://github.com/user-attachments/assets/7a013600-45ac-410c-8093-fb8c81ecb1d3" />

## User Dashboard


## Skill Exchange Interface



## Video Meeting Feature



# Contributing

Contributions, suggestions, and improvements are always welcome.

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request


# Author:
## Debashish Sarkar

Aspiring Software Engineer focused on building scalable full-stack applications and modern web experiences.

### Connect With Me

* Portfolio: `https://debashishsarkar.dev/`
* LinkedIn: `https://www.linkedin.com/in/sarkar-ds`
* GitHub: `https://github.com/sarkar-ds`

# License

This project is licensed under the MIT License.

# Support The Project

If you liked this project, consider giving it a star on GitHub. It helps support the project and motivates further development.
