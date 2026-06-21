const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/skills', require('./routes/skillRoutes'));
app.use('/api/services', require('./routes/serviceRoutes'));
app.use('/api/messages', require('./routes/messageRoutes'));

// Basic Health Endpoint
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Auto-seed Database with CV details if empty
const seedDatabase = async () => {
  try {
    const Project = require('./models/Project');
    const Skill = require('./models/Skill');
    const User = require('./models/User');

    // 1. Seed Admin User if none exists
    const userCount = await User.countDocuments();
    if (userCount === 0) {
      await User.create({
        username: 'admin',
        password: 'password123' // Will be hashed by user pre-save hook
      });
      console.log('Seeded default admin user (admin / password123)');
    }

    // 2. Seed Skills if none exist
    const skillCount = await Skill.countDocuments();
    if (skillCount === 0) {
      const defaultSkills = [
        { name: 'React.js', category: 'Frontend', proficiencyLevel: 90, iconClass: 'ri-reactjs-fill' },
        { name: 'HTML5', category: 'Frontend', proficiencyLevel: 95, iconClass: 'ri-html5-fill' },
        { name: 'CSS3', category: 'Frontend', proficiencyLevel: 90, iconClass: 'ri-css3-fill' },
        { name: 'Node.js', category: 'Backend', proficiencyLevel: 85, iconClass: 'ri-node-js' },
        { name: 'Express.js', category: 'Backend', proficiencyLevel: 85, iconClass: 'ri-terminal-box-line' },
        { name: 'MongoDB', category: 'Backend', proficiencyLevel: 80, iconClass: 'ri-database-2-fill' },
        { name: 'SQL / MySQL', category: 'Backend', proficiencyLevel: 85, iconClass: 'ri-database-fill' },
        { name: 'JavaScript', category: 'Language', proficiencyLevel: 90, iconClass: 'ri-javascript-fill' },
        { name: 'Python', category: 'Language', proficiencyLevel: 85, iconClass: 'ri-file-code-fill' },
        { name: 'Java', category: 'Language', proficiencyLevel: 80, iconClass: 'ri-cup-fill' },
        { name: 'R', category: 'Language', proficiencyLevel: 70, iconClass: 'ri-line-chart-fill' },
        { name: 'Git & GitHub', category: 'Tool', proficiencyLevel: 90, iconClass: 'ri-github-fill' },
        { name: 'Linux', category: 'Tool', proficiencyLevel: 80, iconClass: 'ri-ubuntu-fill' }
      ];
      await Skill.insertMany(defaultSkills);
      console.log('Seeded default skills list successfully.');
    }

    // 3. Seed Projects if none exist
    const projectCount = await Project.countDocuments();
    if (projectCount === 0) {
      const defaultProjects = [
        {
          title: 'Hotel Management System',
          description: 'A comprehensive management platform built for Grand Terrace Colombo. The system streamlines booking services, nightlife table reservations, shisha inventory, and automated billing workflows for a seamless guest experience.',
          category: 'Web App',
          technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'CSS'],
          githubLink: 'https://github.com/dulitha-matharaarachchi',
          liveDemoLink: '',
          imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop',
          dateString: 'Feb 2026 - Apr 2026',
          isFeatured: true
        },
        {
          title: 'Spa Management System',
          description: 'Developed for Samsara Wellness Spa & Yoga located at the Grand Oriental Hotel in Colombo. Provides scheduling for guest spa treatments and massage therapies, manages shifts of professional masseurs, and generates performance and sales reports.',
          category: 'Web App',
          technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'CSS'],
          githubLink: 'https://github.com/dulitha-matharaarachchi',
          liveDemoLink: '',
          imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop',
          dateString: 'Apr 2026 - Jun 2026',
          isFeatured: true
        },
        {
          title: 'Event Management System',
          description: 'A full-scale booking and planning portal created for Infinity Events & Entertainment Pvt Ltd. Manages creative audio-visual setups, advanced lighting cues, drone show schedules, and client contracts for large corporate and international events.',
          category: 'Web App',
          technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'CSS'],
          githubLink: 'https://github.com/dulitha-matharaarachchi',
          liveDemoLink: '',
          imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop',
          dateString: 'Apr 2026 - Jun 2026',
          isFeatured: true
        }
      ];
      await Project.insertMany(defaultProjects);
      console.log('Seeded default projects successfully.');
    }
  } catch (error) {
    console.error('Error seeding database:', error.message);
  }
};

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
  await seedDatabase();
});
