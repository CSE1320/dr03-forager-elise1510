import DashboardPage from './dashboard/page';  // Use relative path
import Sandbox from './sandbox/page';  // Use relative path
import SandboxCopyPage from './sandboxcopy/page';  // Use relative path
import SandboxCopyCopyPage from './sandboxcopycopy/page';
export default function Home() {
  //return <DashboardPage />;  // Render the DashboardPage as the default for the '/' route
  //return <Sandbox />;  // Render the DashboardPage as the default for the '/' route
  //return <SandboxCopyPage />;  // Render the Sandbox as the default for the '/' route
   return <SandboxCopyCopyPage />;  // Render the Sandbox as the default for the '/' route
}
