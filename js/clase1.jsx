class Clase1 extends React.Component{
	constructor(props){
		super(props);
		this.state = {
      		mesa: Array(9).fill(null)
    	}
	}
	agregar(){
		let texto=document.getElementById('uno').value;
		this.setState({
        	mesa: [...this.state.mesa, `${texto}`]
      	})
	}
	  render () {
    return (
      <div>
      <input id="uno" type="text"/>
      <button
        	onClick={() => this.agregar()}
        >Agregar </button>
        <h1>¡Hola necesito !</h1>

        <ul>
          {this.state.mesa.map(t => <li>{t}</li>)}
        </ul>
        
      </div>
      
    );
  }
}

ReactDOM.render(<Clase1 />, document.getElementById("root"));