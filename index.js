const Datastore = require("nedb");
const http = require("http");
const fs = require("fs");
require("dotenv").config();

const DB_USERS = new Datastore({
  filename: "./data/users/accounts.jsonl",
  autoload: true,
});
const DB_FILMS = new Datastore({
  filename: "./data/index/films.jsonl",
  autoload: true,
});
const DB_SERIES = new Datastore({
  filename: "./data/index/series.jsonl",
  autoload: true,
});
const DB_LIVES = new Datastore({
  filename: "./data/index/lives.jsonl",
  autoload: true,
});
const DB_TOKENS = new Datastore({
  filename: "./data/users/tokens.jsonl",
  autoload: true,
});

const PORT = process.env.PORT || "8080";
let api_update = {};

const server = http.createServer((req, res) => {
  // respond website content
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
      res.write(data);
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
  // send films cards datas
  if (req.url === "/api/getcontent/home"){
    console.log(req);
    data = req
    if (req.token == "guest") {
      res.write("respond random films and series")
    }
  }
});

server.listen(PORT, () => {
    console.log(`Server is running at: localhost:${PORT}`);
  });

  DB_FILMS.insert({cover: "https://i.ibb.co/qF6JPJN/Capture-d-e-cran-2022-10-24-a-01-52-07.png", title:"test", description: "this is a test, fgjhkjhgyt rtyu strytu ryftgu hrtfyguh ytfgu hyft guh", year:"2022", time:"168", lang: ["vo en", "vost fr", "ad en"], iframe_srv:["https://vidcloud9.me/episode/watchadfree-squid-game-season-1-episode-1", ]})