import { useEffect } from 'react';
import './App.css';
import apiGitHub from './services/apiGithub';

function App() {

  useEffect(() => {
    apiGitHub.get('users/carvalholeo')
      .then(response => response.data)
      .then(resposta => console.log(resposta))
      .catch(erro => console.error(erro))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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