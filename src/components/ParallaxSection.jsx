import React from 'react';
import { Parallax } from 'react-parallax';
import './styles.css';

const ParallaxSection = () => {
  const images = [
    'https://source.unsplash.com/1600x900/?nature',
    'https://source.unsplash.com/1600x900/?photography',
    'https://source.unsplash.com/1600x900/?technology',
    'https://source.unsplash.com/1600x900/?water',
    'https://source.unsplash.com/1600x900/?food',
    'https://source.unsplash.com/1600x900/?travel',
    'https://source.unsplash.com/1600x900/?architecture',
    'https://source.unsplash.com/1600x900/?fitness',
    'https://source.unsplash.com/1600x900/?music',
    'https://source.unsplash.com/1600x900/?art',
    'https://source.unsplash.com/1600x900/?nature',
    'https://source.unsplash.com/1600x900/?photography',
    'https://source.unsplash.com/1600x900/?technology',
    'https://source.unsplash.com/1600x900/?water',
    'https://source.unsplash.com/1600x900/?food',
    'https://source.unsplash.com/1600x900/?travel',
    'https://source.unsplash.com/1600x900/?architecture',
    'https://source.unsplash.com/1600x900/?fitness',
    'https://source.unsplash.com/1600x900/?music',
    'https://source.unsplash.com/1600x900/?art',
    
  ];

  const leftImages = images.slice(0, 10);
  const rightImages = images.slice(10);

  return (
    <div className="flex">
      <div className="w-1/2">
        {leftImages.map((imageUrl, index) => (
          <Parallax
            key={index}
            bgImage={imageUrl}
            strength={-200 + index * 50}
            className="parallax-section bg-cover bg-center h-screen relative overflow-hidden shadow-lg"
          >
            <div className="parallax-overlay absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-black via-black to-transparent opacity-70"></div>
            <div className="flex items-center justify-center text-white text-4xl font-bold z-10">
              {/* Parallax Section {index + 1} */}
            </div>
            <div className="image-shadow"></div>
          </Parallax>
        ))}
      </div>
      <div className="w-1/2">
        {rightImages.map((imageUrl, index) => (
          <Parallax
            key={index + 10} 
            bgImage={imageUrl}
            strength={200 - index * 50}
            className="parallax-section bg-cover bg-center h-screen relative overflow-hidden shadow-lg"
          >
            <div className="parallax-overlay absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-black via-black to-transparent opacity-70"></div>
            <div className="flex items-center justify-center text-white text-4xl font-bold z-10">
              {/* Parallax Section {index + 11} */}
            </div>
            <div className="image-shadow"></div>
          </Parallax>
        ))}
      </div>
    </div>
  );
};

export default ParallaxSection;
