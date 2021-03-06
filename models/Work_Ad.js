const mongoose = require("mongoose");
const { Schema } = mongoose;

const workAdSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  titre: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  typeJob: { type: Array, default: [], required: true },
  description: {
    type: String,
    required: true,
  },
  adresse: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  //add image one or multiple
  imageUrl: [
    {
      type: String,
    },
  ],
  Auth: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
module.exports = Work_Ad = mongoose.model("Work_Ad", workAdSchema);
