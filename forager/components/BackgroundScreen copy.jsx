'use client'; // Add this line at the top of your file

import React, { useRef } from 'react';
import '../styles/BackgroundScreen.module.css';

const BackgroundScreen = () => {
  const galleryButtonRef = useRef(null);

  const handleClick = () => {
    // Your gallery button click logic here
    console.log('Gallery button clicked');
  };

  return (
    <div className="background-screen">
      <div className="background-overlay" />
      {/* Gallery button with onClick event */}
      <button
        ref={galleryButtonRef}
        className="gallery-button"
        onClick={handleClick}
      >
        {/* SVG Icon for the gallery button */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="black"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32.4584 22.382V8.70831H5.54175V21.9291L12.9834 15.9125C13.7149 15.3187 14.8913 15.3472 15.5959 15.9679L22.6845 22.1951L26.2977 19.1235C27.0292 18.4996 28.1945 18.5123 28.9038 19.1504L32.4584 22.382ZM4.73741 6.33331H33.2627C34.113 6.33331 34.8334 7.0949 34.8334 8.0354V29.9646C34.8334 30.9082 34.1304 31.6666 33.2627 31.6666H4.73741C3.88716 31.6666 3.16675 30.9051 3.16675 29.9646V8.0354C3.16675 7.09173 3.86975 6.33331 4.73741 6.33331Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
  );
};

export default BackgroundScreen2;