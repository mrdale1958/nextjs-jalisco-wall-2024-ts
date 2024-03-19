import { Config, SliderPosition } from '@/app/lib/data';
import Image from "next/image";
import styles from './SlidingDisplay.css';

export default async function MovingBackground (){
  const sliderPosition = await  SliderPosition();
  const configData = await  Config();    
        //this.state = {color: "red"};
        const alttext = 'background graphic';
        const sizesFix = "(min-width: " + configData.printedGraphicWidth + ") 100vw"

      let acceleratedPosition = configData.printedGraphicScaleX * sliderPosition;
        return (
          <div className="h-full -top-124px .absolute z-0 opacity-[1.0]" style={{left: 
                  String(
                    Math.max(configData.availableClicks, 
                      Math.min(configData.printedGraphicOffset, -acceleratedPosition + configData.printedGraphicOffset))) + "px"}}>
          {/* <object id="printed-svg-object" data="Timeline 11 ARTscreen versiondm.svg" type="image/svg+xml"> 
            <img src="background.jpg" />
          </object>	 */}
          <Image src="/JAPI_ID_HISTORIA _FONDO_PANTALLA.png"
                          alt={alttext}
                          id="printed-png-object"
                          className="dark:invert"
                          width={configData.printedGraphicWidth}
                          height={configData.printedGraphicHeight}
                          priority
                        />	
        </div>
        );
  }

