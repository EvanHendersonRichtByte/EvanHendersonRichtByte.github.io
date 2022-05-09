import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <a className="navbar-brand text-white-50" href="/">
        Arasy's Den
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#section-profile">
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section-experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section-projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section-contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
