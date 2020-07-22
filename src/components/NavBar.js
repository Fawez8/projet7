import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  Button,
  FormControl,
  NavDropdown,
} from "react-bootstrap";

const NavBar = (props) => {
  const [movie, setMovie] = useState("");

  const search = () => {
    props.doSearch(movie);
    setMovie("");
  };

  const filterMovies = (e) => {
    props.byRating(e.target.value);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Movie List</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="By Rating" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.2" onClick={filterMovies}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <NavDropdown.Divider />
              <option>All</option>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
          />
          <Button variant="outline-success" onClick={search}>
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
