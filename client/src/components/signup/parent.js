import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function parent() {
    return (
        <form>

            <input type='text' className='username' placeholder='Username'>

            </input>
            <input type='text' className='firstname' placeholder='Firstname'>

            </input>

            <input type='text' className='zipcode' placeholder='Zipcode'>
            </input>
            <input type='text' className='dependents' placeholder='dependents'>

            </input>
            <input type="text" className="age" placceholder="age">
            </input>
            <input type="text" className='name' placeholder='name'>
            </input>
            <input type="text" className='type' placeholder='type'>
            </input>
            <input type='text' className='lastname' placeholder='Lastname'>

            </input>
            <input type='text' className='email' placeholder='Email'>

            </input>
            <input type='text' className='About-us' placeholder='About us'>

            </input>


            <button type="button" onClick="alert('You pressed the button!')" className="parentSignBtn">Sign up!
            </button>

        </form>
    );
}


export default parent;

