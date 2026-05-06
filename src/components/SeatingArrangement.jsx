import React from 'react';
import './SeatingArrangement.css';

// Import your images from the assets folder. 
// Adjust these filenames to match exactly how you saved them.
import seatingPart1 from '../assets/seating-1.png'; // Tables 1-6
import seatingPart2 from '../assets/seating-2.png'; // Tables 7-12
import seatingPart3 from '../assets/seating-3.png'; // Tables 13-16

// Import the full image specifically for the download button
import fullSeatingMap from '../assets/full-seating-chart.png'; // <-- Adjust filename to match exactly

const SeatingArrangement = ({ onNavigateBack }) => {
    return (
        <div className="seating-container">
            <header className="seating-header">
                <h1 className="seating-title">Find Your Seat</h1>
                <p className="seating-subtitle">We are thrilled to celebrate with you</p>
            </header>

            <main className="seating-gallery">
                <div className="seating-image-wrapper">
                    <img src={seatingPart1} alt="Tables 1 to 6" className="seating-image" loading="lazy" />
                </div>
                <div className="seating-image-wrapper">
                    <img src={seatingPart2} alt="Tables 7 to 12" className="seating-image" loading="lazy" />
                </div>
                <div className="seating-image-wrapper">
                    <img src={seatingPart3} alt="Tables 13 to 16" className="seating-image" loading="lazy" />
                </div>
            </main>

            <footer className="seating-footer">
                {/* NEW: Download Button */}
                <a
                    href={fullSeatingMap}
                    download="Sinethemba_Phiwe_Seating_Arrangement.png"
                    className="premium-button"
                >
                    Save Full Seating Chart
                </a>


                <button onClick={onNavigateBack} className="premium-button-outline">
                    Back to Wedding Program
                </button>
            </footer>
        </div>
    );
};

export default SeatingArrangement;  