//import Dot from './Dot.js';
//import DateLabel from './DateLabel.js';
//import FullLabel from './FullLabel.js';
import FullScript from './FullScript.js';
import { Timeline, Config, SliderPosition } from '@/app/lib/data';

export default async function Episode(props) {
  const sliderPosition = await  SliderPosition();
  const configData = await  Config();
  const timeline = await  Timeline();
 /*        this.state = {color: "red", 
                      timePosition: 0,
                      };
  */     //let modalDiv;
      let magicDiv;
      console.log("Episode", props);

     /*  if (props.mode === "dot") {
       // modalDiv = <Dot eventData = {this.props}/>
        magicDiv = <FullScript id = {props.start} className = "event-dot" eventData = {props}/>

      } else if (props.mode === "date") {
        //modalDiv = <DateLabel eventData = {this.props}/>
        magicDiv = <FullScript id = {props.start} className = "event-date" eventData = {props}/>

      } else if (props.mode === "label") {
        //modalDiv = <FullLabel eventData = {this.props}/>
        magicDiv = <FullScript id = {props.start} className = "event-label" eventData = {props}/>

      } else if (props.mode === "full") {
        //modalDiv = <FullScript className = "event-block" eventData = {this.props}/>
        let classList = "event-block " + props.Yalign;
        magicDiv = <FullScript id = {props.start} className =  {classList} eventData = {props}/>

      }  */
        return (
          <div className='Episode'>
            {props}
          </div>
        );
  }

