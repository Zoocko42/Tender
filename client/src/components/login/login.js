import React from 'react';
import {Link} from "react-router-dom"

 function Login() {
   
    return (

        <div className='accounts'>
            <Link to="/login/parent">
            <button type="button" onClick="alert('You pressed the button!')" className="parentLogBtn">Parent Account 
            </button>
            </Link>
            <Link to="/login/sitter">
            <button type="button" onClick="alert('You pressed the button!')" className="sitterLogBtn">Sitter Account
            </button>
            </Link>
        </div>
    );
}
export default Login;