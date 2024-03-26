'use client'
import React from 'react';
//import { Timeline, Config} from '@/app/lib/data';
import styles from './SlidingDisplay.css';
import { Josefin_Sans } from "next/font/google";
import  { useState, useEffect } from 'react';

const brandon = Josefin_Sans({ subsets: ["latin"] });


export default  function Centuries(props) {
  //const sliderPosition = await  SliderPosition();
  const configData = props.config;    
  const timeline = props.timeline;    
  const [sliderPosition, setSliderPosition] = useState(0);
  useEffect(() => {
    const onMessage = (event) => setSliderPosition(event,data);

    window.addEventListener('message', onMessage)

   
  }, [])
  // this.state = {color: "red"};
  return (
          <div id="centuries-block" className= {brandon.classname}>
          <div className="century prehistory"><div className="century-label">Mundo Prehispánico</div></div>
          <div className="century sixteenth"><div className="century-label">Siglo XVI</div></div>
          <div className="century seventeenth"><div className="century-label">Siglo XVII</div></div>
          <div className="century eighteenth"><div className="century-label">Siglo XVII</div></div>
          <div className="century nineteenth"><div className="century-label">Siglo XIX</div></div>
          <div className="century twentieth"><div className="century-label">Siglo XX</div></div>

        </div>
        );
  }
