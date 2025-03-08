'use client'
import React from 'react';
import { MushroomCard, MushroomCardPercent, DashboardMushroomCard } from './MushroomCard'; // Ensure correct import
import styles from '../styles/mushroomList.module.css';
import { useState } from "react";
import { IoClose } from "react-icons/io5";
const MushroomList = ({ mushrooms }) => {
  return (
    <div className="mushroomL">
      {mushrooms.map((mushroom, index) => (
        <MushroomCard
          key={index}
          title={mushroom.title}
          imageId={mushroom.imageId}
          imageUrl={mushroom.imageUrl}
          toxic={mushroom.toxic} // Pass the toxic attribute
        />
      ))}
    </div>
  );
};

const DataMushroomList = ({ mushrooms }) => {
  return (
    <div className="flex flex-wrap gap-4 px-6 justify-start items-start w-full self-start">
      {mushrooms.map((mushroom, index) => (
        <MushroomCard
          key={index}
          title={mushroom.title}
          imageId={mushroom.imageId}
          imageUrl={mushroom.imageUrl}
          toxic={mushroom.toxic}
        />
      ))}
    </div>
  );
};

const DataMushroomListPercent = ({ mushrooms }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="relative w-full h-full">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center gap-4">
          <h2 className={styles.title}>Similar Matches</h2>
          <img
            src="/info.svg"
            alt="Info Icon"
            width="16"
            height="16"
            className="cursor-pointer"
            onClick={() => setShowPopup(true)}
          />
        </div>

        {showPopup && (
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-lg shadow-lg max-w-xs flex items-start z-50">
            <p className={styles.txt}>
              Percentages indicate lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="ml-2" onClick={() => setShowPopup(false)}>
              <IoClose className="w-5 h-5" />
            </button>
          </div>
        )}

        <div className="relative flex flex-wrap gap-4 px-6 justify-center items-center w-full z-10">
          {mushrooms.map((mushroom, index) => (
            <MushroomCardPercent
              key={index}
              title={mushroom.title}
              imageId={mushroom.imageId}
              imageUrl={mushroom.imageUrl}
              toxic={mushroom.toxic}
              percent={mushroom.percent}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
const DashboardDataMushroomList = ({ mushrooms, onCardClick }) => {
  return (
    <div className="flex flex-wrap gap-4 px-6 justify-start items-start w-full self-start">
      {mushrooms.map((mushroom, index) => (
        <DashboardMushroomCard
          key={index}
          title={mushroom.title}
          imageId={mushroom.imageId}
          imageUrl={mushroom.imageUrl}
          toxic={mushroom.toxic}
          onCardClick={onCardClick}
        />
      ))}
    </div>
  );
};
export { DataMushroomList, DataMushroomListPercent, DashboardDataMushroomList };