import React from "react";
import logo from "../IMG/Tender Logo WIP.png"

function homepage(props) {
  const tabs = ["Home", "About", "Login", "Help"];

  return (

// updated and cleaned code!
    <div className="tabs is-centered">
      

      {/* <!-- Latest compiled and minified CSS --> */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>

      {/* <!-- Optional theme --> */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous"></link>


      <ul className="nav nav-tabs">
        {tabs.map((tab, i) => (
          <li
            className={
              props.currentPage === tab ? "nav-item is-active" : "nav-item"
            }
            key={tab}
          >
            <a
              href={"#" + tab.toLowerCase()}
              // Whenever a tab is clicked on,
              // the current page is set through the handlePageChange props.
              onClick={() => props.setcurrentPage(i)}

            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
      <img className="TenderLogo" src={logo} alt="logo" />


      <button type="button" onclick="alert('You pressed the button!')" className="loginBtn">Login
      </button>
      <button type="button" onclick="alert('You pressed the button!')" className="signupBtn">Sign Up
      </button>

    </div>

  );
}

export default homepage;