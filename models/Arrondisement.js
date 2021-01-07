const mongoose = require("mongoose");

const ArrodissementSchema = new mongoose.Schema({
  arrondissement: {
    type: String,
    required: true,
  },
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "citys",
  },
  inspector: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "inspector",
  },
});

module.exports = Inspector = mongoose.model(
  "arrondissement",
  ArrodissementSchema
);
