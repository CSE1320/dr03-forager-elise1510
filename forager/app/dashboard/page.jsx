/// DashboardPage
'use client';

import React, { useState, useEffect, act } from 'react';
import NavBar from '../../components/NavBar';
import "../../styles/globals.css";
import Search from '@/components/Search';
import { DataMushroomList, DashboardDataMushroomList } from '@/components/MushroomList';
import { DTitlePillList } from '@/components/PillList';
import { pills, mushroomslist } from '@/data/development';
import FilterSettings, { TitleFilterSettings } from '@/components/FilterSettings';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter(); // Initialize useRouter

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMushrooms, setFilteredMushrooms] = useState(mushroomslist);
  const [showFilterSettings, setShowFilterSettings] = useState(false);
  const getCount = () => Number(localStorage.getItem('count')) || 0;
  const [count, setCount] = useState(getCount);
  const [pillsState, setPillsState] = useState(pills);

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);


  const handlePillClick = (label) => {
    setPillsState((prevPills) =>
      prevPills.map((pill) =>
        pill.label === label ? { ...pill, triggered: !pill.triggered } : pill
      )
    );
  };

  const handleMushroomItemClick = (imageId, imageUrl) => {
    console.log(imageId, imageUrl);
    setCount((prevCount) => prevCount + 1);
    console.log("COUNT", count);
    //setCount((0));
    router.push(`/mushroom?imageId=${encodeURIComponent(imageId)}`);

  };
  let triggeredPills = pillsState.filter((pill) => pill.triggered);
  useEffect(() => {
    // Get all triggered pills
    const activePills = pillsState.filter(pill => pill.triggered);
    console.log("Active Pills:", activePills);

    // If no pills are triggered, filter only by search term
    if (activePills.length === 0) {
        const filtered = mushroomslist.filter(mushroom =>
            mushroom.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredMushrooms(filtered);
        return;
    }

    // Initialize a map to count occurrences of each mushroom in active pills
    const mushroomCountMap = new Map();

    // Check if "Favorites" is currently triggered
    const isFavoritesTriggered = activePills.some(pill => pill.label === "Favorites");

    // Collect applicable mushrooms from triggered pills (excluding "Favorites")
    activePills.forEach(pill => {
        if (pill.label !== "Favorites") {
            pill.applicableshrooms.forEach(shroom => {
                if (mushroomCountMap.has(shroom)) {
                    mushroomCountMap.set(shroom, mushroomCountMap.get(shroom) + 1);
                } else {
                    mushroomCountMap.set(shroom, 1);
                }
            });
        }
    });

    // Retrieve "Favorites" list from local storage ONLY if "Favorites" is triggered
    if (isFavoritesTriggered) {
        const storedIdk = localStorage.getItem('idk'); // Change 'idk' to 'favs' when ready
        if (storedIdk) {
            const idk = JSON.parse(storedIdk);
            const favoritesEntry = idk.find(entry => entry.label === "Favorites");
            console.log("Favorites Entry:", favoritesEntry, "idk:", idk);

            if (favoritesEntry && Array.isArray(favoritesEntry.applicableshrooms)) {
                favoritesEntry.applicableshrooms.forEach(shroom => {
                    if (mushroomCountMap.has(shroom)) {
                        mushroomCountMap.set(shroom, mushroomCountMap.get(shroom) + 1);
                    } else {
                        mushroomCountMap.set(shroom, 1);
                    }
                });
            }
        }
    }

    // Determine the number of active pills (including "Favorites" if applicable)
    const totalActivePills = activePills.length;

    // Only include mushrooms that are present in ALL active pills (AND condition)
    const allowedMushrooms = new Set();
    mushroomCountMap.forEach((count, shroom) => {
        if (count === totalActivePills) {
            allowedMushrooms.add(shroom);
        }
    });

    console.log("Active Pills:", activePills);
    console.log("Allowed Mushrooms:", allowedMushrooms);

    // Filter mushrooms based on search term and allowed mushrooms
    const filtered = mushroomslist.filter(mushroom => {
        const matchesSearch = mushroom.title.toLowerCase().includes(searchTerm.toLowerCase());

        // If no pills are triggered, filter only by search term
        if (activePills.length === 0) {
            return matchesSearch;
        }

        // Otherwise, filter by search term and include only if in ALL active pills
        return matchesSearch && allowedMushrooms.has(mushroom.imageId);
    });

    setFilteredMushrooms(filtered);
}, [searchTerm, pillsState]);

  return (
    <div className="page bg-[#397367] relative" >
      <div className="w-full  pb-[12%] h-[18%]">
        <div className="w-[55%] h-[7%] flex-shrink-0 pl-[7%]  pt-[8%]">
          <h1 className="nunito-b text-white text-[57px] leading-10">
            <span className="text-white nunito-f text-3xl font-medium leading-10">
              Hi,
            </span>{' '}
            Chantelle!
          </h1>
        </div>
      </div>
      <div className="w-full h-[132%] flex-shrink-0 rounded-t-[41px] bg-[#F2F2F2]">
        <div className="pt-[7%] ml-[5.5%]">
          <Search setSearchTerm={setSearchTerm} onFilterClick={() => setShowFilterSettings(true)} />
        </div>
        <div className="ml-[7%] mb-[2%]">
          <DTitlePillList title="My Collection" pills={triggeredPills} onPillClick={handlePillClick} />
        </div>
        {/* <div onClick={handleMushroomItemClick}> */}
        <div className="pb-[12%]">
          <DashboardDataMushroomList mushrooms={filteredMushrooms} onCardClick={handleMushroomItemClick} />
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
//endregion