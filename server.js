const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

//const workout = require("./db_modules/workout.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/apiRoutes.js")(app);


mongoose.connect(process.env.MONGODB_URI || 
  "mongodb://cristinaTerry:221730Tr0512@ds129966.mlab.com:29966/heroku_djbrntsf", 
  { useNewUrlParser: true });


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

