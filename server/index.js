import express from "express";
import mongoose from "mongoose";

const app = express();
mongoose
  .connect(
    "mongodb+srv://kirankdas7777:rv3V8IVsOMsMUWax@mern007.hyskgoz.mongodb.net/MERN007?retryWrites=true&w=majority&appName=MERN007"
  )
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(5000, () => {
  console.log("Server is connected!!!!!");
});
