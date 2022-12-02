import React from 'react';
import { Link } from "react-router-dom"
// new npm package push this up!
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function signup() {

    return (

        <div className='topbar p-shadow-2'>

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

