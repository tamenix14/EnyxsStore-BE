if(process.env.NODE_ENV !== 'PRODUCTION') require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary");

// Handle Uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.stack}`);
  console.log("Shutting down server due to uncaught exception");
  process.exit(1);
});

// Setting up cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUDNAME_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


// config db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((con) => console.log(`DB Connected with host : ${con.connection.host}`))
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
