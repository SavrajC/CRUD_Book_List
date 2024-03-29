const mongoose = require("mongoose");

// Schema for books in DB

const bookSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
    rating: {
      type: String,
      required: [true, "Please add a rating value"],
    },
    review: {
      type: String,
      required: [true, "Please add a review value"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Book", bookSchema);
