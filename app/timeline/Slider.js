'use client'
import { useState, useEffect } from "react";

export default Slider = () => {
    function init() {
    const [sliderPosition, setSliderPosition] = useState(0);
    useEffect(() => {
        function onMessage (event) {
            if ( event !== undefined ) {
                console.log("sliderPosition", event);
                setSliderPosition(event.data);
            }
        }
    }, []);
    console.log("setting up for useEffect");
    window.addEventListener("message", onMessage);
}
    function getSliderPosition() {
        return sliderPosition;
    }
    return null;
}