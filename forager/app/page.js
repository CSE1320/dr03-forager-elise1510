import DashboardPage from './dashboard/page';  // Use relative path
import Sandbox from './sandbox/page';  // Use relative path
import SandboxCopyPage from './sandboxcopy/page';  // Use relative path
import SandboxCopyCopyPage from './sandboxcopycopy/page';
import SandboxCopyCubedPage from './sandboxcopy3/page';
import MushroomComparisonPage from './comparison/page';
import { MushroomCard } from '@/components/MushroomCard';
import shr from '../data/development'

export default function Home() {

  return <MushroomComparisonPage></MushroomComparisonPage>
 //return <DashboardPage />;  // Render the DashboardPage as the default for the '/' route
  //return <Sandbox />;  // Render the DashboardPage as the default for the '/' route
 //return <SandboxCopyPage />;  // Render the Sandbox as the default for the '/' route
  // return <SandboxCopyCopyPage />;  // Render the Sandbox as the default for the '/' route
  //return <SandboxCopyCubedPage />
}
