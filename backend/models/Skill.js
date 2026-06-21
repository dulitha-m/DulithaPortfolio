const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a skill name'],
    trim: true,
    unique: true
  },
  category: {
    type: String,
    required: [true, 'Please add a skill category'],
    enum: ['Frontend', 'Backend', 'Language', 'Tool', 'Other']
  },
  proficiencyLevel: {
    type: Number,
    min: 0,
    max: 100,
    default: 80
  },
  iconClass: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Skill', SkillSchema);
