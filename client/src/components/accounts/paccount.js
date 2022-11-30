import React from "react";

function parentAccount() {
    return (
        <div className="paccount">

            <button type="button" onClick="alert('You pressed the button!')" className="makereq">Make a Request
            </button>

            <button type="button" onClick="alert('You pressed the button!')" className="parentProfile"> View Profile
            </button>

            {/* The following below is the current req of parents req */}
            <h1>
                Current Requests
            </h1>
            <li>

            </li>

        </div>
    )
}

export default parentAccount;