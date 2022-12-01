import React from 'react';
import {Link} from 'react-router-dom'

import Auth from '../utils/auth';

export default function Nav(props) {
  const logout = (event) => {
    event.preventDefault()
    Auth.logout()
  }

  return (
    <div className="tabs is-centered">
      

      {/* <!-- Latest compiled and minified CSS --> */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>

      {/* <!-- Optional theme --> */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous"></link>


      <ul className="nav nav-tabs">
          <li>
              <Link className='nav-item' to="/">Home</Link>
          </li>
          <li>
              <Link className='nav-item' to="/about">About</Link>
          </li>
          {Auth.loggedIn() ? (
          <>
          <li>
            <Link className='nav-item' >Profile</Link>
          </li>
          <li>
            <a className='nav-item' rel="noreferrer" href="https://github.com/Spugety/Tender/issues" target="_blank">Report Issues</a>
          </li>
          <li>
            <button className="btn btn-lg btn-light m-2" onClick={logout}>Logout</button>
          </li>
          </> 
          ) : (
            <>
            <li>
              <a className='nav-item' rel="noreferrer" href="https://github.com/Spugety/Tender/issues" target="_blank">Report Issues</a>
            </li>
            <li>
              <Link className='nav-item' to="/login">Login</Link>
            </li>
            </>
          )}
          {/* This is a link to the Github Issues page. */}

      </ul>
    </div>
  );
};