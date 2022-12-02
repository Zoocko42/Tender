import React, { useState } from 'react';
import { ADDSITTER } from '../../utils/mutations';
import {useMutation} from '@apollo/client';

import Auth from '../../utils/auth';

function SitterSignup() {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        city: '',
        state: '',
        aboutMe: '',
      });

    const [addUserSitter, {error, data}] = useMutation(ADDSITTER)

    const handleChange = (event) => {
        const {name, value} = event.target

        setFormState({
            ...formState,
            [name]: value,
        })
      };

      const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
    
        try {
          const { data } = await addUserSitter({
            variables: { ...formState },
          });

          console.log(data)
          Auth.login(data.addSitter.token);
        } catch (e) {
          console.error(e);
        }
      };
    
    return (
        <>
        {data ? (
        <p>You're all set! Please continue to your homepage!</p>
        ) : (
        <>
        <form onSubmit={handleFormSubmit}>

            <input
                className="form-input"
                placeholder="Username"
                name="username"
                type="text"
                value={formState.name}
                onChange={handleChange}
            />
            <input
                className="form-input"
                placeholder="Email"
                name="email"
                type="text"
                value={formState.name}
                onChange={handleChange}
            />
            <input
                className="form-input"
                placeholder="Password"
                name="password"
                type="password"
                value={formState.name}
                onChange={handleChange}
            />
            <input
                className="form-input"
                placeholder="First Name"
                name="firstName"
                type="text"
                value={formState.name}
                onChange={handleChange}
            />
            <input
                className="form-input"
                placeholder="Last Name"
                name="lastName"
                type="text"
                value={formState.name}
                onChange={handleChange}
            />
            <input
                className="form-input"
                placeholder="City"
                name="city"
                type="text"
                value={formState.name}
                onChange={handleChange}
            />
            <input
                className="form-input"
                placeholder="State"
                name="state"
                type="text"
                value={formState.name}
                onChange={handleChange}
            />
            <textarea
                className="form-input"
                placeholder="About Me"
                name="aboutMe"
                type="textarea"
                value={formState.name}
                onChange={handleChange}
            />
            <button 
            className='btn btn-block btn-primary'
            style={{cursor: 'pointer'}}
            type="submit"
            > Sign up!
             <i className="pi pi-user-plus " style={{ 'fontSize': '2em' }}></i>
            </button>

        </form>
        </>
        )}
        </>
    );
}

export default SitterSignup;