'use client'
import React from 'react';
//import { Timeline, Config} from '@/app/lib/data';
import styles from './SlidingDisplay.css';
import { Josefin_Sans } from "next/font/google";

const brandon = Josefin_Sans({ subsets: ["latin"] });
export default  function Centuries(props) {

  function placeLabel (century, displayLeft, configData) {
  const centuryLeft = century.start * configData.availableClicks;
  const centuryRight = century.end * configData.availableClicks;
  const screenLeft = -displayLeft;
  const screenRight = -displayLeft + configData.screenWidth;
    // not on screen?
    if (centuryLeft >= screenRight || centuryRight <= screenLeft) {
      return {left:"40px", position:"relative"};
    }
  // screen less than half on left?
  if (centuryRight <= screenLeft+configData.screenWidth/2) {
    return {left:"40px", position:"relative"};
  }
  // screen more than half on left and more than half on right?
  if (centuryLeft <= screenLeft+configData.screenWidth/2 && centuryRight >= screenRight+configData.screenWidth/2) {
    // configData.screenWidth/2
    return {left:"calc(var(--actual_screenwidth) / 2)"};
  }
  // screen less than half on right?
  if (centuryLeft >= screenRight+configData.screenWidth/2) {
    return {right:"40px", position:"relative"}
  }
  return {right:"40px", position:"relative"}


}

  //const sliderPosition = await  SliderPosition();
  const configData = props.configData;    
  const timeline = props.timeline;  
  const centuryIndicesClasses = [{class:"prehistory", index:0},
                                  {class:"sixteenth", index:3},
                                  {class:"seventeenth", index:12},
                                  {class:"eighteenth", index:14},
                                  {class:"nineteenth", index:19},
                                  {class:"twentieth", index:29},
                                  {class:"twentyfirst", index:43}] ;
  const displayPostion =  Math.max(-configData.availableClicks + configData.screenWidth, 
    Math.min(configData.printedGraphicOffset, -props.displayPosition + configData.printedGraphicOffset));
    const prehistory = timeline[centuryIndicesClasses[0].index];
  return (
          <div id="centuries-block" 
                className= {brandon.classname} 
                style={{left: String(displayPostion) + "px"}}>
                  {centuryIndicesClasses.map((century) => {
                    const placement = placeLabel(timeline[century.index], displayPostion, configData);
                    return (
                      <div className={"century " + century.class} key={century.class}>
                        <div className="century-label" 
                          style={placement}
                          >{timeline[century.index].Año}
                        </div>
                      </div>
                    )
                  })}
                  <div className="end-caps">
                    <div className="end-cap left" >&nbsp;</div>
                    <div className="end-cap right" >&nbsp;</div>
                  </div>
            
          </div>
        );
  }
