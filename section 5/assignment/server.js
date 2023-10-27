const express = require("express");
const app = express();
const mainRoute = require("./routes/main_route");
const userRoute = require("./routes/user_route");
const notFound = require("./routes/not_found_route");
const bodyParser = require("body-parser");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(userRoute);
app.use(mainRoute);
app.use(notFound);
app.listen(3000);
