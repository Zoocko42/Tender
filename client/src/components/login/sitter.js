import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom"
import { useMutation } from '@apollo/client';
import {LOGIN_SITTER} from '../../utils/mutations'

import Auth from '../../utils/auth'

const Login = (props) => {
  const [inputs, setInputs] = useState({ username:'', password:''});
  const [login, {error, data}] = useMutation(LOGIN_SITTER)

  const handleChange = (event) => {
    const {name, value} = event.target;

    setInputs({ ...inputs, [name]: value })
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const {data} = await login({
        variables: {...inputs}
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setInputs({
      username: '',
      password: ''
    })
  }

  return (
    <div>
    {data ? (
      <div className='sitterLoginSuccess'>
        <p>You're logged in! Please continue to your homepage!</p>
        <p><Link to='/sitter/saccount'>Continue</Link></p>
      </div>
    ) : (
    <form onSubmit={handleSubmit}>
      
      <label>Username:
        <input
          className='form-input'
          type="text"
          name="username"
          placeholder='username'
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>Password:
        <input
          className='form-input'
          type="password"
          name="password"
          placeholder='********'
          value={inputs.password || ""}
          onChange={handleChange}
        />
      </label>
      <button
        className='btn btn-block btn-primary'
        style={{cursor: 'pointer'}}
        type="submit"
      >
        Login!
      </button>
    </form>
    )}

      {error && (
        <div className="my-3 p-3 bg-danger text-white">
          {error.message}
        </div>
      )}
    </div>
  )
}
export default Login;