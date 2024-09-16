const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
const { authRouter } = require("./routes/auth.routes");
require("dotenv").config();
require("./config/init_db");
const port = process.env.PORT || 8080;
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/auth", authRouter);

// handle errors here
app.use(async (req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});