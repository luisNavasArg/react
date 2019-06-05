const formatName=(user)=>{
  return user.firstName + ' ' + user.lastName;
};

const user = {
  firstName: 'Luis',
  lastName: 'Navas'
};

const capturarSaludo=(user)=>{
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Extraño.</h1>;
}

const element = (
  capturarSaludo(user)
);


ReactDOM.render(
  element,
  document.getElementById('root')
);

