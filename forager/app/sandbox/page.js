import Message from "../../components/Message";
import { DataMushroomListPercent } from "@/components/MushroomList";
import {mushroomslistpercent} from '../../data/development'

export default function SandboxPage() {
    return (
      <div className="page flex justify-center items-center flex-row">
        <DataMushroomListPercent mushrooms = {mushroomslistpercent}/>
      </div>
    );
}
  