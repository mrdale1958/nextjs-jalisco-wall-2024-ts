import MovingParts from './MovingParts.js';
//import MouseSlider from './MouseSlider.js';
//import PhidgetSlider from './PhidgetSlider.js';
import FauxPhidgetSlider from './FauxPhidgetSlider.js';
import { Timeline, Config} from '@/app/lib/data';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const configData = await  Config();    
  const timeline = await  Timeline();    
    return (
      <div className="">
        <MovingParts configData={configData} timeline={timeline} />
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
    );
  }