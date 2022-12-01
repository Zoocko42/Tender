import React from "react";
import { useQuery } from '@apollo/client';
import { SITTER_REQUESTS } from '../../utils/queries';



const Parentaccount = () => {
const { loading, data } = useQuery(SITTER_REQUESTS);

const sitreqs = data?.sitterReqs;
const log = console.log(sitreqs);

    return (
        <div className="paccount">

            <button type="button" onClick="alert('You pressed the button!')" className="makereq">Make a Request
            </button>

            <button type="button" onClick="alert('You pressed the button!')" className="parentProfile"> View Profile
            </button>

            {/* The following below is the current req of parents req */}

            <h1>
                Current Sitter Requests
                
            </h1>
            <div>
            
            {loading ? (
                <div> L O A D I N G  . . . PATIENCE MY FRIEND!</div>
            ) : (
                <p sitreqs= {sitreqs} log= {log}> {sitreqs[0].city} {sitreqs[0].time} {sitreqs[0].price} {sitreqs[0].specialRequests} {sitreqs[0].date} </p>
            )} 
            </div>

        </div>
    )
}

export default Parentaccount;