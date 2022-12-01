import React from "react";

function parentAccount() {
    return (
        <div className="paccount">

            <button type="button" onClick="alert('You pressed the button!')" className="makereq">Make a Request
            </button>

            <button type="button" onClick="alert('You pressed the button!')" className="parentProfile"> View Profile
            </button>

            {/* The following below is the current req of parents req */}
            <h1 className="req">
                Current Requests
                <li>
                    
                </li>
            </h1>
            

        </div>
    )
}

export default parentAccount;