import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import ModalMovie from "./components/ModalMovie";

import Image1 from "./assets/pulpe.jpg";
import Image2 from "./assets/dogs.jpg";
import Image3 from "./assets/inception.jpg";
import Image4 from "./assets/fight-club.jpg";
import Image5 from "./assets/The Dark Knight.jpg";
import Image6 from "./assets/The Shawshank Redemption.jpg";

import "./App.css";

const App = () => {
  const [movieList, setMovieList] = useState([
    {
      name: "Pulpe Fiction",
      id: uuidv4(),
      year: 1994,
      image: Image1,
      duration: 154,
      rating: 5,
      description:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      director: "Quentin Tarantino",
    },
    {
      name: "Reservoir Dogs",
      id: uuidv4(),
      year: 1992,
      image: Image2,
      duration: 99,
      rating: 3,
      description:
        "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
      director: "Quentin Tarantino",
    },
    {
      name: "Inception",
      id: uuidv4(),
      year: 2010,
      image: Image3,
      rating: 5,
      duration: 148,
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      director: "Christopher Nolan",
    },
    {
      name: "Fight Club",
      id: uuidv4(),
      year: 1999,
      image: Image4,
      rating: 4,
      duration: 165,
      description:
        "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
      director: "David Fincher",
    },
    {
      name: "The Dark Knight",
      id: uuidv4(),
      year: 2008,
      image: Image5,
      rating: 5,
      duration: 152,
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      director: "Christopher Nolan",
    },
    {
      name: "The Shawshank Redemption",
      id: uuidv4(),
      year: 1994,
      image: Image6,
      rating: 4,
      duration: 142,
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      director: "Frank Darabont",
    },
  ]);

  const [modalShow, setModalShow] = useState(false);

  const addMovie = (
    name,
    year,
    image,
    duration,
    rating,
    description,
    director
  ) => {
    const newMovie = [
      ...movieList,
      {
        name,
        year,
        image,
        duration,
        rating,
        description,
        director,
        id: uuidv4(),
      },
    ];
    setMovieList(newMovie);
  };

  const doSearch = (title) => {
    const foundMovie = movieList.find((item) => item.name === title);
    const tab = [foundMovie];
    setMovieList(tab);
  };

  const byRating = (stars) => {
    const ratedMovies = movieList.filter((movie) => movie.rating == stars);
    console.log(ratedMovies);
    setMovieList(ratedMovies);
  };

  return (
    <div className="App">
      <NavBar doSearch={doSearch} byRating={byRating} />
      <MovieList movieList={movieList} />
      <AddMovie setModalShow={setModalShow} />
      <ModalMovie
        show={modalShow}
        onHide={() => setModalShow(false)}
        addMovie={addMovie}
      />
    </div>
  );
};

export default App;
