import Message from "../../components/Message";
import MushroomList from "@/components/MushroomList";
import {mushroomslist} from '../../data/development'

export default function SandboxPage() {
    return (
      <div className="page flex justify-center items-center flex-row">
        <MushroomList mushrooms = {mushroomslist}/>
      </div>
    );
}
  