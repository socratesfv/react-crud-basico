import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Table,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
} from 'reactstrap';

const data = [
  { id: 1, personaje: 'Naruto', anime: 'Naruto' },
  { id: 2, personaje: 'Goku', anime: 'Dragon Ball' },
  { id: 3, personaje: 'Vegeta', anime: 'Dragon Ball' },
  { id: 4, personaje: 'Monker', anime: 'One' },
  { id: 5, personaje: 'Edward', anime: 'Two' },
  { id: 6, personaje: 'Seto', anime: 'Three' },
];
class App extends React.Component {
  state = {
    data: data,
  };
  render() {
    return (
      <>
        <Container>
          <br></br>
          <Button color="primary">Insertar nuevo personaje</Button>
          <br></br>
          <Table>
            <thead>
              <tr>
                <td>Id</td>
                <td>Personaje</td>
                <td>Anime</td>
                <td>Acciones</td>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((elemento) => (
                <tr>
                  <td>{elemento.id}</td>
                  <td>{elemento.personaje}</td>
                  <td>{elemento.anime}</td>
                  <td>
                    <Button color="primary">Editar</Button> {  }
                    <Button color="danger">Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </>
    );
  }
}

export default App;
