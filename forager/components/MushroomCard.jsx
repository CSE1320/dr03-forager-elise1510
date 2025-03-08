import React from 'react';
import { nunitof } from '@/app/layout'; // Ensure this import is correct
import styles from '../styles/mushroomCard.module.css';

const MushroomCard = ({ title, imageId, imageUrl, toxic }) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-[7.142857142857143em] h-[9.214285714285714em] flex flex-col items-center bg-white shadow-md justify-start">
          {/* Aria label instead of alt text for screen reader */}
          <div
            className={`w-[6.714285714285714em] h-[7.571428571428571em] mt-[.5em] relative bg-cover bg-no-repeat bg-center ${imageId}`}
            style={{ backgroundImage: `url(${imageUrl})` }}
            aria-label={`A picture of ${title} mushroom`}
          >
            {toxic && (
              <img
                src="/ic_round-warning.svg"
                alt="Warning Icon"
                width="21"
                height="21"
                className="absolute top-[1px] left-[2px] w-[20px] h-[20px]"
              />
            )}
          </div>
        </div>
        <h2 className={styles.title}>
          {title}
        </h2>
      </div>
    </div>
  );
};

const MushroomCardPercent = ({ title, imageId, imageUrl, percent, toxic }) => (
  <div>
    <div className="flex flex-col items-center">
      <div className="w-[7.142857142857143em] h-[9.214285714285714em] flex flex-col items-center bg-white shadow-md justify-start">
      {/* Aria label instead of alt text for screen reader */}
          <div
            className={`w-[6.714285714285714em] h-[7.571428571428571em] mt-[.5em] relative bg-cover bg-no-repeat bg-center ${imageId}`}
            style={{ backgroundImage: `url(${imageUrl})` }}
            aria-label={`A picture of ${title} mushroom`}
          >
          <div
            className={styles.square}
            style={{
              backgroundColor: toxic
                ? percent >= 90
                  ? '#FF5050'
                  : percent >= 80
                    ? '#FF6666'
                    : '#FF7E7E'
                : percent >= 60
                  ? 'rgba(165, 165, 165, 0.9)'
                  : 'rgba(115, 216, 159, 0.9)',
            }}
          >
            <p className={styles.value}>{percent}%</p>
          </div>
          {toxic && (
            <img
              src="/ic_round-warning.svg"
              alt="Warning Icon"
              width="21"
              height="21"
              className="absolute top-[1px] left-[30px] w-[20px] h-[20px]"
            />
          )}
        </div>
      </div>
      <h2 className={styles.title}>{title}</h2>
    </div>
  </div>
);

const ScaleMushroomCard = ({ title, imageId, imageUrl, toxic, size = 1 }) => {
  // Calculate the scale factor based on the size parameter
  // size of 0.7 means 70% scaling, 1.5 means 150% scaling, etc.
  const scale = size;

  // Base styles that will be scaled
  const baseStyles = {
    card: {
      width: `${7.142857142857143 * scale}em`,
      height: `${9.214285714285714 * scale}em`,
    },
    image: {
      width: `${6.714285714285714 * scale}em`,
      height: `${7.571428571428571 * scale}em`,
      marginTop: `${0.5 * scale}em`,
    },
    icon: {
      width: `${20 * scale}px`,
      height: `${20 * scale}px`,
      top: `${1 * scale}px`,
      left: `${2 * scale}px`,
    },
    title: {
      fontSize: `${1 * scale}em`,
      marginTop: `${0.5 * scale}em`,
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <div
          className="flex flex-col items-center bg-white shadow-md justify-start"
          style={baseStyles.card}
        >
          <div
            className={`relative bg-cover bg-no-repeat bg-center ${imageId}`}
            style={{
              ...baseStyles.image,
              backgroundImage: `url(${imageUrl})`
            }}
            aria-label={`A picture of ${title} mushroom`}
          >
            {toxic && (
              <img
                src="/ic_round-warning.svg"
                alt="Warning Icon"
                width="21"
                height="21"
                className="absolute top-[1px] left-[2px] w-[20px] h-[20px]"
              />
            )}
          </div>
        </div>
        <h2 className={styles.scaletitle} style={baseStyles.title}>
          {title}
        </h2>
      </div>
    </div>
  );
};

const WScaleMushroomCard = ({ title, imageId, imageUrl, toxic, size = 1, wsize = 1 }) => {
  // Calculate the scale factor based on the size parameter
  // size of 0.7 means 70% scaling, 1.5 means 150% scaling, etc.
  const scale = size;

  // Base styles that will be scaled
  const baseStyles = {
    card: {
      width: `${7.142857142857143 * wsize}em`,
      height: `${9.214285714285714 * scale}em`,
    },
    image: {
      width: `${6.714285714285714 * wsize}em`,
      height: `${7.571428571428571 * scale}em`,
      marginTop: `${0.5 * scale}em`,
    },
    icon: {
      width: `${20 * scale}px`,
      height: `${20 * scale}px`,
      top: `${1 * scale}px`,
      left: `${2 * scale}px`,
    },
    title: {
      fontSize: `${1 * scale}em`,
      marginTop: `${0.5 * scale}em`,
    }
  };

  return (
    <div>
      <div className="flex flex-col">
        <div
          className="flex flex-col items-center bg-white shadow-md justify-start"
          style={baseStyles.card}
        >
          <div
            className={`relative bg-cover bg-no-repeat bg-center ${imageId}`}
            style={{
              ...baseStyles.image,
              backgroundImage: `url(${imageUrl})`
            }}
            aria-label={`A picture of ${title} mushroom`}
          >
            {toxic && (
              <img
                src="/ic_round-warning.svg"
                alt="Warning Icon"
                width="21"
                height="21"
                className="absolute top-[1px] left-[2px] w-[20px] h-[20px]"
              />
            )}
          </div>
        </div>
        <h2 className={styles.wscaletitle} style={baseStyles.title}>
          {title}
        </h2>
      </div>
    </div>
  );
};


const DashboardMushroomCard = ({ title, imageId, imageUrl, toxic, onCardClick }) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-[7.142857142857143em] h-[9.214285714285714em] flex flex-col items-center bg-white shadow-md justify-start">
          <div
            className={`w-[6.714285714285714em] h-[7.571428571428571em] mt-[.5em] relative bg-cover bg-no-repeat bg-center ${imageId}`}
            style={{ backgroundImage: `url(${imageUrl})` }}
            onClick={() => onCardClick(imageId, imageUrl)}
            aria-label={`A picture of ${title} mushroom`}
          >
            {toxic && (
              <img
                src="/ic_round-warning.svg"
                alt="Warning Icon"
                width="21"
                height="21"
                className="absolute top-[1px] left-[2px] w-[20px] h-[20px]"
              />
            )}
          </div>
        </div>
        <h2 className={styles.title}>
          {title}
        </h2>
      </div>
    </div>
  );
};




export { MushroomCard, MushroomCardPercent, ScaleMushroomCard, WScaleMushroomCard, DashboardMushroomCard };