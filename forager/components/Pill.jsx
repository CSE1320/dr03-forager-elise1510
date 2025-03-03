'use client'
import React, { useState } from 'react';
import styles from '../styles/pill.module.css';

const Pill = ({ label, triggered }) => {
    // State to manage the triggered state
    const [triggeredState, setTriggered] = useState(triggered);

    // Determine pill color and text color based on the triggered state
    const pillColor = triggeredState ? '#579076' : '#D9D9D9';
    const textColor = triggeredState ? 'white' : '#7C7C7C';

    // Toggle the triggered state on click
    const handleClick = () => {
        setTriggered(!triggeredState);
    };

    return (
        <div
            className={styles.pill}
            style={{ backgroundColor: pillColor, color: textColor }}
            onClick={handleClick} 
        >
            <p className={styles.label}>{label}</p>
        </div>
    );
};
const DPill = ({ label, triggered, onPillClick }) => {
    const pillColor = triggered ? '#579076' : '#D9D9D9';
    const textColor = triggered ? 'white' : '#7C7C7C';

    return (
        <div
            className={styles.pill}
            style={{ backgroundColor: pillColor, color: textColor }}
            onClick={() => onPillClick(label)}
        >
            <p className={styles.label}>{label}</p>
        </div>
    );
};
export default Pill;
export{Pill,DPill}