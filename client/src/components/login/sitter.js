import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import {LOGIN_SITTER} from '../../utils/mutations'

import Auth from '../../utils/auth'

const Login = (props) => {
  const [formState, setformState] = useState({ username:'', password:''});
  const [login, {error, data}] = useMutation(LOGIN_SITTER);

  const handleChange = (event) => {
    const {name, value} = event.target;

    setformState({ ...formState, 
      [name]: value, });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState }
      });

      Auth.login(data.loginSitter.token);
    } catch (e) {
      console.error(e);
    }

    setformState({
      username: '',
      password: ''
    })
  }

  return (
    <div>
    {data ? (
      <div className='sitterLoginSuccess'>
        <p>You're logged in! Please continue to your homepage!</p>
      </div>
    ) : (
    <form onSubmit={handleSubmit}>
      
      <label>Username:
        <input
          className='form-input'
          type="text"
          name="username"
          placeholder='username'
          value={formState.username}
          onChange={handleChange}
        />
      </label>
      <label>Password:
        <input
          className='form-input'
          type="password"
          name="password"
          placeholder='********'
          value={formState.password}
          onChange={handleChange}
        />
      </label>
      <button
        className='btn btn-block btn-primary'
        style={{cursor: 'pointer'}}
        type="submit"
      >
        Login!
        <i className="pi pi-user" style={{ 'fontSize': '2em' }} ></i>
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