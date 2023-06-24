const express = require("express");
const app = express();
const port = 8000;

// routes
const users = require("./src/routes/users");
const auth = require("./src/routes/auth");
const mahasiswa = require("./src/routes/mahasiswa");

// middleware
const middleware = require("./src/middleware");

// database
const connection = require("./database/conection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(middleware.logger);

// test query
connection.query("SELECT 1", function (errors, results) {
  console.log("DB Connection : ", { results, errors });
});

// Routers
app.use("/users", middleware.isAuthenticated, users);
app.use("/auth", auth);
app.use("/mahasiswa", mahasiswa);

app.listen(port, () => console.log(`App running on http://localhost:${port}`));
