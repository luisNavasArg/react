 const tick=()=>{
  const element = (
    <div>
      <h1>Hello, Luis Navas!</h1>
      <h2>Son las {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);