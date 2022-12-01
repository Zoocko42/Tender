import React from "react";
import logo from "../IMG/tenderLogoNoBack.png"
import {Link} from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function homepage() {

  return (


    <div className="tabs is-centered">
      

      {/* <!-- Latest compiled and minified CSS --> */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>

      {/* <!-- Optional theme --> */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous"></link>
     
      <img className="TenderLogo" src={logo} alt="logo" />
      <Link to="/login">
        <button type="submit" id="loginButton" className="loginBtn">Login
        </button>
      </Link>

      <Link to="/signup">
        <button type="button" onClick="alert('You pressed the button!')" className="signupBtn">Sign Up
        </button>
      </Link>
    </div>

  );
}

export default homepage;