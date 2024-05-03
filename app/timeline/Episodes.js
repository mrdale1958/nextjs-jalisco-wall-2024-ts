'use client'
// import CenturyMarker from './CenturyMarker.js';
//import GuideGrid from './GuideGrid.js';
//import { Timeline, Config } from '@/app/lib/data';
import Episode from './Episode.js';


export default  function  Episodes (props) {
  //const sliderPosition = await  SliderPosition();
  const configData = props.configData;    
  const timeline = props.timeline;    
  const displayPosition = props.displayPosition;    
  
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
    function sortEventsByYear(timeline) {
      let sortedByYear = timeline.sort((a,b) => (a.start > b.start) ? 1 : -1);
	    /* let uniqueExtendedYears = new Set();
	    for (var event of sortedByYear) {
		    if (event.Type === 'Info' )
       { uniqueExtendedYears.add(event.start);}
      }
      
      let yearCount = uniqueExtendedYears.size; */
      return([sortedByYear, 0]);
    }
   

    function buildRawDivs(timeline) {
      

      const timelineDiv = [];
      for (var event in  timeline) {
        let eventData = timeline[event];
        //console.log("Episodes",eventData);
        function getRange () { 
          return ( { left: fractionToPixels(eventData.start), right: fractionToPixels(eventData.end)})
        }
        eventData.getRange = getRange;
        event.position = fractionToPixels(eventData.start);

        timelineDiv.push(<Episode key={event.position} eventData={eventData} displayPosition={displayPosition} configData={configData} mode="full"/>);
    }
  }

      //let [sortedData] = sortEventsByYear(timeline) ;  
// need to use yearCount for distribution? something else
      //let divs = buildRawDivs(timeline); //this.buildDivs(sortedData, this.props.sliderPosition);
     
        return (
            <div id='timeline-block' style={{left: 
              String(
                Math.max(-configData.availableClicks + props.configData.offset_right, 
                  Math.min(configData.offset_left, props.configData.offset_left-props.displayPosition))) + "px"}}>
            {
            timeline.map((event) => {
        //console.log("Episodes",event.eventNumber, event);
                if (event.eventNumber !== undefined && event.Type === 'Info'){
                  return(<Episode key={"epidoseN"+event.eventNumber} displayPosition={displayPosition} eventData={event} configData={configData}/>)
              }})
            }
            {/* <GuideGrid configData={this.props.configData} /> */}
            </div>
        );
  }


