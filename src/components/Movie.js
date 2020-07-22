import React from "react";
import Card from "react-bootstrap/Card";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const Movie = ({
  movie: { name, year, image, duration, rating, description, director },
}) => {
  let stars = [];
  for (let i = 0; i < rating; ++i) {
    stars.push(
      <svg
        className="bi bi-star text-warning"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        key={uuidv4()}
      >
        <path
          fillRule="evenodd"
          d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
        />
      </svg>
    );
  }

  return (
    <Card style={{ width: "18rem", height: "46rem" }} className="movie">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <h6>{`${director} | ${duration} min | ${year}`}</h6>
        <Card.Text className="description">{description}</Card.Text>
      </Card.Body>
      <span className="my-star">{stars}</span>
    </Card>
  );
};

Movie.propTypes = {
  movie: PropTypes.object,
};

export default Movie;
