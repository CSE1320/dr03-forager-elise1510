import Message from "../../components/Message";
import { DataMushroomListPercent } from "@/components/MushroomList";
import {mushroomslistpercent,pill,shroom,shroom2, yourshroom} from '../../data/development'
import FilterSettings from '@/components/FilterSettings'

import ComparisonTable from '@/components/ComparisonTable'
export default function SandboxCopyCopyPage() {
    return (
<ComparisonTable yourshroom={yourshroom} shroom2={shroom2} />
    );
}
  