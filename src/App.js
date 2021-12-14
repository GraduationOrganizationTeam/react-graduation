import './App.css';
import React from "react";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {list: null};
  }

  componentDidMount() {
    fetch('https://projeto-graduation.herokuapp.com/api/alunos/')
      .then((response) => response.json())
      .then((result) => this.setState({ list_alunos: result }))
      .catch((error) => error);
    
    fetch('https://projeto-graduation.herokuapp.com/api/avaliacoes/')
      .then((response) => response.json())
      .then((result) => this.setState({ list_eval: result }))
      .catch((error) => error);

    fetch('https://projeto-graduation.herokuapp.com/api/disciplinas/')
      .then((response) => response.json())
      .then((result) => this.setState({ list_disciplinas: result }))
      .catch((error) => error);

    fetch('https://projeto-graduation.herokuapp.com/api/comentario/')
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
    <html className="contato">
      <h1>Números do Site</h1>

      <div class="container">
      <h2 className="contato2">  Alunos Cadastrados: {list_alunos.length} </h2>
      <h2 className="contato2">  Avaliacoes Feitas: {list_eval.length} </h2>
      <h2 className="contato2">  Disciplinas Cadastradas: {list_disciplinas.length} </h2>
      <h2 className="contato2">  Comentários Feitos : {list_comentarios.length} </h2>
      </div>
    </html>  
    );
  }
}
export default App;
