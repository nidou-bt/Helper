const mongoose = require("mongoose");
const { Schema } = mongoose;
// ilawaj 3ala 5adam
const workAdSchema = new Schema({
  titre: {
    type: String,
    required: true,
  },
  // typeJob: {
  //   type: Array,
  //   required: true,
  //   enum:["nettoyage","plomberie","électricien","transport","peinture","construction","Autres" ]
  //   },
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
