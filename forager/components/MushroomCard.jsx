import React from 'react';
import { nunitof } from '@/app/layout'; // Ensure this import is correct
import styles from '../styles/mushroomCard.module.css';

const MushroomCard= ({ title, imageId, imageUrl, toxic }) => {
  return (
    <div>
      <div className="flex flex-col items-center">
      <div className="w-[7.142857142857143em] h-[9.214285714285714em] flex flex-col items-center bg-white shadow-md justify-start">
        <div
          className={`w-[6.714285714285714em] h-[7.571428571428571em] mt-[.5em] relative bg-cover bg-no-repeat bg-center ${imageId}`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
            {toxic && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                className="absolute top-[1px] left-[2px] w-[20px] h-[20px]"
              >
                <path
                  d="M1.66911 16.6859H14.2289C15.5133 16.6859 16.3139 15.2932 15.6717 14.184L9.39181 3.33385C8.74964 2.22465 7.14839 2.22465 6.50622 3.33385L0.226319 14.184C-0.415849 15.2932 0.384776 16.6859 1.66911 16.6859ZM7.94901 10.8481C7.49032 10.8481 7.11503 10.4728 7.11503 10.0141V8.3461C7.11503 7.88741 7.49032 7.51211 7.94901 7.51211C8.40771 7.51211 8.783 7.88741 8.783 8.3461V10.0141C8.783 10.4728 8.40771 10.8481 7.94901 10.8481ZM8.783 14.184H7.11503V12.516H8.783V14.184Z"
                  fill="#FF5050"
                />
              </svg>
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
        <div
          className={`w-[6.714285714285714em] h-[7.571428571428571em] mt-[.5em] relative bg-cover bg-no-repeat bg-center ${imageId}`}
          style={{ backgroundImage: `url(${imageUrl})` }}
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              className="absolute top-[1px] left-[31px] w-[20px] h-[20px]"
            >
              <path
                d="M1.66911 16.6859H14.2289C15.5133 16.6859 16.3139 15.2932 15.6717 14.184L9.39181 3.33385C8.74964 2.22465 7.14839 2.22465 6.50622 3.33385L0.226319 14.184C-0.415849 15.2932 0.384776 16.6859 1.66911 16.6859ZM7.94901 10.8481C7.49032 10.8481 7.11503 10.4728 7.11503 10.0141V8.3461C7.11503 7.88741 7.49032 7.51211 7.94901 7.51211C8.40771 7.51211 8.783 7.88741 8.783 8.3461V10.0141C8.783 10.4728 8.40771 10.8481 7.94901 10.8481ZM8.783 14.184H7.11503V12.516H8.783V14.184Z"
                fill="#FF5050"
              />
            </svg>
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
          >
            {toxic && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 21 21"
                fill="none"
                className="absolute"
                style={baseStyles.icon}
              >
                <path
                  d="M1.66911 16.6859H14.2289C15.5133 16.6859 16.3139 15.2932 15.6717 14.184L9.39181 3.33385C8.74964 2.22465 7.14839 2.22465 6.50622 3.33385L0.226319 14.184C-0.415849 15.2932 0.384776 16.6859 1.66911 16.6859ZM7.94901 10.8481C7.49032 10.8481 7.11503 10.4728 7.11503 10.0141V8.3461C7.11503 7.88741 7.49032 7.51211 7.94901 7.51211C8.40771 7.51211 8.783 7.88741 8.783 8.3461V10.0141C8.783 10.4728 8.40771 10.8481 7.94901 10.8481ZM8.783 14.184H7.11503V12.516H8.783V14.184Z"
                  fill="#FF5050"
                />
              </svg>
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

const WScaleMushroomCard = ({ title, imageId, imageUrl, toxic, size = 1,wsize = 1 }) => {
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
          >
            {toxic && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 21 21"
                fill="none"
                className="absolute"
                style={baseStyles.icon}
              >
                <path
                  d="M1.66911 16.6859H14.2289C15.5133 16.6859 16.3139 15.2932 15.6717 14.184L9.39181 3.33385C8.74964 2.22465 7.14839 2.22465 6.50622 3.33385L0.226319 14.184C-0.415849 15.2932 0.384776 16.6859 1.66911 16.6859ZM7.94901 10.8481C7.49032 10.8481 7.11503 10.4728 7.11503 10.0141V8.3461C7.11503 7.88741 7.49032 7.51211 7.94901 7.51211C8.40771 7.51211 8.783 7.88741 8.783 8.3461V10.0141C8.783 10.4728 8.40771 10.8481 7.94901 10.8481ZM8.783 14.184H7.11503V12.516H8.783V14.184Z"
                  fill="#FF5050"
                />
              </svg>
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

export { MushroomCard, MushroomCardPercent,ScaleMushroomCard,WScaleMushroomCard };