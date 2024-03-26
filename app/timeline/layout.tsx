import MovingBackground from './MovingBackground.js';
import Centuries from './Centuries.js';
import Episodes from './Episodes.js';
//import MouseSlider from './MouseSlider.js';
//import PhidgetSlider from './PhidgetSlider.js';
import FauxPhidgetSlider from './FauxPhidgetSlider.js';
import { Timeline, Config} from '@/app/lib/data';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const configData = await  Config();    
    return (
      <div className="">
        <div className="">
            <MovingBackground config={configData}/>
            <Centuries />
            <Episodes />
            {/* <PhidgetSlider /> **/}
            {/* <FauxPhidgetSlider  /> */}

        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
    );
  }