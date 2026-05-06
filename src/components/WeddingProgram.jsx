import React from 'react';
import './WeddingProgram.css';

// Assuming your images are stored in the src/assets folder
import programPage1 from '../assets/program-1.png';
import programPage2 from '../assets/program-2.png';

const WeddingProgram = ({ onNavigateToSeating }) => {
    const handleSeatingRedirect = () => {
        // Logic to navigate to the seating arrangement page
        // e.g., navigate('/seating-arrangement') or window.location.href
        console.log("Redirecting to seating arrangements...");
    };

    return (
        <div className="wedding-container">
            <header className="wedding-header">
                <h1 className="wedding-title">Sinethemba & Phiwe</h1>
                <p className="wedding-date">Saturday, May 09, 2026</p>
            </header>

            <main className="program-gallery">
                <div className="image-wrapper">
                    <img
                        src={programPage1}
                        alt="Wedding Ceremony Program"
                        className="program-image"
                        loading="lazy"
                    />
                </div>
                <div className="image-wrapper">
                    <img
                        src={programPage2}
                        alt="Wedding Reception Program"
                        className="program-image"
                        loading="lazy"
                    />
                </div>
            </main>

            <footer className="wedding-footer">
                <p className="footer-text">Find your seat for the celebration</p>
                <button onClick={onNavigateToSeating} className="premium-button">
                    View Seating Arrangement
                </button>
            </footer>
        </div>
    );
};

export default WeddingProgram;