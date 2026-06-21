const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a project title'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please add a project description']
  },
  category: {
    type: String,
    required: [true, 'Please add a project category']
  },
  technologies: {
    type: [String],
    required: true
  },
  githubLink: {
    type: String,
    default: ''
  },
  liveDemoLink: {
    type: String,
    default: ''
  },
  imageUrl: {
    type: String,
    default: ''
  },
  dateString: {
    type: String,
    default: ''
  },
  isFeatured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', ProjectSchema);
