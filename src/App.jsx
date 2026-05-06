import React, { useState } from 'react';
import WeddingProgram from './components/WeddingProgram'
import SeatingArrangement from './components/SeatingArrangement'
import './index.css'

function App() {
  // State to track which page we are viewing: 'program' or 'seating'
  const [currentPage, setCurrentPage] = useState('program');

  return (
    <div className="App">
      <main>
        {currentPage === 'program' ? (
          <WeddingProgram onNavigateToSeating={() => setCurrentPage('seating')} />
        ) : (
          <SeatingArrangement onNavigateBack={() => setCurrentPage('program')} />
        )}
      </main>
    </div>
  )
}

export default App
