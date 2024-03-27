'use client'
import styles from './SlidingDisplay.css';
import MovingBackground from './MovingBackground.js';
import Centuries from './Centuries.js';
import Episodes from './Episodes.js';

import  { useState, useEffect } from 'react';

export default  function MovingParts (props){
  //const sliderPosition = await  SliderPosition();
  const [sliderPosition, setSliderPosition] = useState(0);
  useEffect(() => {
    const onMessage = (event) => {
        setSliderPosition(event.data);
        console.log("sliderPosition", event.data);
    }
    const eListener = window.addEventListener('message', onMessage);
    console.log("eListener", eListener);
    return (eListener);

    //return () => {
   //   window.removeEventListener('resize', onResize)
   // }
  }, []);
  const configData = props.configData;    
  const timeline = props.timeline;    

  return (
        <div className="">
            <MovingBackground configData={configData} displayPosition={sliderPosition}/>
            <Centuries  configData={configData} displayPosition={sliderPosition}/>
            <Episodes  configData={configData} displayPosition={sliderPosition} timeline={timeline} />
            {/* <PhidgetSlider /> **/}
            {/* <FauxPhidgetSlider  /> */}

        </div>
  )}