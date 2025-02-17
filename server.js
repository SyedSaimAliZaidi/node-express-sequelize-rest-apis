const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan")
const app = express();


app.use(cors());

app.use(logger('dev'))
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models/db");

db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});

require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
