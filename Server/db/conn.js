const mongoose = require("mongoose");

const DB =
  "mongodb+srv://shakoorqariusama:H.Usama123@crud.aqciwmz.mongodb.net/CRUD_App?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected successfully"))
  .catch((error) => console.log(error.message));
