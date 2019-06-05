const user={
	avatarUrl:"imagenes/avatar.jpg"
};
const element = <img src={user.avatarUrl}></img>;
ReactDOM.render(
  element,
  document.getElementById('root')
);