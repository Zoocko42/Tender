import React from "react";
// import logo from "./IMG/Tender Logo WIP";

function homepage(props) {
  const tabs = ["Home", "About", "Login", "Sign Up","Help"];
  return (
    <div className="tabs is-centered">
         {/* <img className="TenderLogo" src={logo} alt="logo" /> */}
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
              onClick= {()=>props.setcurrentPage(i)}
         
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default homepage;