import React from 'react';
import { nunitof } from '@/app/layout'; // Ensure this import is correct
import styles from '../styles/pill.module.css';
import PillList from './PillList';
import { IoClose } from "react-icons/io5";
const FilterSettings = ({ pills }) => {

    return (
        <div>
            <div className= 'mb-16'>
                <IoClose
                    size={48}
                    className="absolute right-[21px] top-[21px] cursor-pointer"
                />

                <h2 className="mb-20px absolute top-[21px] left-1/2 transform -translate-x-1/2 text-black text-center font-nunito text-lg font-bold">
                    FILTER
                </h2></div>
                <PillList pills={pills} />

        </div>


    );
};

export default FilterSettings;