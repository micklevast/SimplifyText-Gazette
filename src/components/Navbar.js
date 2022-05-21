// rfc  -->react function based components
import React from 'react'
// impt  -->import prop-type
import PropTypes from 'prop-types';

// Link from react-router-dom
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  let myStyle = {
    color: 'blue'
  }
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`} style={myStyle}>
      <div className="container-fluid">

      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={()=>{}} onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch-Mode</label>
</div>

        <a className="navbar-brand" href="/" style={myStyle}>{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/" style={myStyle}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" style={myStyle}>{props.aboutText}</a>
              {/* of router */}
              {/* <Link className="nav-link" to="/about" style={myStyle}>{props.aboutText}</Link> */}
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" style={myStyle} href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/" style={myStyle}>Action</a></li>
                <li><a className="dropdown-item" href="/" style={myStyle}>Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/" style={myStyle}>Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item"><a className="nav-link disabled" style={myStyle} href="/">Disabled</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}
// propstype
Navbar.propTypes = {
  // title:PropTypes.string,
  title: PropTypes.string.isRequired,  //this is compulsion to send this props by main app
  aboutText: PropTypes.string
}
Navbar.defaultProps = {
  title: "Set default Props",
  aboutText: "default AboutMe"
}
