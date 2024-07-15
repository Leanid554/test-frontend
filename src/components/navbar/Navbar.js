import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import { AppContext } from '../Context';
import "./style.css";

const Navbar = () => {
    const { showPersonalData } = useContext(AppContext);
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <div className="circle">
                        <NavLink to="/">
                            <img src="https://www.w3.org/html/logo/downloads/HTML5_1Color_Black.svg" alt="HTML Logo" />
                        </NavLink>
                    </div>
                    <div className="right-h1">
                        <h1 className="zadanie">Zadanie <b>rekrutacyjne</b></h1>
                        {showPersonalData && <h1 className="name">Leanid Sushchynski</h1>}
                    </div>
                </div>  
            </div>
        </nav>
    );
};

export default Navbar;
