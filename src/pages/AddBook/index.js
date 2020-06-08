import React from "react";

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import AppNavBar from "../../components/AppNavBar";
import api from "../../services/api";

export default function AddBook () {
  const [show, setShow] = React.useState(true);
  const [info, setInfo] = React.useState("");
  const [error, setError] = React.useState("");

  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [publisher, setPublisher] = React.useState("");
  const [area, setArea] = React.useState("");
  
  function redirect() {
    window.location.href = "/";
  }

  function onCreate() {
    api.post("/books", {
      title: title,
      author: author,
      publisher: publisher,
      area: area
    }).then((res) => {
      console.log("Livro adicionado com sucesso: ", res.data);
      setInfo("Livro adicionado com sucesso");
      redirect();
    }).catch((err) => {
      setInfo("");
      console.log("Erro ao adicionar livro: ", err);
      setError("Erro ao adicionar livro");
    });
  }

  return (
    <React.Fragment>
      <AppNavBar title="Cadastrar livros" />
      <Container>
        <Card>
          <Card.Title>Livros</Card.Title>
          <Card.Body>
            {error && (
              <Alert variant="danger" onClose={() => setShow(!show)} dismissible>
                {error}
              </Alert>)
            }
            {info && (
              <Alert variant="success" onClose={() => setShow(!show)} dismissible>
                {info}
              </Alert>)
            }
            <Form>
              <Form.Group controlId="formBasicTitle">
                <Form.Label>Título</Form.Label>
                <Form.Control type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
              </Form.Group>
              <Form.Group controlId="formBasicAuthor">
                <Form.Label>Autor</Form.Label>
                <Form.Control type="text" value={author} onChange={(event) => setAuthor(event.target.value)}/>
              </Form.Group>
              <Form.Group controlId="formBasicPublisher">
                <Form.Label>Editora</Form.Label>
                <Form.Control type="text" value={publisher} onChange={(event) => setPublisher(event.target.value)}/>
              </Form.Group>
              <Form.Group controlId="formBasicArea">
                <Form.Label>Área</Form.Label>
                <Form.Control type="text" value={area} onChange={(event) => setArea(event.target.value)}/>
              </Form.Group>
              <Button variant="primary" onClick={() => onCreate()}>
                Salvar
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
}
