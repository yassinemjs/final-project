const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  note: {
    type: Number,
  },
  enseignant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'enseignant',
  },
  inspector: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'inspector',
  },
  nature: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Note = mongoose.model('note', NoteSchema);
