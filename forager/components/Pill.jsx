import React from 'react';
import { nunitof } from '@/app/layout'; 
import styles from '../styles/pill.module.css';

const Pill = ({triggered,label }) => {
    let pillColor,textColor;
    if(triggered){
        pillColor = '#579076';
        textColor = 'white';
    }
    else{
        pillColor = '#D9D9D9';
        textColor = '#7C7C7C';
    }
  return (
    <div className ={styles.pill} style={{backgroundColor: pillColor, color: textColor }}><p className = {styles.label}>{label}</p></div>
  );
};


export default Pill