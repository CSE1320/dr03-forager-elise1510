import React from 'react';
import { nunitof } from '@/app/layout'; // Ensure this import is correct
import styles from '../styles/mushroom.module.css';

const Mushroom = ({ title, binom, facts, info, imageId, imageUrl, toxic }) => {
    return (

        <div>
            <div className="flex flex-col items-center">
                <div className="w-[290] h-[290] flex flex-col items-center bg-white shadow-md justify-start">
                    <div
                        className={`w-[267] h-[219] mt-[31] ml-[12] mb-[49] relative bg-cover bg-no-repeat bg-center ${imageId}`}
                        style={{ backgroundImage: `url(${imageUrl})` }}
                    >
                    </div>
                </div>
               <div> <h2 className={styles.title}>
                    {title}
                </h2>
                <h3 className={styles.binom}>{binom}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                    <path d="M26.0002 4.3335C14.0337 4.3335 4.3335 14.0337 4.3335 26.0002C4.3335 37.9667 14.0337 47.6668 26.0002 47.6668C37.9667 47.6668 47.6668 37.9667 47.6668 26.0002C47.6668 14.0337 37.9667 4.3335 26.0002 4.3335ZM36.8335 28.1668H28.1668V36.8335H23.8335V28.1668H15.1668V23.8335H23.8335V15.1668H28.1668V23.8335H36.8335V28.1668Z" fill="#579076" />
                </svg></div>
                <div className={styles.factsquare}>
                    <h2 className={styles.factheading}>Fast Facts</h2>
                    <div className={styles.facts}>
                        {facts.map((fact, index) => (
                            <p key={index}>{fact}</p>
                        ))}
                    </div>
                </div>
                <div className={styles.para}>{info}</div>
            </div>
        </div>
    );
};
export default Mushroom;