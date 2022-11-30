import React from 'react';
import {Link} from "react-router-dom"

 function signup() {
   
    return (

        <div className='accounts'>
            <Link to="/signup/parent">
            <button type="button" onClick="alert('You pressed the button!')" className="parentBtn"> Parent Account 
            </button>
            </Link>
            <Link to="/signup/sitter">
            <button type="button" onClick="alert('You pressed the button!')" className="sitterBtn">Sitter Account
            </button>
            </Link>
        </div>
    );
}
export default signup; 

