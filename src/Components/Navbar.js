import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from 'react'
import React from 'react';
import { Link } from 'react-router-dom'
export default function Navbar() {
    const [temp, setTemp] = useState("true")

    function refreshPage() {
        window.location.reload(false);
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" onClick={refreshPage}>IntelNews</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" onClick={refreshPage}>
                                <Link Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            {
                                <li className="nav-item" onClick={refreshPage}><Link className="nav-link" to="/Business">Business</Link> </li>
                            }

                            <li className="nav-item" onClick={refreshPage}> <Link className="nav-link" to="/entertainment">Entertainment</Link> </li>
                            <li className="nav-item" onClick={refreshPage}> <Link className="nav-link" to="/everything">Everything</Link> </li>
                            <li className="nav-item" onClick={refreshPage}> <Link className="nav-link" to="/health">Health </Link> </li>
                            <li className="nav-item" onClick={refreshPage}> <Link className="nav-link" to="/science">Science</Link> </li>
                            <li className="nav-item" onClick={refreshPage}> <Link className="nav-link" to="/sports">Sports</Link> </li>
                            <li className="nav-item" onClick={refreshPage}> <Link className="nav-link" to="/technology">Technology</Link> </li>
                            <li className="nav-item" onClick={refreshPage}> <Link className="nav-link" to="/saved">Saved</Link> </li>

                        </ul>
                        {/* <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form> */}


                    </div>
                </div>
            </nav>
        </div>
    )
}
