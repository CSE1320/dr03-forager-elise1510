import React from 'react';
import { WScaleMushroomCard } from './MushroomCard';
import styles from '../styles/mushroom.module.css';
import add from '../public/add.svg'
import {idk} from '@/data/development';
const Mushroom = ({ title, binom, facts, info, imageId, imageUrl, toxic, percent }) => {
    console.log(percent);


    const handleAddClick = () => {
        console.log('Add button clicked!');
    
        // Find the "Favorites" object in idk
        const updatedIdk = idk.map(entry => {
            if (entry.label === 'Favorites') {
                if (!entry.applicableshrooms || !Array.isArray(entry.applicableshrooms)) {
                    console.error('applicableshrooms is not defined or is not an array in Favorites.');
                    return entry;
                }
    
                // Add the imageId to applicableshrooms if not already present
                const isAlreadyAdded = entry.applicableshrooms.includes(imageId);
                if (!isAlreadyAdded) {
                    return {
                        ...entry,
                        applicableshrooms: [...entry.applicableshrooms, imageId],
                    };
                } else {
                    console.log(`${imageId} is already in Favorites.`);
                    return entry;
                }
            }
            return entry;
        });
    
        
    };
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
                <div className="flex items-center gap-[6em]">
                    <h3 className={styles.binom}>{binom}</h3>
                    {/* SVG on the left <div className="cursor-pointer" onClick={handleClick}>*/}
                    <div className="cursor-pointer" onClick={handleAddClick}>
                        <img
                            src='/add.svg'
                            alt="Add Button"
                            className="w-12 h-12"
                        />
                    </div>
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