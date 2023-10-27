import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    document.title = `Kattintások száma: ${clickCount}`;
  }, [clickCount]);

  const handleButtonClick = () => {
    setClickCount((elozo) => elozo + 1);
  };

  return (
    <div className='container'>
      <div className='box'>
        <div className='content'>
          <p aria-disabled>Kattintások száma: {clickCount}</p>
          <button className='btn btn-primary' onClick={handleButtonClick}>
            <p>KATTINTS</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
