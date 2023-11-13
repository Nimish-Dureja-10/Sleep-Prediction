// src/App.js
import React from 'react';
import Navbar from './components/Navbar.jsx'; // Adjust the file name and path accordingly
import ParallaxSection from './components/ParallaxSection.jsx';


function App() {
  return (
    <div className='bg-gradient-to-tr from-gray-500 to-black'>
    <Navbar />
    <div className='bg-gradient-to-tr from-gray-500 to-black p-10'>
      
      <div className="container mx-auto p-8 font-Agbalumo">
        {/* Your content goes here */}
        {/* <p>Page content goes here</p> */}
        <ParallaxSection />
      </div>
    </div>
    </div>
  );
}

export default App;
