import React from "react";
import Button from "react-bootstrap/Badge";

const AddMovie = (props) => {
  return (
    <Button
      variant="success"
      className="addmovie"
      onClick={() => props.setModalShow(true)}
    >
      +
    </Button>
  );
};

export default AddMovie;
