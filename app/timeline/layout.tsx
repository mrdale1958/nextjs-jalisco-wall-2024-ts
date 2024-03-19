import MovingBackground from './MovingBackground.js';
import Centuries from './Centuries.js';
import Episodes from './Episodes.js';
//import MouseSlider from './MouseSlider.js';
//import PhidgetSlider from './PhidgetSlider.js';
import FauxPhidgetSlider from './FauxPhidgetSlider.js';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="">
        <div className="">
            <MovingBackground />
            <Centuries />
            <Episodes />
            {/* <PhidgetSlider /> **/}
            {/* <FauxPhidgetSlider  /> */}

        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
    );
  }