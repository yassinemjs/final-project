const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  profileImg: {
    type: String,
  },
});

module.exports = mongoose.model("image", ImageSchema);
