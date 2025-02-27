'use client';

import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar'; // Adjust the path as necessary
import "../../styles/globals.css";
import Search from '@/components/Search';
import { DataMushroomList } from '@/components/MushroomList';
import { DTitlePillList } from '@/components/PillList';
import { pills, mushroomslist } from '@/data/development';
import FilterSettings from '@/components/FilterSettings';

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [filteredMushrooms, setFilteredMushrooms] = useState(mushroomslist); // State for filtered mushrooms
  const [showFilterSettings, setShowFilterSettings] = useState(false); // State for FilterSettings visibility

  const triggeredPills = pills.filter((pill) => pill.triggered);

  // Filter mushrooms whenever the search term changes
  useEffect(() => {
    const filtered = mushroomslist.filter((mushroom) =>
      mushroom.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMushrooms(filtered);
  }, [searchTerm]);

  return (
    <div className="page bg-[#397367] relative">
      <div className="w-full h-[18.4%]">
        <div className="w-[54.7%] h-[6.522%] flex-shrink-0 pl-[7.2%] pt-[8%]">
          <h1 className="nunito-b text-white text-[57px] leading-10">
            <span className="text-white nunito-f text-3xl font-medium leading-10">
              Hi,
            </span>{' '}
            Chantelle!
          </h1>
        </div>
      </div>
      <div className="w-full h-[81.6%] flex-shrink-0 rounded-t-[41px] bg-[#F2F2F2]">
        <div className="pt-[7.2%] ml-[5.5%]">
          <Search setSearchTerm={setSearchTerm} onFilterClick={() => setShowFilterSettings(true)} />
        </div>
        <div className="ml-[7.2%] mb-[1.83%]">
          <DTitlePillList title="My Collection" pills={triggeredPills} />
        </div>
        <DataMushroomList mushrooms={filteredMushrooms} />
      </div>
      <NavBar />
      {showFilterSettings && (
        <div className="absolute inset-0 bg-black bg-opacity-50 z-40 flex items-start">
          <FilterSettings
            pills={pills}
            onClose={() => setShowFilterSettings(false)} // Close the filter settings
          />
        </div>
      )}
    </div>
  );
}