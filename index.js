const Datastore = require("nedb");
const http = require("http");
const fs = require("fs");
require("dotenv").config();

const DB_USERS = new Datastore({
  filename: "./data/users/accounts.db",
  autoload: true,
});
const DB_FILMS = new Datastore({
  filename: "./data/index/films.db",
  autoload: true,
});
const DB_SERIES = new Datastore({
  filename: "./data/index/series.db",
  autoload: true,
});
const DB_LIVE = new Datastore({
  filename: "./data/index/live.db",
  autoload: true,
});

const PORT = process.env.PORT || "8080";
let api_update = {};

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./public/index.html", (e, data) => {
      if (e) throw e;
      res.write(data.toLocaleString());
      res.end();
    });
    return;
  }
  if (req.url === "/search.png") {
    fs.readFile("./public/search.png", (e, data) => {
      if (e) throw e;
      res.write(data.toLocaleString());
      res.end();
    });
    return;
  }
  if (req.url === "/login") {
    fs.readFile("./public/login/index.html", (e, data) => {
      if (e) throw e;
      res.write(data.toLocaleString());
      res.end();
    });
    return;
  }
});

server.listen(PORT, () => {
    console.log(`Server is running at: localhost:${PORT}`);
  });
