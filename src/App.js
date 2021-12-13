import logo from './logo.svg';
import './App.css';
import React from "react";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {list: null};
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/alunos/')
      .then((response) => response.json())
      .then((result) => this.setState({ list_alunos: result }))
      .catch((error) => error);
    
    fetch('http://127.0.0.1:8000/api/avaliacoes/')
      .then((response) => response.json())
      .then((result) => this.setState({ list_eval: result }))
      .catch((error) => error);

    fetch('http://127.0.0.1:8000/api/disciplinas/')
      .then((response) => response.json())
      .then((result) => this.setState({ list_disciplinas: result }))
      .catch((error) => error);

    fetch('http://127.0.0.1:8000/api/comentario/')
      .then((response) => response.json())
      .then((result) => this.setState({ list_comentarios: result }))
      .catch((error) => error);
  }

  render() {
    const {list_alunos,list_eval,list_disciplinas,list_comentarios} = this.state;

    if (!list_alunos) {
      return null;
    }

    if (!list_eval) {
      return null;
    }

    if (!list_disciplinas) {
      return null;
    }

    if (!list_comentarios) {
      return null;
    }

    return (
    <div>
      <div className="App">  Número de Alunos Cadastrados: {list_alunos.length} </div>
      <div className="App">  Número de Avaliacoes Feitas: {list_eval.length} </div>
      <div className="App">  Número de Disciplinas Cadastradas: {list_disciplinas.length} </div>
      <div className="App">  Número de Comentários Feitos : {list_comentarios.length} </div>
    </div>  
    );
  }
}
export default App;
