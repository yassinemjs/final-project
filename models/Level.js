const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LevelSchema = new Schema({
  code: {
    type: Number,
  },
  level: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('level', LevelSchema);
