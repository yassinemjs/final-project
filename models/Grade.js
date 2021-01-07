const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GradeSchema = new Schema({
  code: {
    type: Number,
  },
  grade: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('grade', GradeSchema);
