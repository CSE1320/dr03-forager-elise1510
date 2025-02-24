import React from 'react';
import { nunitof } from '@/app/layout'; // Ensure this import is correct
import styles from '../styles/mushroomCard.module.css';

const MushroomCard= ({ title, imageId, imageUrl, toxic }) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-[100px] h-[129px] flex flex-col items-center bg-white shadow-md justify-start">
          <div
            className={`w-[94px] h-[106px] mt-[7px] relative bg-cover bg-no-repeat bg-center ${imageId}`}
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
      <div className="w-[100px] h-[129px] flex flex-col items-center bg-white shadow-md justify-start">
        <div
          className={`w-[94px] h-[106px] mt-[7px] relative bg-cover bg-no-repeat bg-center ${imageId}`}
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
export { MushroomCard, MushroomCardPercent };