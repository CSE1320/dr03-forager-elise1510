import React from 'react';
import { WScaleMushroomCard } from './MushroomCard';
import styles from '../styles/mushroom.module.css';

const Mushroom = ({ title, binom, facts, info, imageId, imageUrl, toxic, percent }) => {
    console.log(percent);
    return (
        <div>
            <div className="flex flex-col items-center">
                <div className="relative">
                    {/* Centered Percent Div */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className={`w-[6em] h-10 flex items-center justify-center rounded-[10px] ${toxic ? 'bg-[#FF5050]' : 'bg-green-500'}`}>
                            <div className={styles.percent}>{percent}% Match</div>
                        </div>
                    </div>

                    {/* Mushroom Card */}
                    <WScaleMushroomCard
                        title={title}
                        imageId={imageId}
                        imageUrl={imageUrl}
                        toxic={toxic}
                        size={1.7}
                        wsize={2.7}
                    />
                </div>

                {/* Binom and SVG */}
                <div className="flex items-center gap-[6em]">
                    {/* Binom text on the right */}
                    <h3 className={styles.binom}>{binom}</h3>
                    {/* SVG on the left */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                        <path d="M26.0002 4.3335C14.0337 4.3335 4.3335 14.0337 4.3335 26.0002C4.3335 37.9667 14.0337 47.6668 26.0002 47.6668C37.9667 47.6668 47.6668 37.9667 47.6668 26.0002C47.6668 14.0337 37.9667 4.3335 26.0002 4.3335ZM36.8335 28.1668H28.1668V36.8335H23.8335V28.1668H15.1668V23.8335H23.8335V15.1668H28.1668V23.8335H36.8335V28.1668Z" fill="#579076" />
                    </svg>
                </div>

                {/* Fast Facts */}
                <div className={styles.factsquare}>
                    <h2 className={styles.factheading}>Fast Facts</h2>
                    <div className={styles.facts}>
                        {facts.map((fact, index) => (
                            <p key={index}>{fact}</p>
                        ))}
                    </div>
                </div>

                {/* Info Paragraph */}
                <div className={styles.para}>{info}</div>
            </div>
        </div>
    );
};

export default Mushroom;