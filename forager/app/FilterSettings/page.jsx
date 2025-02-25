import Message from "../../components/Message";
import { DataMushroomListPercent } from "@/components/MushroomList";
import {mushroomslistpercent,pill} from '../../data/development'
import PillList from '@/components/PillList'

export default function SandboxCopyPage() {
    return (
        <PillList pills = {pill}  />
    );
}
  