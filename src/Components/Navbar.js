import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export default function Navbar({ handleLoginClick }) {
  const handleClick = () => {
    handleLoginClick();
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Saathi</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 px-3">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Documentation</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Accounts
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Your Info</a></li>
            <li><a className="dropdown-item" href="#">Contacts</a></li>
            <li><a className="dropdown-item" href="#">History</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
          </ul>
        </li>
        <li>
          <a className="nav-link px-2" href="#">Login</a>
        </li>
        <li>
          <a className="nav-link" onClick={handleClick}>Sign Up</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

