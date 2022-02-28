import React, { useEffect, useState } from "react";
import '../App.css';
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    let history = useHistory();

    const [cntr, setCntr] = useState(0);
    const [changeCntr, setchangeCntr] = useState(true);


    return (
        <div>
            <ul>
                <li className="line-item-container">
                    <NavLink className="lne-item" activeClassName="is-active" to='/search'>Homepage</NavLink>
                </li>
                <li className="line-item-container">
                    <NavLink className="lne-item"  activeClassName="is-active" to='/image'>Image WA</NavLink>
                </li>
                <li className="line-item-container">
                    <NavLink className="lne-item" activeClassName="is-active" to='/operable'>Operable WA</NavLink>
                </li>
                <li className="line-item-container">
                    <NavLink className="lne-item" activeClassName="is-active" to='/abbr'>Abbr</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
