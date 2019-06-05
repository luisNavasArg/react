class Saludo extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      tareas: []
    }

  let recognition;
  let recognizing = false;
  recognition = new webkitSpeechRecognition();
  recognition.lang = "es-VE";
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onstart = function() {
      recognizing = true;
      console.log("empezando a eschucar");
    }   
  recognition.onresult = function(event) {
      

     for (var i = event.resultIndex; i < event.results.length; i++) {
      if(event.results[i].isFinal)
        document.getElementById("texto").innerHTML += event.results[i][0].transcript;
      console.log("eschucando");
        }
      
      //texto
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
        <span id="texto"></span>
        <button onClick="alert();" id="procesar">Escuchar</button>
        <ul>
          {this.state.tareas.map(t => <li>{t}</li>)}
        </ul>
      </div>
    );
  }
}