import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('')
  const [items, setItem] = useState([])
  const updateName = (value) => {
    setName(value)
  }
  const onSubmit = () => {
    // console.log(name);
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name })
  };
    fetch(`http://localhost:8080/welcome?name=${name}`)
                  .then((res) => res.json())
                  .then((json) => {
                      setItem(json);
                      // console.log(json);
                  })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* {name} */}
          {items.content}
        </p>
        <input type="text" value={name} onChange={(e)=> updateName(e.target.value)}/>
        <button onClick={onSubmit}>Submit</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
