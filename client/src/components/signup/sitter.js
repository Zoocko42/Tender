import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import React from 'react';

function sitter() {

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
                <input type='text' className='lastname'>
                    lastname
                </input>
                <input type='text' className='email'>
                    email
                </input>
                <input type='text' className='About-us'>
                    About me
                </input>
            </label>

            <button type="button" onclick="alert('You pressed the button!')" className="sitterSignBtn">Sign up!

            </button>

        </form>

    );
}

export default sitter;