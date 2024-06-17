const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const app = express();
const router = express.Router();
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const mechanicRoutes = require("./routes/mechanicRoutes");
const servicesRoutes = require("./routes/serviceRoutes");

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(cookieParser());

// Routes ///////////////////////////////////////////////////////
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/mechanic", mechanicRoutes);
app.use("/api/v1/services", servicesRoutes);

module.exports = app;
