const mongoose = require("mongoose");
const { Schema } = mongoose;

const searchAdSchema = new Schema({
  name: {
    type: String,
  },
  typeJob: { type: Array, default: [], required: true },
  adresse: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  email:{
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  Auth: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = Search_Ad = mongoose.model("Search_Ad", searchAdSchema);
