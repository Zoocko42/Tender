import React from "react";
import logo from "../IMG/tenderLogoNoBack.png"

function homepage(props) {

  return (


    <div className="tabs is-centered">
      

      {/* <!-- Latest compiled and minified CSS --> */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>

      {/* <!-- Optional theme --> */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous"></link>
{/* 
      {function loginButtonPress(event) {
        event.preventDefault()
        window.location.href="/login"
        return
      }} */}
     
      <img className="TenderLogo" src={logo} alt="logo" />

      <a href="/login">
        <button type="submit" id="loginButton" className="loginBtn">Login
        </button>
      </a>

      <a href="/signup">
        <button type="button" onclick="alert('You pressed the button!')" className="signupBtn">Sign Up
        </button>
      </a>
    </div>

  );
}

export default homepage;