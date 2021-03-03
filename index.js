const express = require("express");
const database = require("./database/crudrepository.js");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/api/locations", (req, res) => {
  res.send(database.findAll());
});

app.get("/api/locations/:urlId([0-9]+)", (req, res) => {
  const urlId = Number(req.params.urlId);
  res.json(database.findById(urlId));
});

app.delete("/api/locations/:urlId([0-9]+)", (req, res) => {
  const urlId = Number(req.params.urlId);
  if (database.deleteById(urlId)) {
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});
