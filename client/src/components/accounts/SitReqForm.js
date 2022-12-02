import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_SITTERREQ } from '../../utils/mutations';
import { SITTER_REQUESTS } from '../../utils/queries'

const SitReqForm = () => {
    const [formState, setFormState] = useState({ 
        submittedBy: " ", 
        date: " ", 
        time: " ", 
        price: " ", 
        city: " ", 
        state: " ", 
        specialRequests: " "}
    );
  
    const [addSitterReq, { error }] = useMutation(ADD_SITTERREQ, {
        update(cache, {data: { addSitterReq }}) {
            try {
                const {sitReqs} = cache.readQuery({query: SITTER_REQUESTS})

                cache.writeQuery({
                    query: SITTER_REQUESTS,
                    data: {sitReqs: [addSitterReq, ...sitReqs]}
                })
            } catch (e) {
                console.error(e);
              }
        }
    });
  
  
  
    const sitFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const { data } = await addSitterReq({
          variables: { ...formState },
        });
        console.log(data)
        setFormState({
        submittedBy: " ", 
        date: " ", 
        time: " ", 
        price: " ", 
        city: " ", 
        state: " ", 
        specialRequests: " "
        })

        window.location.reload()
      } catch (err) {
        console.error(err);
      }
    };
  
  
    const sitFormChange =(event) => {
      const {name, value} = event.target;
      setFormState({...formState, [name]: value});
    };
  
    return (
        <form onSubmit={sitFormSubmit}>
            <h1> Create A Sitter Request </h1>
            <div className="form-group">
            <label >SubmittedBy</label>
            <input value={formState.name} onChange={sitFormChange} name="submittedBy"  className="form-control"  placeholder="Please enter username"></input>
            </div>
            <div className="form-group">
            <label >Date</label>
            <input value={formState.name} onChange={sitFormChange} name="date"  className="form-control" placeholder="Wednesday, November 30, 2022 "></input>
            </div>
            <div className="form-group">
            <label >Time</label>
            <input value={formState.name} onChange={sitFormChange} name="time"  className="form-control" placeholder="3:00pm- 5:00pm"></input>
            </div>
            <div className="form-group">
            <label >Price</label>
            <input  value={formState.name} onChange={sitFormChange} name="price" className="form-control" placeholder="ex:80. no decimals or dollar signs"></input>
            </div>
            <div className="form-group">
            <label >City</label>
            <input value={formState.name} onChange={sitFormChange} name="city" className="form-control" placeholder="Atlanta"></input>
            </div>
            <div className="form-group">
            <label >State</label>
            <input class="form-control" value={formState.name} name="state" onChange={sitFormChange} placeholder="GA">
            </input>
            </div>
            <div className="form-group">
            <label >Special Requests</label>
            <textarea value={formState.name} onChange={sitFormChange} name="specialRequests" className="form-control" rows="3" placeholder="Enter any special requests for your posting"></textarea>
            </div>

            <div>
            <button type="submit" className="makereq">Make a Request</button>
            </div>
            {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
            )}
        </form>
    )
}

export default SitReqForm;