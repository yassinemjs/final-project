const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SituationSchema = new Schema({
  code: {
    type: Number,
  },
  situation: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('situation', SituationSchema);
