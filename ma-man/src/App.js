import './App.css';

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const person = { name: 'yoshi', age: 41 }
  const link = "http://www.google.com"

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked <b>{likes} times</b></p>
        <p>name: { person.name } / age: { person.age }</p>
        <p>{ 10 }</p>
        <p>{ "hello ninjas!" }</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>Die roll: { Math.ceil(Math.random() * 6) }</p>

        <a href={ link }>Google Site</a>
      </div>
    </div>
  );
}

export default App;
