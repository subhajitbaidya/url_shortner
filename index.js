const express = require("express");
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/user");
const path = require("path");
const { connectToMongoDB } = require("./connect");
const cookieParser = require("cookie-parser");
const { checkForAuthentication, restrictTo } = require("./middleware/auth");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("Mongodb connected!")
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthentication);

app.use("/url", restrictTo(["NORMAL"]), urlRoute);
app.use("/user", userRoute);
app.use("/", staticRoute);

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
