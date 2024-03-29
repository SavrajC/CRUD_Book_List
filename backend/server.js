const path = require("path");
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const colors = require("colors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8000;
const { errorHandler } = require("./middleware/errorMiddleware");
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/books", require("./routes/bookRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

//Serve Frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server Started on port: ${port}`);
});
