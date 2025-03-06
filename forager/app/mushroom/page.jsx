// MushroomPage
'use client';

import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import "../../styles/globals.css";
import { shrooms,mushroomslistpercent2 } from '../../data/development';
import { Message, BigMessage } from '@/components/Message';
import Mushroom from '@/components/Mushroom';
import { DataMushroomListPercent } from '@/components/MushroomList';
import { IoChevronBack, IoClose } from 'react-icons/io5';
import { IoChevronForward, IoArrowForwardOutline } from "react-icons/io5";
import { useSearchParams } from 'next/navigation';

export default function MushroomPage() {
  const searchParams = useSearchParams();
  const imageId = searchParams.get('imageId');
console.log(imageId);
  console.log(shrooms); 
  const selectedMushroom = shrooms.find(shroom => shroom.imageId === imageId);
  console.log(selectedMushroom);
  const getCount = () => Number(localStorage.getItem('count')) || 0;
  const [count, setCount] = useState(getCount); // Initialize count to 0
  const [isMessageVisible, setMessageVisible] = useState(true);

  // Fetch count from localStorage after component mounts
  useEffect(() => {
    
    setCount(getCount());
  }, []);

  // Update localStorage whenever count changes
  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  useEffect(() => {
    if (count !== 0) {
      setMessageVisible(false);
    } else {
      setMessageVisible(true);
    }
  }, [count]);

  const closeMessage = () => {
    setMessageVisible(false);
  };

  const compClick = () => {
    window.location.href = '/comparison';
  };

  // Handle case where selectedMushroom is not found
  if (!selectedMushroom) {
    return <div>Mushroom not found</div>;
  }

  return (
    <div className="page">
      {isMessageVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Message container */}
          <div className="relative rounded-lg shadow-lg">
            <button
              onClick={closeMessage}
              className="absolute top-2 right-2 text-2xl text-white"
            >
              <IoClose />
            </button>
            <div className="text-xl font-nunito">
              <BigMessage />
            </div>
          </div>
        </div>
      )}

      <div className={`x ${count === 0 && isMessageVisible ? 'blurred' : ''}`}>
        {/* Top Navigation Bar */}
        <div className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-[#579076] rounded-b-[40px] shadow-md z-50">
          <button className="flex items-center text-white">
            <IoChevronBack />
          </button>
          <div className="hder">Match Results</div>
          <div className="w-10"></div> {/* Empty div for balanced spacing */}
        </div>

        {/* Main Content */}
        <div className="pt-[100px] pb-[100px]">
          <div className="flex justify-center">
            <div className="flex justify-between items-center w-[70%] pb-[2em]">
              <div className="text-center text-[#314053] font-nunito text-xs font-normal">
                Not what you expected?
              </div>
              <div className="flex items-center gap-2 p-2 rounded-[10px] bg-[#FF5050] cursor-pointer">
                <span className="text-white text-xs font-nunito font-normal">Report Error</span>
                <IoArrowForwardOutline />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="message-container relative">
              <Message />
            </div>
          </div>

          <div className='pt-[2em]'>
            <div className="flex justify-end items-center">
              <div className="text-[#888787] font-nunito font-normal mb-[1em]">
                <button className="w-[5em] flex items-center justify-center" onClick={compClick}>
                  Compare
                  <span className='text-large'>
                    <IoChevronForward className="ml-[.5em] size-3" />
                  </span>
                </button>
              </div>
            </div>

            {/* Render the Mushroom component with the selected mushroom data */}
            <Mushroom {...selectedMushroom} />
          </div>
          <div>
            <DataMushroomListPercent mushrooms={mushroomslistpercent2} />
          </div>
        </div>
        {/* Bottom Navigation Bar */}
        <NavBar />
      </div>
    </div>
  );
}