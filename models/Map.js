const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    name: 
    {
        type: String
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    }
  });


  module.exports = mongoose.model('Location', LocationSchema);