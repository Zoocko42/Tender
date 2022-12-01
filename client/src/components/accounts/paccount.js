import React, { useState } from "react";
import { useQuery, useMutation } from '@apollo/client';
import { SITTER_REQUESTS } from '../../utils/queries';
import { ADD_SITTERREQ } from '../../utils/mutations';



const Parentaccount = () => {
  const { loading, data } = useQuery(SITTER_REQUESTS);
  const [addSitterReq, { error }] = useMutation(ADD_SITTERREQ);
  const [formState, setFormState] = useState({
    submittedBy: '',
    date: '',
    time: '',
    price: '',
    city: '',
    state: '',
    specialReq: '',
  });

  const sitreqs = data?.sitterReqs;
  const log = console.log(sitreqs);

  const sitFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = addSitterReq({
        variables: { ...formState },
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };


const sitFormChange =(event) => {
  const { name, value} = event.target;
  setFormState({ ...formState, [name]: value});
};

  return (
    <div>
      <div>
        <form onSubmit={sitFormSubmit}>
          <h1> Create A Sitter Request </h1>
          <div className="form-group">
            <label >SubmittedBy</label>
            <input value={formState.submittedBy} onChange={sitFormChange} name="submittedBy"  className="form-control"  placeholder="please enter user ID"></input>
          </div>
          <div className="form-group">
            <label >Date</label>
            <input value={formState.date} onChange={sitFormChange} name="date"  className="form-control" placeholder="Wednesday, November 30, 2022 "></input>
          </div>
          <div className="form-group">
            <label >Time</label>
            <input value={formState.time} onChange={sitFormChange} name="time"  className="form-control" placeholder="3:00pm- 5:00pm"></input>
          </div>
          <div className="form-group">
            <label >Price</label>
            <input  value={formState.price} onChange={sitFormChange} name="price" className="form-control" placeholder="ex:80. no decimals or dollar signs"></input>
          </div>
          <div className="form-group">
            <label >City</label>
            <input value={formState.city} onChange={sitFormChange} name="city" className="form-control" placeholder="Atlanta"></input>
          </div>
          <div className="form-group">
            <label >State</label>
            <select class="form-control" >
              <option value={formState.state} name="state" onChange={sitFormChange}>GA</option>
            </select>
          </div>
          <div className="form-group">
            <label >Special Requests</label>
            <textarea value={formState.specialReq} onChange={sitFormChange} name="specialReq" className="form-control" rows="3" placeholder="enter any special requests for your posting"></textarea>
          </div>
          <div><button type="submit" className="makereq">Make a Request
          </button></div>
          <div><button type="button" onClick="alert('You pressed the button!')" className="parentProfile"> View Profile
          </button></div>
        </form>
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
                <li key={reqs}> {reqs.city} {reqs.time} Price: {reqs.price} {reqs.specialRequests} {reqs.date} </li>
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