import React from 'react';
import { MushroomCard, MushroomCardPercent } from './MushroomCard'; // Ensure correct import
import styles from '../styles/mushroomList.module.css';

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
  return (
    <div className="flex flex-wrap gap-4 px-6 justify-start items-start w-full self-start">
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
  );
};

export { DataMushroomList, DataMushroomListPercent };