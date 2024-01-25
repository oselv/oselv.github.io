import './App.css';
import React, { useState } from 'react';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event)=>{
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event)=>{
    setPassword(event.target.value);
  };

  const handleSubmit = (event)=>{
    event.preventDefault();
    //Add authentication logic here
    console.log('Username: ' + username);
    console.log('Password: ' + password);
  };

  return (
    <div className="App">

      <form className='login-form' onSubmit={handleSubmit}>

        <label>
          Username: 
          <input type='text' value={username} onChange={handleUsernameChange}/>
        </label>

        <label>
          Password: 
          <input type='password' value={password} onChange={handlePasswordChange}/>
        </label>

        <button type='submit'>Login</button>

      </form>
    </div>
  );
}

export default App;
