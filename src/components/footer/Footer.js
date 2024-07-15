import React, { useState, useContext } from 'react';
import { AppContext } from '../Context';
import './style.css';

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { setShowPersonalData, resetPersonalData } = useContext(AppContext);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleShowPersonalData = () => {
        setShowPersonalData(true);
        toggleModal(); // Close the modal
    };

    const handleResetSettings = () => {
        resetPersonalData();
        toggleModal(); // Close the modal
    };

    const handleMouseEnter = () => {
        document.body.classList.add('no-scroll');
    };

    const handleMouseLeave = () => {
        document.body.classList.remove('no-scroll');
    };

    return (
        <footer className="footer">
            <div
                className="border"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <h1 className="width">
                    CSS <br />IS<br /> AWESOME
                </h1>
            </div>

            <strong className='nab'>⎯Nabthath⎯</strong>

            <div className="dropdown">
                <button onClick={toggleModal} className="my">
                    POKAŻ {isModalOpen ? 'v' : '^'}
                </button>
                {isModalOpen && (
                    <div className="dropdown-content">
                        <div className="dropdown-item" onClick={handleResetSettings}> ᐳ ZRESETUJ USTAWIENIA</div>
                        <div className="dropdown-item" onClick={handleShowPersonalData}> ᐳ POKAŻ DANE OSOBOWE</div>
                    </div>
                )}
            </div>
        </footer>
    );
}

export default Footer;
