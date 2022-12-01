import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ADDSITTER } from '../../utils/mutations';
import {useMutation} from '@apollo/client';

function SitterSignup() {

const [addSitter] = useMutation(ADDSITTER) 
// set up form to add sitter with function  
    



    return (
        <form>
            <label>
                <input type='text' className='username'placeholder='Username'>
                    
                </input>
                <input type='text' className='firstname' placeholder='Firstname'>
                    
                </input>
                <input type='text' className='zipcode'placeholder='Zipcode'>
                   
                </input>
                <input type='text' className='lastname'placeholder='Lastname'>
                    
                </input>
                <input type='text' className='email'placeholder='Email'>
                    
                </input>
                <input type='text' className='About-us'placeholder='About me'>
                    
                </input>
            </label>
          
            <button type="button" onClick="alert('You pressed the button!')" className="sitterSignBtn" value="Submit">Sign up!
            {/* <input type="button" name="submitButton" value="Submit!"/> */}
            </button>

        </form>

    );
}

export default SitterSignup;