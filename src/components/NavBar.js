import React from "react";
import "./styles/NavBar.css"

function NavBar({ currentPage, handlePageChange }) {
  return (
    <header>
      <h1 id="header">Isiah Olvera</h1>
      <nav>
        <ul className="nav nav-tabs justify-content-end">
        <li id="nav-item">
            <a
              href="#About"
              onClick={() => handlePageChange("About")}
              className={currentPage === "AboutMe" ? "nav-link active" : "nav-link"
              }
            >
              About 
            </a>
          </li>
          <li id="nav-item">
            <a
              href="#Portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </a>
          </li>
          <li id="nav-item">
            <a
              href="#Resume"
              onClick={() => handlePageChange("Resume")}
                className={currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
            Resume
            </a>
          </li>
          <li id="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange("contact")}
                className={currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
              >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;