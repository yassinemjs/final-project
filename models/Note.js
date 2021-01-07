const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  note: {
    type: String,
    required: true,
  },
  inspector: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "inspector",
  },
  enseignant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "enseignant",
  },
});

module.exports = Note = mongoose.model("note", NoteSchema);
