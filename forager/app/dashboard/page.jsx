'use client';

import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar'; // Adjust the path as necessary
import "../../styles/globals.css";
import Search from '@/components/Search';
import { DataMushroomList } from '@/components/MushroomList';
import { DTitlePillList } from '@/components/PillList';
import { pills, mushroomslist } from '@/data/development';
import FilterSettings, { TitleFilterSettings } from '@/components/FilterSettings';
import Link from 'next/link';
export default function DashboardPage() {
  //localStorage.removeItem('count');
  const getCount = () => Number(localStorage.getItem('count')) || 0;

  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [filteredMushrooms, setFilteredMushrooms] = useState(mushroomslist); // State for filtered mushrooms
  const [showFilterSettings, setShowFilterSettings] = useState(false); // State for FilterSettings visibility
  const [count, setCount] = useState(getCount); 

  const [pillsState, setPillsState] = useState(pills);

  const handlePillClick = (label) => {
    console.log(label);
      setPillsState((prevPills) =>
          prevPills.map((pill) =>
              pill.label === label ? { ...pill, triggered: !pill.triggered } : pill
          )
      );
  };

  // Update localStorage whenever 'count' changes
  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  // Handle clicks on mushroom items
  const handleMushroomItemClick = (e) => {
    console.log(count);
    //setCount((prevCount) => prevCount + 1); 
    //setCount((0));
    window.location.href="/mushroom";
/*     <Link href="/mushroom" passHref>
  </Link> */
  };

  // Filter mushrooms whenever the search term changes
  useEffect(() => {
    const filtered = mushroomslist.filter((mushroom) =>
      mushroom.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMushrooms(filtered);
  }, [searchTerm]);
  const triggeredPills = pillsState.filter((pill) => pill.triggered);
  return (
    <div className="page bg-[#397367] relative">
      <div className="w-full h-[18%]">
        <div className="w-[55%] h-[7%] flex-shrink-0 pl-[7%] pt-[8%]">
          <h1 className="nunito-b text-white text-[57px] leading-10">
            <span className="text-white nunito-f text-3xl font-medium leading-10">
              Hi,
            </span>{' '}
            Chantelle!
          </h1>
        </div>
      </div>
      <div className="w-full h-[82%] flex-shrink-0 rounded-t-[41px] bg-[#F2F2F2]">
        <div className="pt-[7%] ml-[5.5%]">
          <Search setSearchTerm={setSearchTerm} onFilterClick={() => setShowFilterSettings(true)} />
        </div>
            <div className="ml-[7%] mb-[2%]">
                <DTitlePillList title="My Collection" pills={triggeredPills} onPillClick={handlePillClick} />
            </div>
            <div onClick={handleMushroomItemClick}>
                <DataMushroomList mushrooms={filteredMushrooms} />
            </div> 
            </div>
            <NavBar /> 
            {showFilterSettings && (
                <div className="absolute inset-0 bg-black bg-opacity-50 z-40 flex items-start">
                    <TitleFilterSettings pills={pillsState} onPillClick={handlePillClick} onClose={() => setShowFilterSettings(false)} />
                </div>
            )}
    </div>
  );
}