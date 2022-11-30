import React from 'react';
import {Link} from 'react-router-dom'

export default function Nav(props) {
 
    const tabs = ["About", "Login", "Help"];
  
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
            <li>
                <Link className='nav-item' to="/login">Login</Link>
            </li>
            <li>
                <Link className='nav-item' to="/help">Help</Link>
            </li>

            {/* The below code had an issue where it would add the selected link to the end of the current URL; as such it could only effectively be used from the home page. */}
          {/* {tabs.map((tab, i) => (
            <li
              className={
                props.currentPage === tab ? "nav-item is-active" : "nav-item"
              }
              key={tab}
            >
              <a
                href={tab.toLowerCase()}
                // Whenever a tab is clicked on,
                // the current page is set through the handlePageChange props.
                onClick={() => props.setcurrentPage(i)}
  
              >
                {tab}
              </a>
            </li>
          ))} */}
        </ul>
        
      </div>
    );
};