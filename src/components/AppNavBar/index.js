import React from "react";
import Navbar from 'react-bootstrap/Navbar';

export default function AppNavBar (props) {
  return (

    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">{props.title}</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <a href="/add-book">Adicionar livro</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};
