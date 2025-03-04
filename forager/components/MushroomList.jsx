'use client'
import React from 'react';
import { MushroomCard, MushroomCardPercent,DashboardMushroomCard } from './MushroomCard'; // Ensure correct import
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="cursor-pointer"
            onClick={() => setShowPopup(true)}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.5 13.25V2.75001C15.5 1.50737 14.4926 0.500008 13.25 0.500008H2.75C1.50736 0.500008 0.5 1.50737 0.5 2.75001V13.25C0.5 14.4926 1.50736 15.5 2.75 15.5H13.25C14.4926 15.5 15.5 14.4926 15.5 13.25ZM7.24565 4.25C7.24565 4.44998 7.32551 4.64168 7.46749 4.7825C7.68206 4.99885 8.00619 5.06387 8.28761 4.94703C8.56902 4.83019 8.75177 4.5547 8.74999 4.25C8.75177 3.9453 8.56902 3.66982 8.28761 3.55297C8.00619 3.43613 7.68206 3.50116 7.46749 3.7175C7.32551 3.85833 7.24565 4.05002 7.24565 4.25ZM14 2.75001C14 2.3358 13.6642 2.00001 13.25 2.00001H2.74997C2.33576 2.00001 1.99997 2.3358 1.99997 2.75001V13.25C1.99997 13.6642 2.33576 14 2.74997 14H13.25C13.6642 14 14 13.6642 14 13.25V2.75001ZM8.74997 11H8.85497C9.26919 11 9.60497 11.3358 9.60497 11.75C9.60497 12.1642 9.26919 12.5 8.85497 12.5H7.14497C6.73076 12.5 6.39497 12.1642 6.39497 11.75C6.39497 11.3358 6.73076 11 7.14497 11H7.24997V7.25C6.83576 7.25 6.49997 6.91422 6.49997 6.5C6.49997 6.08579 6.83576 5.75 7.24997 5.75H7.99997C8.41419 5.75 8.74997 6.08579 8.74997 6.5V11Z"
              fill="#324053"
            />
          </svg>
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
const DashboardDataMushroomList = ({ mushrooms,onCardClick }) => {
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
export { DataMushroomList, DataMushroomListPercent,DashboardDataMushroomList };