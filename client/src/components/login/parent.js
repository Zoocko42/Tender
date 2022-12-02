import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { useMutation } from '@apollo/client';
import {LOGIN_PARENT} from '../../utils/mutations'

import Auth from '../../utils/auth'

export default function MyForm(props) {
  const [inputs, setInputs] = useState({});
  const [login, {error, data}] = useMutation(LOGIN_PARENT);

  const handleChange = (event) => {
    const {name, value} = event.target;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...inputs }
      });
      console.log(data)
      Auth.login(data.loginParent.token);
    } catch (e) {
      console.error(e);
    }

    setInputs({
      username: '',
      password: ''
    })
  }

  return (
    <>
    {data ? (
      <div className='parentLoginSuccess'>
        <p>You're logged in! Please continue to your homepage!</p>
      </div>
    ) : (
    <form onSubmit={handleSubmit}>
      <label>username:
        <input
          className='form-input'
          type="text"
          name="username"
          value={inputs.username}
          onChange={handleChange}
        />
      </label>
      <label>password:
        <input
          className='form-input'
          type="password"
          name="password"
          placeholder='********'
          value={inputs.password}
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
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

