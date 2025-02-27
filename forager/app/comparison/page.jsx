import NavBar from '../../components/NavBar';
import "../../styles/globals.css";
import ComparisonTable from '@/components/ComparisonTable';
import { mushroomslistpercent, pill, shroom, shroom2, yourshroom, percent } from '../../data/development';
import Message from '@/components/Message';

export default function MushroomComparisonPage() {
  return (
    <div className="page">
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-[#579076] rounded-b-[40px] shadow-md z-50">
        <button className="flex items-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 59" fill="none" className="mr-2">
            <path d="M21.0352 20.8297L18.8043 18.6381L6.65322 30.5825C6.45735 30.7739 6.30191 31.0015 6.19584 31.2522C6.08976 31.5029 6.03516 31.7717 6.03516 32.0432C6.03516 32.3148 6.08976 32.5836 6.19584 32.8343C6.30191 33.085 6.45735 33.3126 6.65322 33.504L18.8043 45.4546L21.0331 43.263L9.62843 32.0463L21.0352 20.8297Z" fill="white" />
          </svg>
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