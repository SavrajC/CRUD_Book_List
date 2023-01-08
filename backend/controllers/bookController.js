const asyncHandler = require("express-async-handler");

const Book = require("../models/bookModel");
const User = require("../models/userModel");
//@desc Get Books
//@route  GET /api/Books
//@access Private

const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find({ user: req.user.id });

  res.status(200).json(books);
});
//@desc Set Books
//@route  POST /api/Books
//@access Private
const setBooks = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a Name");
  }
  if (!req.body.rating) {
    res.status(401);
    throw new Error("Please Enter a Rating!");
  }
  if (!req.body.review) {
    res.status(401);
    throw new Error("Please Enter a Review!");
  }
  const book = await Book.create({
    text: req.body.text,
    rating: req.body.rating,
    review: req.body.review,
    user: req.user.id,
  });

  res.status(200).json(book);
});
//@desc update Books
//@route  PUT /api/Books/:id
//@access Private
const updateBooks = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (!book) {
    res.status(400);
    throw new Error("Book Not Found");
  }

  //Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User Not Found");
  }

  //Make sure logged in user matches the Book user
  if (book.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User Not Authorized");
  }
  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedBook);
});
//@desc Delete Books
//@route  DELETE /api/Books:id
//@access Private
const deleteBooks = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    res.status(400);
    throw new Error("Book Not found");
  }

  //Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User Not Found");
  }
  //Make sure logged in user matches the Book user
  if (book.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User Not Authorized");
  }

  await book.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getBooks,
  setBooks,
  updateBooks,
  deleteBooks,
};
