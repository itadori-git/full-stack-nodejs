const express = require("express");
const bookRoute = require("./routes/bookRoute")

const app = express();
require("./database/connection");
app.use(express.json());

//localhost:3000/api +  /hello = localhost:3000/api/hello
app.use("/api/books", bookRoute)
app.listen(3000, function () {
  console.log("server/backend/node started on port 3000");
});
