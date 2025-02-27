import React from 'react';
import styles from '../styles/pill.module.css';
import {PillList,TitlePillList} from './PillList';
import { IoClose } from "react-icons/io5";
const FilterSettings = ({ pills, onClose }) => {
    return (
      <div className="relative w-full max-w-md mx-auto mt-10 bg-white rounded-t-3xl shadow-lg z-50 h-full flex flex-col">
        <IoClose
          size={36}
          className="absolute right-5 top-5 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="mt-8 text-black text-center font-nunito text-lg font-bold">
          FILTER
        </h2>
        <div className="mt-10 p-4 flex-grow">
          <PillList pills={pills} />
        </div>
      </div>
    );
  };
  const TitleFilterSettings = ({ pills = [] }) => {
    // Ensure pills is an array before using reduce
    const groupedPills = pills.reduce((acc, pill) => {
        if (!acc[pill.cat]) {
            acc[pill.cat] = [];
        }
        acc[pill.cat].push(pill);
        return acc;
    }, {});

    return (
        <div>
            <div className='mb-16'>
                <IoClose
                    size={48}
                    className="absolute right-[21px] top-[21px] cursor-pointer"
                />
                <h2 className="mb-20px absolute top-[21px] left-1/2 transform -translate-x-1/2 text-black text-center font-nunito text-lg font-bold">
                    FILTER
                </h2>
            </div>

            {/* Render a list of TitlePillList components */}
            {Object.keys(groupedPills).map((category) => (
                <TitlePillList key={category} title={category} pills={groupedPills[category]} />
            ))}
        </div>
    );
};

export default FilterSettings;
export{TitleFilterSettings};