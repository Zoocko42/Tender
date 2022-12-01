import React, { useState } from "react";
import { useQuery } from '@apollo/client';
import { SITTER_REQUESTS } from '../../utils/queries';
import {Button,Form } from 'react-bootstrap';



const Parentaccount = () => {
const { loading, data } = useQuery(SITTER_REQUESTS);


const sitreqs = data?.sitterReqs;
const log = console.log(sitreqs);



const submit = () => {
   
console.log("this should make a create and or pop up a form");
;
  
};

    return (
        <div>
            <div>
                <form>
                    <h1> Create A Sitter Request </h1>
  <div class="form-group">
    <label for="exampleFormControlInput1">Parent ID</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Date</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Time</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Price</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">City</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">State</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>GA</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Special Requests</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>
</div>

        <div className="paccount">

            <button type="button" className="makereq" onClick={submit}>Make a Request
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
    
        </div>
    )
}

export default Parentaccount;