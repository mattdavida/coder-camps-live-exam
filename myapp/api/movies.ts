import * as express from "express";
import Movie from "../models/movie";

let router = express.Router();

router.get("/", (req, res) => {
  Movie.find().then((movies) => {
    res.json(movies);
  }).catch((err) => {
    res.status(500).json(err);
  });
});

router.get("/:id", (req, res) => {
  Movie.findById(req.params["id"]).then((movie) => {
    res.json(movie);
  });
});

router.post("/", (req, res) => {
  let movie = new Movie();
  movie.name = req.body.name;

  movie.save().then((newMovie) => {
    res.json(newMovie);
  }).catch((err) => {
    res.status(400).json(err);
  });
});

router.post("/:id", (req, res) => {
  let movieId = req.params.id;

  Movie.findById(movieId).then((movie) => {
    movie.name = req.body.name;
    movie.save().then((updatedMovie) => {
      res.json(updatedMovie);
    }).catch((err) => {
      res.status(400).json(err);
    })
  }).catch((err) => {
    res.sendStatus(404);
  });
});

router.delete("/:id", (req, res) => {
  let movieId = req.params.id;

  Movie.remove({_id: movieId}).then(() => {
    res.sendStatus(200);
  }).catch((err) => {
    res.status(500).json(err);
  });
});

export default router;
