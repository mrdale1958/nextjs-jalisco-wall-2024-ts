//import Dot from './Dot.js';
//import DateLabel from './DateLabel.js';
//import FullLabel from './FullLabel.js';
import FullScript from './FullScript.js';

export default async function Episode(eventData ) {
  
 /*        this.state = {color: "red", 
                      timePosition: 0,
                      };
  */     //let modalDiv;
  //console.log("mudd", eventData.mode);
  let mudd = "full";
      let magicDiv;
      if (mudd === "dot") {
        // modalDiv = <Dot eventData = {this.props}/>
         magicDiv = <FullScript id = {eventData.eventNumber} className = "event-dot" eventData = {eventData}/>
 
       } else if (mudd === "date") {
         //modalDiv = <DateLabel eventData = {this.props}/>
         magicDiv = <FullScript id = {eventData.eventNumber} className = "event-date" eventData = {eventData}/>
 
       } else if (mudd === "label") {
         //modalDiv = <FullLabel eventData = {this.props}/>
         magicDiv = <FullScript id = {eventData.eventNumber} className = "event-label" eventData = {preventDataops}/>
 
       } else if (mudd === "full") {
         //modalDiv = <FullScript className = "event-block" eventData = {this.props}/>
         let classList = "event-block " + eventData.Yalign;
         magicDiv = <FullScript id = {eventData.eventNumber} className =  {classList} eventData = {eventData}/>
 
       }  else {
        magicDiv = <div>wth: {mudd}</div>
       }
      return (
        <div className='episode' key={eventData.eventNumber}>
          {magicDiv}
        </div>
      );
  }

