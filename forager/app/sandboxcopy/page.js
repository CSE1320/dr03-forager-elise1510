import Message from "../../components/Message";
import { DataMushroomListPercent } from "@/components/MushroomList";
import {mushroomslistpercent,pill} from '../../data/development'
import FilterSettings from '@/components/FilterSettings'

export default function SandboxCopyPage() {
    return (
        <FilterSettings pills = {pill}  />
    );
}
  