'use client'
import styles from './SlidingDisplay.css';
import BackgroundImage from './BackgroundImage.js';

export default  function MovingBackground (props){
  //const sliderPosition = await  SliderPosition();
  
  const configData = props.configData;    
        //this.state = {color: "red"};
  const sizesFix = "(min-width: " + configData.printedGraphicWidth + ") 100vw"

  let acceleratedPosition = configData.printedGraphicScaleX * props.displayPosition;
    return (
      <div id="background-slider" className="" style={{left: 
              String(
                Math.max(configData.availableClicks, 
                  Math.min(configData.printedGraphicOffset, -acceleratedPosition + configData.printedGraphicOffset))) + "px"}}>
      {/* <object id="printed-svg-object" data="Timeline 11 ARTscreen versiondm.svg" type="image/svg+xml"> 
        <img src="background.jpg" />
      </object>	 */}
      <BackgroundImage configData={configData} />
    </div>
    );
}

