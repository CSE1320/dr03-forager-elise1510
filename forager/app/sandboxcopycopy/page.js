import Message from "../../components/Message";
import { DataMushroomListPercent } from "@/components/MushroomList";
import {mushroomslistpercent,pill,shroom} from '../../data/development'
import FilterSettings from '@/components/FilterSettings'

import Mushroom from '@/components/Mushroom'
export default function SandboxCopyCopyPage() {
    return (
        <Mushroom {...shroom}  />
    );
}
  