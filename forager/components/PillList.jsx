import React from 'react';
import { nunitof } from '@/app/layout'; // Ensure this import is correct
import styles from '../styles/pill.module.css';
import Pill from './Pill';

const PillList = ({ pills }) => {
  // Group pills by category
  const groupedPills = pills.reduce((acc, pill) => {
    if (!acc[pill.cat]) {
      acc[pill.cat] = [];
    }
    acc[pill.cat].push(pill);
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(groupedPills).map((cat) => (
        <div key={cat}>
          <h2 className={styles.cat}>{cat}</h2> <div className={styles.pillContainer}>
          {groupedPills[cat].map((pill, index) => (
           <Pill
              key={index}
              label={pill.label}
              triggered={pill.triggered}
            />
          ))}</div>
        </div>
      ))}
    </div>
  );
};


const TitlePillList = ({ pills, title }) => {
  return (
    <div>
      <h2 className={styles.cat}>{title}</h2>
      <div className={styles.pillContainer}>
        {pills.map((pill, index) => (
          <Pill key={index} label={pill.label} triggered={pill.triggered} />
        ))}
      </div>
    </div>
  );
};

const DTitlePillList = ({ pills, title }) => {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.pillContainer}>
        {pills.map((pill, index) => (
          <Pill key={index} label={pill.label} triggered={pill.triggered} />
        ))}
      </div>
    </div>
  );
};
export default PillList;
export {TitlePillList,DTitlePillList,PillList};