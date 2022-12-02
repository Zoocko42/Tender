import React from 'react';
import {Link} from "react-router-dom"

 function Login() {
   
    return (

        <div className='accounts'>
            <Link to="/login/parent">
            <button type="button" onClick="alert('You pressed the button!')" className="parentLogBtn">Parent Account 
            <i className="pi pi-user " style={{ 'fontSize': '2em' }} ></i>
            </button>
            </Link>
            <Link to="/login/sitter">
            <button type="button" onClick="alert('You pressed the button!')" className="sitterLogBtn">Sitter Account
            <i className="pi pi-user " style={{ 'fontSize': '2em' }} ></i>
            </button>
            </Link>
        </div>
    );
}
export default Login;