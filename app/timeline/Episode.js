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
  //const episodeRange = props.eventData.getRange();
  const fractionToPixels = (fraction) => {
    return (fraction * props.configData.maxClicks)
  }
  const episodeRange ={ left: fractionToPixels(props.eventData.start), right: fractionToPixels(props.eventData.end)}
  let mudd = props.eventData.Type;
      let magicDiv;
      let classList = "event-block " + props.eventData.Type;

    /*  if (props.displayPosition < episodeRange.left || props.displayPosition > episodeRange.right ) {
        return(        <div className='episode' key={props.eventData.eventNumber} 
        id={"episode" +  props.eventData.eventNumber}
        style={{left: props.eventData.start * props.configData.availableClicks,
          zIndex: 2}}>
          {"&nbsp;"}
          
        </div>
);
      } */

      if (mudd == "Era") {
        // modalDiv = <Dot eventData = {this.props}/>
         magicDiv = <FullScript id = {props.eventData.eventNumber} 
                                className = "event-era" 
                                eventData = {props.eventData} 
                                displayPosition={props.displayPosition} 
                                config={props.config}/>
 
       } else if (mudd == "Info") {
        let mode = "none";
        let currentScreenPosition = props.eventData.position - props.displayPosition + props.configData.screenWidth/2;
        if ( currentScreenPosition >= props.configData.leftEdge) {
            if (currentScreenPosition > props.configData.yearTrigger) {
                //if (currentScreenPosition > this.props.configData.labelTrigger) {
                    if (currentScreenPosition > props.configData.contentTrigger) {
                        if (currentScreenPosition > props.configData.rightEdge - props.configData.contentTrigger) {
                            //if (currentScreenPosition > this.props.configData.rightEdge - this.props.configData.labelTrigger) {
                                if (currentScreenPosition > props.configData.rightEdge - props.configData.yearTrigger) {
                                    if (currentScreenPosition < props.configData.rightEdge ) {
                                        mode = "dot";
                                    }									
                                } else {
                                    mode = "date";
                                }
                            //} else {
                            //    mode = "none";
                            //}
                        } else {
                            mode = "full";
                        }
                    //} else {
                    //    mode = "none";
                    //}				
                } else {
                    mode = "date";
                }
            } else {
                mode = "dot";
            } 
        } 
        let phaseClassName = "event-" + mode
         
         magicDiv = <FullScript id = {props.eventData.eventNumber} className = {"event-info " + phaseClassName} eventData = {props.eventData}
         displayPosition={props.displayPosition} 
         configData={props.configData}/>
 
       } else if (mudd == "Bio") {
         //modalDiv = <FullLabel eventData = {this.props}/>
         magicDiv = <FullScript id = {props.eventData.eventNumber} className = "event-bio" eventData = {props.eventData}
         displayPosition={props.displayPosition} 
         configData={props.configData}/>
 
       } else if (mudd == "full") {
         //modalDiv = <FullScript className = "event-block" eventData = {this.props}/>
         magicDiv = <FullScript id = {props.eventData.eventNumber} className =  {classList} eventData = {props.eventData} 
         displayPosition={props.displayPosition} 
         configData={props.configData}/>
       }  else {
        magicDiv = <div key="wth99">wth: {mudd}</div>
       }
       //debugger;

      return (
        <div className='episode' key={"episode" +  props.eventData.eventNumber} 
        id={"episode" +  props.eventData.eventNumber}
        style={{left: props.eventData.start * props.configData.availableClicks,
          zIndex: 2}}>
          {magicDiv}
          
        </div>
      );
  }

