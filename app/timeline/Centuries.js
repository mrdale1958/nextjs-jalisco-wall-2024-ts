'use client'
import React from 'react';
//import { Timeline, Config} from '@/app/lib/data';
import styles from './SlidingDisplay.css';
import { Josefin_Sans } from "next/font/google";
import { m } from 'framer-motion';

const brandon = Josefin_Sans({ subsets: ["latin"] });
export default  function Centuries(props) {

function placeLabel (century, displayLeft, configData) {
  const centuryLeft = century.start * configData.availableClicks + displayLeft;
  const centuryRight = century.end * configData.availableClicks + displayLeft;
  const midscreen = configData.screenWidth/2;
  const screenLeft = displayLeft;
  const screenRight = displayLeft + configData.screenWidth;
  const divBuffer = 300;
  const displayRight = displayLeft + configData.screenWidth;
  // console.log("placeLabel", century.Año, centuryLeft, centuryRight, screenLeft, screenRight);
  let newLeft = {};
  if ((centuryLeft > displayRight) || (centuryRight < displayLeft)) {
    newLeft = {display:"none", left:"0px"};
  } else if (centuryLeft > midscreen) {
    newLeft = {left: String(centuryLeft - displayLeft) + "px"};
  } else if (centuryRight < midscreen) {
    newLeft = {left: String(displayRight - midscreen) + "px"};
  }
  return newLeft;
}
function placeLabel2 (century, displayLeft, configData) {
  let newStyle = {};
  const Rscreen = -displayLeft + configData.screenWidth;
  const Lscreen = -displayLeft;
  const Rbar = century.end * configData.availableClicks;
  const Lbar = century.start * configData.availableClicks; 
  const midpoint = -displayLeft + configData.screenWidth/2; 
  const bumper = 200;
  if ((Lbar > Rscreen) || (Rbar < Lscreen)) {
    newStyle = {display:"none", left:"0px"};
  }  else if ((Lbar < Rscreen) &&  (Lbar > midpoint-bumper)) {
    newStyle = {left:"150px"};
  } else if ((Rbar < midpoint+bumper) && (Rbar > Lscreen)) {
    newStyle = {left:String( Rbar - Lbar - bumper) + "px"};
  } else if ((Lbar < midpoint) && (Rbar > midpoint)) {
    newStyle = {left: String( midpoint - Lbar) + "px"};
  }
  return newStyle;
}
  // not on screen?
    /* if (centuryLeft >= screenRight || centuryRight <= screenLeft) {
      console.log("not on screen", century.Año, centuryLeft, centuryRight, screenLeft, screenRight)
      return {left:"40px"};
    }

  // screen less than half on left?
  if (centuryRight <= screenLeft && centuryRight > screenLeft+(configData.screenWidth/2)) {
    console.log("less than half on left", century.Año, centuryLeft, centuryRight, screenLeft, screenRight)
    return {right:"40px"};
  }
  // screen more than half on left and more than half on right?
  if (centuryLeft <= screenLeft+configData.screenWidth/2 && centuryRight >= screenRight-configData.screenWidth/2) {
    // configData.screenWidth/2
    console.log("more than half on left and right", century.Año, centuryLeft, centuryRight, screenLeft, screenRight);
    let newLeft = screenLeft - centuryLeft + configData.screenWidth/2;
    return {left:newLeft +"px"};
  }
  // screen less than half on right?
  if (centuryLeft >= screenRight && centuryLeft < screenRight - (configData.screenWidth/2)) {
    console.log("less than half on right", century.Año, centuryLeft, centuryRight, screenLeft, screenRight);  
    return {left:"40px"}
  }
  // at startup displayLeft is NaN so just put it in the middle
  console.log("default", century.Año, centuryLeft, centuryRight, screenLeft, screenRight);
  let newLeft = screenLeft + configData.screenWidth/2
    return {left:newLeft+"px"};

} */

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
  const displayPosition =  -props.displayPosition;
  //Math.max(-configData.availableClicks + configData.screenWidth, 
  //  Math.min(configData.printedGraphicOffset, -props.displayPosition + configData.printedGraphicOffset));
  const prehistory = timeline[centuryIndicesClasses[0].index];
  return (
          <div id="centuries-block" 
                className= {brandon.classname} 
                style={{left: String(displayPosition) + "px"}}>
                  {centuryIndicesClasses.map((century) => {
                    const placement = placeLabel2(timeline[century.index], displayPosition, configData);
                    return (
                      <div className={"century " + century.class} key={century.class}>
                        <div className="century-label" 
                          style={placement}
                          >{timeline[century.index].Año /* + "pleft:" + placement.left  + "pright:" +  placement.right + 
                          "\ncenturyLeft: " + (timeline[century.index].start  * configData.availableClicks) + 
                          "\ncenturyRight: " + (timeline[century.index].end * configData.availableClicks) + 
                          "\nscreenLeft: " + (-displayPosition) + 
                          "\nscreenRight: " + (-displayPosition + configData.screenWidth) +
                          "\nmidscreen: " + (-displayPosition + configData.screenWidth/2 )*/}</div>
                  
                        </div>
                    )
                  })}
                  <div className="end-caps">
                    <div className="end-cap left" >
                      <div className="instructions">
                        <div className="animate-right"><div className="down-arrow"></div></div>
                      </div>
                    </div>
                    <div className="end-cap right" >
                      <div className="instructions">
                        <div className="animate-left"><div className="down-arrow"></div></div>
                      </div>
                    </div>
                  </div>
            
          </div>
        );
  }
