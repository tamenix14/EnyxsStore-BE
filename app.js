const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");

const errorMiddleware = require("./middlewares/error");
app.use(express.json());
app.use(cookieParser());
// Import all routes
const products = require("./routes/product");
const user = require("./routes/user");
const order = require("./routes/order");

app.get("/", (req, res) => {
    res.send("Hello");
})
app.use("/api", products);
app.use("/api", user);
app.use("/api", order);
// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
