import React from "react";

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

import AppNavBar from "../../components/AppNavBar";
import api from "../../services/api";

export default function Home () {
  const [books, setBooks] = React.useState([]);
  
  function reload() {
    window.location.href = "/";
  }

  function onRemove(id) {
    api.delete(`/books/${id}`).then(() => {      
      reload();
    }).catch(error => console.log(error));
  }

  React.useEffect(() => {
    api.get("/books").then(response => {      
      setBooks(response.data);
    }).catch(error => console.log(error));
  }, []);

  return (
    <React.Fragment>
      <AppNavBar title="Ver livros" />
      <Container>
        <Card>
            <Card.Title>Livros</Card.Title>
            <Card.Body>
              {books.length > 0 ? (<Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>Editora</th>
                    <th>Área</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {books.map((book) => (
                    <tr key={`book_n${book.id}`}>
                      <td>{book.title}</td>
                      <td>{book.author}</td>
                      <td>{book.publisher}</td>
                      <td>{book.area}</td>
                      <td><button onClick={() => onRemove(book.id)}>remover</button></td>
                    </tr>
                  ))}
                </tbody>
              </Table>) : (
                <h3>Nenhum livro encontrado</h3>
              )}
            </Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
}
