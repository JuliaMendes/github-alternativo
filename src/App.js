import { useEffect, useState } from 'react';
import './App.css';
import apiGitHub from './services/apiGithub';

function App() {
  const [user, setUser] = useState({});
  const [pesquisa, setPesquisa] = useState('');

  useEffect(() => {
    apiGitHub.get('user')
    .then(response => response.data)
    .then(console.log)
  }, [])

  function handleSubmit(event) {
    event.preventDefault();

    apiGitHub.get('users/' + pesquisa)
      .then(response => response.data)
      .then(resposta => setUser(resposta))
      .catch(erro => console.error(erro))
  }

  return (
    <div className="App">
      <div className="App-header">
        <form onSubmit={handleSubmit}>
          <label htmlFor="usuario">
            <input type="text" name="" id="usuario" value={pesquisa} onChange={e => setPesquisa(e.target.value)} />
          </label>
          <button type="submit">Pesquisar</button>
        </form>

        <p>Usuário: {user.login}</p>
        <img src={user.avatar_url} alt="" />
        <p>Biografia: {user.bio}</p>
      </div>
    </div>
  );
}

export default App;