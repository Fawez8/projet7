import React from "react";

import { Modal } from "react-bootstrap";
import MovieInfo from "./MovieInfo";

const ModalMovie = (props) => {
  return (
    <React.Fragment>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Enter Movie Informations
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MovieInfo addMovie={props.addMovie} />
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default ModalMovie;
