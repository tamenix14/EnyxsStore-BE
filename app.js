const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const bodyparser = require("body-parser");

const fileUpload = require("express-fileupload");

const errorMiddleware = require("./middlewares/error");
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());



// Import all routes
const products = require("./routes/product");
const user = require("./routes/user");
const order = require("./routes/order");

app.get("/", (req, res) => {
  res.send("Hello");
});
app.use("/api", products);
app.use("/api", user);
app.use("/api", order);
// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
