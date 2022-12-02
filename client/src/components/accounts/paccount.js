import React from 'react'
import { useQuery, } from '@apollo/client';
import { SITTER_REQUESTS } from '../../utils/queries';
import SitReqForm from './SitReqForm'



const Parentaccount = () => {

  const { loading, data } = useQuery(SITTER_REQUESTS);
  
  const sitreqs = data?.sitterReqs; 

  return (
    <div>
      <div>
        <SitReqForm/>
      </div>

      <div className="paccount">

        {/* The following below is the current req of parents req */}

        <h1>
          Current Sitter Requests

        </h1>
        <div>

          {loading ? (
            <div> L O A D I N G  . . . PATIENCE MY FRIEND!</div>
          ) : (
            <ul>
              {sitreqs.map((reqs) => (
                <li key={reqs}> ** {reqs.city} ** {reqs.time} ** Price: ${reqs.price} ** {reqs.specialRequests} ** {reqs.date} ** </li>
              ))}
            </ul>
            // <p sitreqs= {sitreqs} log= {log}> {sitreqs[0].city} {sitreqs[0].time} {sitreqs[0].price} {sitreqs[0].specialRequests} {sitreqs[0].date} </p>
          )}
        </div>

      </div>

    </div>
  )
}

export default Parentaccount;