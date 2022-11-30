import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import React from 'react';

//good to go!
function parent() {
    return (
        <form>
            <label>

                <input type='text' className='username'>
                    username
                </input>
                <input type='text' className='firstname'>
                    firstname
                </input>
                <input type='text' className='zipcode'>
                    zipcode
                </input>
                <input type='text' className='dependents'>
                    dependents 'age, name, type'
                </input>
                <input type='text' className='lastname'>
                    lastname
                </input>
                <input type='text' className='email'>
                    email
                </input>
                <input type='text' className='About-us'>
                    About Us
                </input>
            </label>

            <button type="button" onclick="alert('You pressed the button!')" className="parentSignBtn">Sign up!
            </button>

        </form>
    );
}

export default parent;

