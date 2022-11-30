import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import React from 'react';
 function signup() {
   
    return (

        <div className='accounts'>

            <button type="button" onclick="alert('You pressed the button!')" className="parentBtn"> Parent Account 
            </button>
            <button type="button" onclick="alert('You pressed the button!')" className="sitterBtn">Sitter Account
            </button>

        </div>
    );
}
export default signup; 

