const express = require("express");
const router = express.Router();
const {
  getBooks,
  setBooks,
  updateBooks,
  deleteBooks,
} = require("../controllers/bookController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getBooks).post(protect, setBooks);

router.route("/:id").put(protect, updateBooks).delete(protect, deleteBooks);

module.exports = router;
