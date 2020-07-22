import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Movie from "./Movie";

const MovieList = (props) => {
  return (
    <Container fluid>
      <Row xs={1} sm={2} md={2} lg={3} className="align-items-start">
        {props.movieList.map((movie) => (
          <Col key={movie.id} className="my-col justify-content-center ">
            <Movie movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieList;
