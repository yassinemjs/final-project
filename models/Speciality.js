const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SpecialitySchema = new Schema({
  code: {
    type: Number,
  },
  speciality: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('speciality', SpecialitySchema);
