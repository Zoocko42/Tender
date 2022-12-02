import React from "react";
import logo from "../IMG/tenderLogoNoBack.png"
import {Link} from "react-router-dom"

import Auth from '../utils/auth';

function homepage() {

  return (


    <div className="tabs is-centered">
      

      {/* <!-- Latest compiled and minified CSS --> */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>

      {/* <!-- Optional theme --> */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous"></link>

      <img className="TenderLogo" src={logo} alt="logo" />
      {Auth.loggedIn()?(<>
      <Link to="/parent/paccount">
        <button type="button" id="parentAccountBtn" className="accountBtn">Parent Account
        </button>
      </Link>

      <Link to="/sitter/saccount">
        <button type="button" id="sitterAccountBtn" className="accountBtn">Sitter Account
        </button>
      </Link>
      
      </>):(<>
      <Link to="/login">
        <button type="button" id="loginButton" className="loginBtn">Login
        </button>
      </Link>

      <Link to="/signup">
        <button type="button" className="signupBtn">Sign Up
        </button>
      </Link>
      </>)}
    </div>

  );
}

export default homepage;