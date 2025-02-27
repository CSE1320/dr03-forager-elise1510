import Message from "../../components/Message";
import { DataMushroomListPercent } from "@/components/MushroomList";
import {mushroomslistpercent,shr} from '../../data/development'
import { MushroomCard } from "@/components/MushroomCard";

export default function SandboxPage() {
    return (
      <div className="page flex justify-center items-center flex-row">
        <MushroomCard {...shr}/>
       
      </div>
    );
}
  