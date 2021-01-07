const mongoose = require('mongoose');

const SchoolSchema = new mongoose.Schema({
  id_etab: {
    type: Number,
  },
  etab: {
    type: String,
    required: true,
  },
  secteur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'secteur',
  },
});

module.exports = mongoose.model('school', SchoolSchema);
