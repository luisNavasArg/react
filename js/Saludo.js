class Saludo extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      tareas: []
    }

    let i = 0;
    setInterval(() => {
      console.log(this);
      i++;
      this.setState({
        tareas: [...this.state.tareas, `Tarea ${i}`]
      })
    }, 1000);
  }

  render () {
    return (
      <div>
        <h1>¡Hola {this.state.nombreCompleto}!</h1>

        <ul>
          {this.state.tareas.map(t => <li>{t}</li>)}
        </ul>
      </div>
    );
  }
}