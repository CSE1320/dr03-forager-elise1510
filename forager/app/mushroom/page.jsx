'use client';

import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import "../../styles/globals.css";
import { mushroomslistpercent2, pill, shroom, shroom2, yourshroom, percent } from '../../data/development';
import { Message, BigMessage } from '@/components/Message';
import Mushroom from '@/components/Mushroom';
import { DataMushroomListPercent } from '@/components/MushroomList';
import { IoClose } from 'react-icons/io5';
import { IoChevronForward } from "react-icons/io5";
export default function MushroomPage() {
  const getCount = () => Number(localStorage.getItem('count')) || 0;
  const [count] = useState(getCount);
  const [isMessageVisible, setMessageVisible] = useState(true);
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
    window.location.href = '/comparison'
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
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 59" fill="none" className="mr-2">
              <path d="M21.0352 20.8297L18.8043 18.6381L6.65322 30.5825C6.45735 30.7739 6.30191 31.0015 6.19584 31.2522C6.08976 31.5029 6.03516 31.7717 6.03516 32.0432C6.03516 32.3148 6.08976 32.5836 6.19584 32.8343C6.30191 33.085 6.45735 33.3126 6.65322 33.504L18.8043 45.4546L21.0331 43.263L9.62843 32.0463L21.0352 20.8297Z" fill="white" />
            </svg>
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
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 6H11M11 6L6 1M11 6L6 11"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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

            <Mushroom {...shroom} />
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
};
