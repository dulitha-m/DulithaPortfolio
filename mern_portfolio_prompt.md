# MERN Stack Portfolio & Admin Panel Generation Prompt

This document provides a highly detailed prompt and technical blueprint designed to guide a language model to generate a complete, production-ready MERN (MongoDB, Express, React, Node.js) stack portfolio website and integrated admin panel for **Dulitha Matharaarachchi**.

---

## 📋 The Master Prompt for LLM Code Generation

*Copy and paste the prompt below into your target language model to generate the complete codebase.*

```markdown
You are an expert full-stack developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js) and modern UI/UX design.

Your task is to generate the complete codebase for a premium, highly interactive portfolio website and integrated admin panel for Dulitha Matharaarachchi. The website must have a "wow factor"—featuring rich dark-mode aesthetics, smooth glassmorphism, micro-animations (Framer Motion), and responsive layouts.

Below is the extracted CV content and user preferences to use for populating the default database records and UI sections:

### 👤 Profile Information
- **Name**: Dulitha Matharaarachchi
- **Bio Summary**: Enthusiastic second-year undergraduate specializing in Artificial Intelligence, with a strong foundation in machine learning, software development, and data analytics. Proven ability to deliver end-to-end technical projects across Python, Java, and web technologies. Active communicator and collaborative team member who contributes meaningfully to innovative, impactful solutions.
- **Date of Birth**: 17/04/2004
- **Gender**: Male
- **NIC/Passport**: 200410800189
- **Address**: Colombo, Sri Lanka
- **Contact Details**:
  - Email: dulithamathara@gmail.com
  - Phone: 0779662291
  - LinkedIn: Linkedin.com/in/dulitha-matharaarachchi/
  - GitHub: (Include icon linking to Dulitha's GitHub profiles)
  - Socials: Instagram, Facebook

### 🎓 Education & Certifications
1. **BSc (Hons) in Artificial Intelligence**
   - Institution: SLIIT | Sri Lanka Institute of Information Technology
   - Location/Period: Malabe | 2024 - Present
2. **G.C.E. Advanced Level**
   - Institution: Nalanda College, Colombo
   - Location/Period: Colombo | 2021 - 2023
3. **G.C.E. Ordinary Level**
   - Institution: Nalanda College, Colombo
   - Location/Period: Colombo | 2019 - 2020
4. **Course Certification**: Complete Full Stack Web Development Bootcamp, Udemy
   - Period: Jan 2026 - Present
   - Details: Modern Stack - JavaScript, Node.js, React, MongoDB, Linux.

### 🛠️ Technical Skills
- **Frontend/Core**: React.js, HTML, CSS, JavaScript
- **Backend/Database**: Node.js, Express.js, MongoDB, SQL, MySQL
- **Programming Languages**: Python, Java, R
- **Tools/DevOps**: Git, GitHub, Linux

### 💼 Projects
1. **Hotel Management System, Grand Terrace Colombo** (Feb 2026 - Apr 2026)
   - *Description*: Grand Terrace is a vibrant nightlife destination offering a premium mix of foreign and local liquor, bar bites, shisha experience, and karaoke. The system handles bookings, inventory, and billing.
2. **Spa Management System, Samsara Wellness Spa & Yoga** (Apr 2026 - Jun 2026)
   - *Description*: Wellness center management system located at Grand Oriental Hotel, Colombo 01. Tracks treatments, massages, appointment scheduling, and masseur assignments.
3. **Event Management System, Infinity Events & Entertainment Pvt Ltd.** (Apr 2026 - Jun 2026)
   - *Description*: High-end event planning management system. Handles large-scale event logistics, audio-visual technical details, led-wall configurations, and client bookings.

### 👥 References
- **Banuka Bandara** (Software Engineer) | Email: banupawan12@gmail.com | Phone: 0765324824
- **Osanda Chalukya** (Architect, Micd Associates) | Email: osanda28@gmail.com | Phone: 0765597747

---

### 🎨 Design & Aesthetic Guidelines
1. **Color Palette**: Sophisticated Dark Theme (e.g., Deep Obsidian `#0B0F19`, Slate Gray `#1E293B`, Neon accents like Cyan `#06B6D4` or Indigo `#6366F1`).
2. **Visuals**: Use modern typography (Inter/Outfit), clean card layouts with subtle hover elevations, glassmorphic navigations (`backdrop-filter: blur()`), and clear SVG icons for tech stacks.
3. **Logo**: Add support for an SVG logo (or customizable brand text "Dulitha.AI").
4. **Interactivity**: Smooth scrolling, page transitions (Framer Motion if possible), and a dynamic project filtering utility.

---

### 🛠️ Technical Specifications & Structure

Please generate files matching the following architecture:

#### 1. Directory Structure
```text
dulitha-portfolio/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── projectController.js
│   │   ├── skillController.js
│   │   └── serviceController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Project.js
│   │   ├── Skill.js
│   │   └── Service.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── projectRoutes.js
│   │   ├── skillRoutes.js
│   │   └── serviceRoutes.js
│   ├── .env.example
│   ├── package.json
│   └── server.js
└── frontend/
    ├── public/
    │   └── logo.svg
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   │   ├── Admin/
    │   │   │   ├── AdminDashboard.jsx
    │   │   │   ├── AdminLogin.jsx
    │   │   │   ├── ProjectForm.jsx
    │   │   │   └── SkillForm.jsx
    │   │   ├── Common/
    │   │   │   ├── Footer.jsx
    │   │   │   └── Navbar.jsx
    │   │   ├── Portfolio/
    │   │   │   ├── About.jsx
    │   │   │   ├── Contact.jsx
    │   │   │   ├── Hero.jsx
    │   │   │   ├── Projects.jsx
    │   │   │   └── Skills.jsx
    │   │   └── ProtectedRoute.jsx
    │   ├── context/
    │   │   └── AuthContext.jsx
    │   ├── App.css
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── package.json
    └── vite.config.js
```

#### 2. Database Schema (Mongoose Models)
Provide schema definitions for:
- `User`: username, password (hashed with bcrypt), createdAt.
- `Project`: title, description, category, technologies (array of strings), githubLink, liveDemoLink, imageUrl, dateString, isFeatured (boolean).
- `Skill`: name, category (e.g., Frontend, Backend, Language, Tool), proficiencyLevel (percentage/rating), iconClass.
- `Service`: title, description, iconClass, basePrice (optional).

#### 3. Backend REST APIs
Implement endpoints with JWT validation for mutative operations (POST, PUT, DELETE):
- `POST /api/auth/register` & `POST /api/auth/login`
- `GET /api/projects` (public) & `POST/PUT/DELETE /api/projects/:id` (protected)
- `GET /api/skills` (public) & `POST/PUT/DELETE /api/skills/:id` (protected)
- `GET /api/services` (public) & `POST/PUT/DELETE /api/services/:id` (protected)

#### 4. Frontend Application
- Build a single page website (SPA) with routing for the portfolio home page and a secure path for `/admin` management.
- Integrate **Context API** (`AuthContext`) for tracking login tokens.
- Secure routes so that only authenticated users can edit details in the admin portal.

Provide clean, modular, and well-commented code for both parts of this application.
```

---

## 🏗️ Technical Blueprint Details

### 1. Frontend Code Structure & Responsibilities

| Component Name | Path | Responsibility |
| :--- | :--- | :--- |
| **App** | `frontend/src/App.jsx` | Main Router (React Router DOM) managing routes between public portfolio and private admin pages. |
| **Navbar** | `frontend/src/components/Common/Navbar.jsx` | Glassmorphic floating navigation with smooth-scroll hooks to sections (Hero, About, Skills, Projects, Contact). |
| **Hero** | `frontend/src/components/Portfolio/Hero.jsx` | Catchy header with a typewriter effect highlighting "AI Developer & Full-Stack Engineer" and a CTA button. |
| **About** | `frontend/src/components/Portfolio/About.jsx` | Profile summary, personal details, education timeline, and CV download trigger. |
| **Skills** | `frontend/src/components/Portfolio/Skills.jsx` | Grouped skill cards showing dynamic progress percentages/badges (using data from API). |
| **Projects** | `frontend/src/components/Portfolio/Projects.jsx` | Grid cards representing the systems developed (Grand Terrace, Samsara, Infinity), filterable by category. |
| **Contact** | `frontend/src/components/Portfolio/Contact.jsx` | Secure client contact form connecting to email APIs or saving messages. |
| **AdminLogin** | `frontend/src/components/Admin/AdminLogin.jsx` | Secure login interface verifying credentials against `/api/auth/login`. Stores JWT in local storage. |
| **AdminDashboard** | `frontend/src/components/Admin/AdminDashboard.jsx` | Central admin control deck with tabs to manage Projects, Skills, and Services (with CRUD actions). |
| **ProjectForm** | `frontend/src/components/Admin/ProjectForm.jsx` | Dynamic form (reusable for Add/Edit) for entering project titles, git links, screenshots, and categories. |

---

### 2. Backend API Specifications

#### Authentication API
* **`POST /api/auth/register`**: Creates admin account. (Can be restricted/disabled after first setup).
* **`POST /api/auth/login`**: Authenticates user and returns a signed JSON Web Token (JWT).
  * *Request Body*: `{ "username": "...", "password": "..." }`
  * *Response (Success)*: `{ "token": "JWT_STRING", "user": { "id": "...", "username": "..." } }`

#### Projects API
* **`GET /api/projects`**: Fetches all projects (Public).
* **`POST /api/projects`**: Adds a new project (Protected).
  * *Headers*: `Authorization: Bearer <token>`
* **`PUT /api/projects/:id`**: Updates an existing project (Protected).
* **`DELETE /api/projects/:id`**: Deletes a project (Protected).

#### Skills API
* **`GET /api/skills`**: Fetches all skills grouped by category (Public).
* **`POST /api/skills`** / **`PUT /api/skills/:id`** / **`DELETE /api/skills/:id`**: CRUD operations (Protected).

---

### 3. Database Schema Definitions (Mongoose)

```javascript
// models/Project.js
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  technologies: [{ type: String }],
  githubLink: { type: String, default: '' },
  liveDemoLink: { type: String, default: '' },
  imageUrl: { type: String, default: 'placeholder.png' },
  dateString: { type: String },
  isFeatured: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
```

```javascript
// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { timestamps: true });

// Password hashing middleware before saving user
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model('User', UserSchema);
```

---

### 4. Admin Panel Functionality & Security

* **JWT Verification**: The backend verifies token validation using a custom middleware `authMiddleware.js` which extracts the token from the `Authorization: Bearer <TOKEN>` header.
* **CRUD Integration**: In the dashboard, state variables control modals or forms. When submitting changes, a standard Fetch/Axios request is sent using the saved JWT:
  ```javascript
  const res = await axios.post('/api/projects', formData, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  });
  ```
* **Persistent Login State**: Context (`AuthContext.jsx`) maintains the token state and provides login/logout wrapper helper functions, ensuring page refreshes don't wipe sessions.

---

### 5. Questions & Answers for Content Setup

Based on the feedback gathered:

1. **Design Aesthetics**: Use modern, clean obsidian dark styles matching AI engineering vibes. A customizable SVG logo (`logo.svg` or CSS style header "Dulitha.AI") is preferred.
2. **Project Demos/Media**: Images and demo links are dynamic fields in the schema. Placeholders will be set up initially, allowing Dulitha to upload real screenshots and demo URLs directly through the completed Admin Panel.
3. **Services Offered**: In addition to projects, the admin panel supports dynamic Creation, Reading, Updating, and Deletion (CRUD) of Freelance Services (e.g. *"AI/ML Consulting"*, *"Full-Stack Development"*).
4. **Authentication Credentials**: The setup includes a one-time command-line seeding utility or an initialized register form (disabled after first creation) for setting up secure admin credentials.
5. **Deployment Targets**: Code is structured cleanly to separate backend/frontend configuration so it can easily deploy to Vercel/Netlify (frontend) and Render/Heroku (backend with database links in `.env` variables).
