const Project = require('../models/Project');

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single project
// @route   GET /api/projects/:id
// @access  Public
const getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a project
// @route   POST /api/projects
// @access  Private
const createProject = async (req, res) => {
  try {
    const { title, description, category, technologies, githubLink, liveDemoLink, imageUrl, dateString, isFeatured } = req.body;

    if (!title || !description || !category) {
      return res.status(400).json({ message: 'Please add required fields (title, description, category)' });
    }

    const project = await Project.create({
      title,
      description,
      category,
      technologies: typeof technologies === 'string' ? technologies.split(',').map(tech => tech.trim()) : technologies,
      githubLink,
      liveDemoLink,
      imageUrl,
      dateString,
      isFeatured
    });

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Private
const updateProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    const { title, description, category, technologies, githubLink, liveDemoLink, imageUrl, dateString, isFeatured } = req.body;

    const updatedData = {
      title,
      description,
      category,
      technologies: typeof technologies === 'string' ? technologies.split(',').map(tech => tech.trim()) : technologies,
      githubLink,
      liveDemoLink,
      imageUrl,
      dateString,
      isFeatured
    };

    const updatedProject = await Project.findByIdAndUpdate(req.params.id, updatedData, {
      new: true,
      runValidators: true
    });

    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete project
// @route   DELETE /api/projects/:id
// @access  Private
const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    await project.deleteOne();
    res.status(200).json({ id: req.params.id, message: 'Project removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject
};
