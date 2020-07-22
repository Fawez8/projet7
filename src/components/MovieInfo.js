import React, { useState } from "react";

import { Form, Col, Button, ProgressBar } from "react-bootstrap";

const MovieInfo = (props) => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");
  const [duration, setDuration] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [director, setDirector] = useState("");

  const [a, seta] = useState(0);
  const [b, setb] = useState(0);
  const [c, setc] = useState(0);
  const [d, setd] = useState(0);
  const [f, setf] = useState(0);
  const [g, setg] = useState(0);
  const [h, seth] = useState(0);

  const saveInfo = (e) => {
    e.preventDefault();
    props.addMovie(name, year, image, duration, rating, description, director);
    setName("");
    setYear("");
    setImage("");
    setDuration("");
    setRating("");
    setDescription("");
    setDirector("");
    seta(0);
    setb(0);
    setc(0);
    setd(0);
    setf(0);
    setg(0);
    seth(0);
  };

  let i = a + b + c + d + f + g + h;

  return (
    <Form onSubmit={saveInfo}>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Movie Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            placeholder="Enter Movie Name"
            onChange={(e) => setName(e.target.value)}
            onBlur={(e) => (e.target.value !== "" ? seta(1) : seta(0))}
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Year of release</Form.Label>
          <Form.Control
            type="number"
            value={year}
            placeholder="Enter Year"
            onChange={(e) => setYear(e.target.value)}
            onBlur={(e) => (e.target.value !== "" ? setb(1) : setb(0))}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Director</Form.Label>
          <Form.Control
            type="text"
            value={director}
            placeholder="Enter Director Name"
            onChange={(e) => setDirector(e.target.value)}
            onBlur={(e) => (e.target.value !== "" ? setc(1) : setc(0))}
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Duration</Form.Label>
          <Form.Control
            type="number"
            value={duration}
            placeholder="Enter Duration in Minutes"
            onChange={(e) => setDuration(e.target.value)}
            onBlur={(e) => (e.target.value !== "" ? setd(1) : setd(0))}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Poster</Form.Label>
          <Form.Control
            type="url"
            value={image}
            placeholder="Enter Poster url"
            onChange={(e) => setImage(e.target.value)}
            onBlur={(e) => (e.target.value !== "" ? setf(1) : setf(0))}
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Rating</Form.Label>
          <Form.Control
            as="select"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            onBlur={(e) => (e.target.value !== "" ? setg(1) : setg(0))}
          >
            <option>Set Rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onBlur={(e) => (e.target.value !== "" ? seth(1) : seth(0))}
          rows="3"
        />
      </Form.Group>
      <ProgressBar
        striped
        variant="success"
        animated
        now={Math.round((i / 7) * 100)}
        label={`${Math.round((i / 7) * 100)}%`}
      />
      <br />
      <Button variant="success" type="submit" className="btnsubmit">
        Submit Movie
      </Button>
    </Form>
  );
};

export default MovieInfo;
