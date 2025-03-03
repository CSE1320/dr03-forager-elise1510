import NavBar from '../../components/NavBar';
import "../../styles/globals.css";
import ComparisonTable from '@/components/ComparisonTable';
import { mushroomslistpercent, pill, shroom, shroom2, yourshroom, percent } from '../../data/development';
import Message from '@/components/Message';
import { IoChevronBack } from 'react-icons/io5';

export default function MushroomComparisonPage() {
  return (
    <div className="page bg-[#F2F2F2]">
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-[#579076] rounded-b-[40px] shadow-md z-50">
        <button className="flex items-center text-white">
          <IoChevronBack/>
        </button>
        <div className="hder">Compare</div>
        <div className="w-10"></div> {/* Empty div for balanced spacing */}
      </div>

      {/* Main Content */}
      <div className="pt-[100px] pb-[100px]"> {/* Add padding to avoid overlap */}
        {/* Centered Message Horizontally */}
        <div className="flex justify-center">
          <Message />
        </div>
        <div className='pt-[2em]'>
          <ComparisonTable yourshroom={yourshroom} shroom2={shroom2} percent={percent} />
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <NavBar />
    </div>
  );
}