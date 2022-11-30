import React from 'react';

 function signup() {
   
    return (

        <div className='accounts'>
            <a href="/parent">
            <button type="button" onClick="alert('You pressed the button!')" className="parentBtn"> Parent Account 
            </button>
            </a>
            <a href="/sitter">
            <button type="button" onClick="alert('You pressed the button!')" className="sitterBtn">Sitter Account
            </button>
            </a>
        </div>
    );
}
export default signup; 

