import React from 'react';
import styles from '../styles/comparisontable.module.css';
import { ScaleMushroomCard } from './MushroomCard';
//TODO: FIX BORDER
const ComparisonTable = ({ yourshroom, shroom2, percent }) => {
    const attributes = [
        { key: "cshape", label: "Cap Shape" },
        { key: "ccolor", label: "Cap Color" },
        { key: "ctexture", label: "Cap Texture" },
        { key: "gtype", label: "Gills Type" },
        { key: "gcolor", label: "Gills Color" },
        { key: "sshape", label: "Stem Shape" },
        { key: "scolor", label: "Stem Color" },
        { key: "sring", label: "Stem Ring" },
        { key: "hab", label: "Habitat" },
    ];

    // Determine if shroom2 is toxic
    const isShroom2Toxic = shroom2.toxic;

    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-center gap-[3em] w-full pl-4 relative">
                {/* Your Photo */}
                <div className="relative">
                    <ScaleMushroomCard
                        title={"Your Shroom"}
                        imageId={yourshroom.imageId}
                        imageUrl={yourshroom.imageUrl}
                        toxic={false}
                        size={1.4} 
                    />
                </div>
                
                {/* Shroom2 */}
                <div className="relative">
                    <ScaleMushroomCard
                        title={shroom2.title}
                        imageId={shroom2.imageId}
                        imageUrl={shroom2.imageUrl}
                        toxic={isShroom2Toxic}
                        size={1.4} 
                    />
                    {/* Percentage on top of shroom2 */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className={`w-20 h-10 flex items-center justify-center rounded-[10] ${isShroom2Toxic ? 'bg-red-500' : 'bg-green-500'}`}>
                            <span className={styles.mhead}>{percent}% Match</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Attribute Table */}
            <div className="mt-2 w-full">
                <div className="grid grid-cols-3 gap-[2em] items-center text-center w-full">
                    {attributes.map(({ key, label }) => (
                        <React.Fragment key={key}>
                            {/* Yourshroom Column */}
                            <div className="flex items-center whitespace-nowrap relative ml-5">
                                {/* Bullet Icon */}
                                <div className="w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center mr-1">
                                    <svg
                                        width="8"
                                        height="8"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="black"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </div>
                                {/* Text */}
                                <span className={styles.txt}>{yourshroom[key] || "?"}</span>

                                {/* Underline */}
                                <div
                                    className="absolute bottom-0 left-0 w-[70%]"
                                    style={{
                                        height: "0.5px",
                                        backgroundColor: "#000"
                                    }}
                                ></div>
                            </div>

                            {/* Label Column */}
                            <div className={styles.txt}>
                                {label}
                            </div>

                            {/* Shroom2 Column */}
                            <div className={styles.txt}>
                                <span className="pb-[1px]">{shroom2[key] || "?"}</span>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default ComparisonTable;