const express = require("express");
const { v4: uuid } = require("uuid");
const DrawingAppRouter = express.Router();
const bodyParser = express.json();
const logger = require("./logger");
const DrawingAppService = require("./DrawingAppService");
const knexbase = require("knex");

const knex = knexbase({
  client: "pg",
  connection: process.env.DATABASE_URL,
});

DrawingAppRouter.route("/")
  .get((req, res, next) => {
    DrawingAppService.getAllArts(knex)
      .then((arts) => {

        res.json(arts);
      })
      .catch(e => console.log(e))
  })
  .post(bodyParser, (req, res, next) => {
    const { author, description, src, key } = req.body;

    if (!author) {
      return res.status(400).send("Author name required");
    }

    const newArt = {
      id: uuid(),
      author,
      description,
      src,
      key
    };

    DrawingAppService.insertArt(knex, newArt)
      .then((art) => {
        res
          .status(201)
          .location(`/`)
          .json(newArt)
          .send("Art created");
      })
      .catch(next);
  });


module.exports = DrawingAppRouter;
