import React from 'react';
import { nunitof } from '@/app/layout'; // Ensure this import is correct
import styles from '../styles/comparisontable.module.css';
//TODO: FIX BORDER
const ComparisonTable = ({ yourshroom, shroom2 }) => {
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

    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-start gap-[15px] w-full pl-4"> 
                {/* Your Photo */}
                <div className="flex flex-col items-center mr-[30]">
                    <div className="w-[150px] h-[200px] flex items-center bg-white shadow-md">
                        <div
                            className="w-[140px] h-[190px] bg-cover bg-no-repeat bg-center"
                            style={{ backgroundImage: `url(${yourshroom.imageUrl})` }}
                        ></div>
                    </div>
                    <h2 className={styles.title}>Your Photo</h2>
                </div>

                {/* Shroom2 */}
                <div className="flex flex-col items-center">
                    <div className="w-[150px] h-[200px] flex items-center bg-white shadow-md">
                        <div
                            className="w-[140px] h-[190px] bg-cover bg-no-repeat bg-center"
                            style={{ backgroundImage: `url(${shroom2.imageUrl})` }}
                        ></div>
                    </div>
                    <h2 className={styles.title}>{shroom2.title}</h2>
                </div>
            </div>

            {/* Attribute Table */}
            <div className="mt-2 w-full">
                <div className="grid grid-cols-3 gap-[10px] items-center text-center w-full">
                    {attributes.map(({ key, label }) => (
                        <React.Fragment key={key}>
                            {/* Yourshroom Column */}
                            <div className="flex items-center whitespace-nowrap relative">
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
                                {/* Centered Text */}
                                <div className="flex-1 text-center">
                                    <span className={styles.txt}>{yourshroom[key] || "?"}</span>
                                </div>
                                {/* Underline */}
                                <div
                                    className="absolute bottom-0 left-0 w-full"
                                    style={{
                                        height: ".5px",
                                        backgroundColor: "#000",
                                        marginTop: "2px",
                                        
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