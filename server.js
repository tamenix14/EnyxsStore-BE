require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");

// Handle Uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.stack}`);
  console.log("Shutting down server due to uncaught exception");
  process.exit(1);
});

// config db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECT ERROR", err));

// Setting up config file

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});



// Handle Unhandled Promise Ejection
process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err.stack}`);
  console.log(`Shutting down the server due to Unhandle Promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
