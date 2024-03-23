'use client'
//import Dot from './Dot.js';
//import DateLabel from './DateLabel.js';
//import FullLabel from './FullLabel.js';
import FullScript from './FullScript.js';

export default  function Episode(props ) {
  
 /*        this.state = {color: "red", 
                      timePosition: 0,
                      };
  */     //let modalDiv;
  //console.log("mudd", eventData.eventData.Type);
  let mudd = props.eventData.Type;
      let magicDiv;
      let classList = "event-block " + props.eventData.Type;

      if (mudd == "Era") {
        // modalDiv = <Dot eventData = {this.props}/>
         magicDiv = <FullScript id = {props.eventData.eventNumber} 
                                className = "event-era" 
                                eventData = {props.eventData} 
                                displayPosition={props.displayPosition} 
                                config={props.config}/>
 
       } else if (mudd == "Info") {
         //modalDiv = <DateLabel eventData = {this.props}/>
         magicDiv = <FullScript id = {props.eventData.eventNumber} className = "event-info" eventData = {props.eventData}
         displayPosition={props.displayPosition} 
         config={props.config}/>
 
       } else if (mudd == "Bio") {
         //modalDiv = <FullLabel eventData = {this.props}/>
         magicDiv = <FullScript id = {props.eventData.eventNumber} className = "event-bio" eventData = {props.eventData}
         displayPosition={props.displayPosition} 
         config={props.config}/>
 
       } else if (mudd == "full") {
         //modalDiv = <FullScript className = "event-block" eventData = {this.props}/>
         magicDiv = <FullScript id = {props.eventData.eventNumber} className =  {classList} eventData = {props.eventData} 
         displayPosition={props.displayPosition} 
         config={props.config}/>
       }  else {
        magicDiv = <div>wth: {mudd}</div>
       }
       //debugger;

      return (
        <div className='episode' key={props.eventData.eventNumber} 
        id={"episode" +  props.eventData.eventNumber}
        style={{left: props.eventData.start * props.config.availableClicks,
          zIndex: 2}}>
          {magicDiv}
          
        </div>
      );
  }

