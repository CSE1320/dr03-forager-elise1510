'use client'
import React, { useState } from 'react';
import styles from '../styles/pill.module.css';

const Pill = ({ label }) => {
    // State to manage the triggered state
    const [triggered, setTriggered] = useState(false);

    // Determine pill color and text color based on the triggered state
    const pillColor = triggered ? '#579076' : '#D9D9D9';
    const textColor = triggered ? 'white' : '#7C7C7C';

    // Toggle the triggered state on click
    const handleClick = () => {
        setTriggered(!triggered);
    };

    return (
        <div
            className={styles.pill}
            style={{ backgroundColor: pillColor, color: textColor }}
            onClick={handleClick} // Add onClick handler
        >
            <p className={styles.label}>{label}</p>
        </div>
    );
};

export default Pill;