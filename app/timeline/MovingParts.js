'use client'
import styles from './SlidingDisplay.css';
import MovingBackground from './MovingBackground.js';
import Centuries from './Centuries.js';
import Episodes from './Episodes.js';
import Idle from './Idle.js';
import {updateNumber} from './utils.js'
import  { useState, useEffect } from 'react';

export default  function MovingParts (props){
  //const sliderPosition = await  SliderPosition();
  const [sliderPosition, setSliderPosition] = useState(0);
  const [idleMode,setIdleMode] = useState(false)
  const units = 60; // 1 for testing, 60 for production
  useEffect(() => {
    const idleInterval = setInterval(() => {
        setIdleMode(true);
        }, 1000 * units * Number(props.configData.idleTime)); // seconds for testing, minutes for production


        return () => clearInterval(idleInterval);
    }, [idleMode]);
    function onMessage (event) {
        if ( event !== undefined ) {
            //console.log("sliderPosition", event);
            if ( ! isNaN(event.data)) {
            setSliderPosition(Number(event.data));
            setIdleMode(false);
            }
        }
    }
    useEffect(() => {
      //console.log("setting up for useEffect");
    window.addEventListener("message", onMessage);
   
  }, []);
  const configData = props.configData;    
  const timeline = props.timeline;    

  return (
        <div className="main-slider-frame">
            <MovingBackground configData={configData} displayPosition={sliderPosition}/>
            <Centuries  configData={configData} displayPosition={sliderPosition} timeline={timeline}/>
            <Episodes  configData={configData} displayPosition={sliderPosition} timeline={timeline} />
            {/* <PhidgetSlider /> **/}
            {/* <FauxPhidgetSlider  /> */}
            <Idle configData={configData} idleMode={idleMode}/>

        </div>
  )}