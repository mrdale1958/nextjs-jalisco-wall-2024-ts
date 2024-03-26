'use client'
// import CenturyMarker from './CenturyMarker.js';
//import GuideGrid from './GuideGrid.js';
import { Timeline, Config } from '@/app/lib/data';
import Episode from './Episode.js';
import  { useState, useEffect } from 'react';


export default async function  Episodes () {
  //const sliderPosition = await  SliderPosition();
  const configData = await  Config();
  const timeline = await  Timeline();
  [sliderPosition, setSliderPosition] = useState(0);
  useEffect(() => {
    const onMessage = (event) => setSliderPosition(event,data);

    window.addEventListener('message', onMessage)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])
  const dummyEvent = {
    Type: 'Info',
    eventNumber: '41',
    start: '1',
    end: '99',
    'Año': '2023 Jalisco celebra 200 años como Estado libre y soberano',
    Acontecimiento: 'En 1823, Jalisco se destacó como el primer estado independiente, optando por la República y el federalismo. Desde entonces, la esencia de Jalisco como estado libre y soberano se basa en los principios de libertad, autonomía e independencia.',
    Imagen1: 'https://drive.google.com/file/d/1UdBoUmbw_5Yu5m2gT0p7igXx_9KUoo3Y/view?usp=drive_link',
    'Pie de imagen1': 'Vista panorámica del centro de Guadalajara.',
    Imagen2: '',
    'Pie de imagen2': '',
    Imagen3: '',
    'Pie de imagen3': '',
    Imagen4: '',
    'Pie de imagen4': ''
  }
    //  this.state = {color: "red"};
    function sortEventsByYear(database) {
      let sortedByYear = database.sort((a,b) => (a.start > b.start) ? 1 : -1);
	    /* let uniqueExtendedYears = new Set();
	    for (var event of sortedByYear) {
		    if (event.Type === 'Info' )
       { uniqueExtendedYears.add(event.start);}
      }
      
      let yearCount = uniqueExtendedYears.size; */
      return([sortedByYear, 0]);
    }
   
    function buildDivs(database, position) {
      const timelineDiv = [];
      let lastYear = 0;
      let currentYear = [];
      for (var event in  database) {
        let eventData = database[event];
        if ( String(lastYear).slice(0,2) !== String(eventData.YEAR).slice(0,2)) {
          // timelineDiv.push(<CenturyMarker 
          //         key = {String(eventData.YEAR).slice(0,2) + '00' } 
          //         id = {String(eventData.YEAR).slice(0,2) + '00' }
          //         position = {Number(eventData.TickPosInInches) * this.props.configData.clickDensity} />);
//parseInt(yearToPosition(this.props.eventData.YEAR).slice(0,-2)) - 5 + "px"}
          //lastYear = eventData.YEAR;
        }

        /*  pass 1 - last year is 0; enqueue current event
            pass 2 - last year is 1590; render previous queue; enqueue current event
        */
        if ( lastYear !== eventData.EXTENDED_YEAR) {
          if ( currentYear.length === 0 ) { // first time through 
            currentYear = [ eventData ];
          } else {
            let event0 = currentYear[0];
            let position = Number(event0.TickPosInInches) * configData.clickDensity;
            let currentScreenPosition = position - sliderPosition + configData.screenWidth/2;
            if ( (currentScreenPosition >= configData.leftEdge ) &&
                 (currentScreenPosition < configData.rightEdge ))
            {
              timelineDiv.push(<Year 
                              key = {lastYear} 
                              id = {lastYear} 
                              position = {position} 
                              yearsEvents = { currentYear }
                              sliderPosition = {sliderPosition}
                              configData = {configData}/>);
            }
            currentYear = [ eventData ];
          }
        } else {
          currentYear.push(eventData);
        }
        //debugger;
        lastYear = eventData.EXTENDED_YEAR;

        
      }
      return( timelineDiv );
    }

    function buildRawDivs(database) {
      const timelineDiv = [];
      for (var event in  database) {
        let eventData = database[event];
        //console.log("Episodes",eventData);

        timelineDiv.push(<Episode eventData={eventData} displayPosition={sliderPosition} config={configData} mode="full"/>);
    }
  }

      //let [sortedData] = sortEventsByYear(timeline) ;  
// need to use yearCount for distribution? something else
      //let divs = buildRawDivs(timeline); //this.buildDivs(sortedData, this.props.sliderPosition);
     
        return (
            <div id='timeline-block'>
            {
            timeline.map((event) => {
        //console.log("Episodes",event);
              
                return(<Episode key={event.Number} eventData={event} config={configData}/>)
              })
            }
            {/* <GuideGrid configData={this.props.configData} /> */}
            </div>
        );
  }


