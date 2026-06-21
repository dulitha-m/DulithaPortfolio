const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a service title'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please add a service description']
  },
  iconClass: {
    type: String,
    default: ''
  },
  basePrice: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Service', ServiceSchema);
