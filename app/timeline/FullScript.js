'use client'
import Image from "next/image"
import ImageSet from './ImageSet.js';

export default function FullScript(props) {
   
    //  this.state = {color: "red", timePosition: 0};
    //console.log("FullScript", props.eventData);
//debugger;
    function categoryToClassname(category) {
      let retVal = category.replace(/[ /]/g, "_").toLowerCase();
      //console.log(category,retVal);
      return retVal;
    }      
    
    let eventBody;
    if (props.eventData['Acontecimiento'] !== "") {
      eventBody = <div className='event-body' >{props.eventData['Acontecimiento']}</div>
          //dangerouslySetInnerHTML={{ __html: eventData['Acontecimiento']}} />
    }
    let firstImage = null;
    let imageSetData = null;
    if (props.eventData['LocalImagen2'] != "") {
        imageSetData = [{}, {}];
        imageSetData[0].src = props.eventData['LocalImagen1']
        imageSetData[0].caption = props.eventData['Pie de imagen1']
        imageSetData[0].alt = props.eventData['LocalImagen1']
        imageSetData[1].src = props.eventData['LocalImagen2']
        imageSetData[1].caption = props.eventData['Pie de imagen2']
        imageSetData[1].alt = props.eventData['LocalImagen2']
        if (props.eventData['LocalImagen3'] != "") {
          imageSetData[2] = {};
          imageSetData[2].src = props.eventData['LocalImagen3']
          imageSetData[2].caption = props.eventData['Pie de imagen3']
          imageSetData[2].alt = props.eventData['LocalImagen3']
        }
        if (props.eventData['LocalImagen4'] != "") {
          imageSetData[3] = {};
          imageSetData[3].src = props.eventData['LocalImagen4']
          imageSetData[3].caption = props.eventData['Pie de imagen4']
          imageSetData[3].alt = props.eventData['LocalImagen4']
        }
      } else if (props.eventData['LocalImagen1'] != "") {
        //console.log("image name", props.eventData['LocalImagen1'])
        firstImage = <Image src={"/0_Imágenes/" + props.eventData.LocalImagen1 }
        alt={props.eventData['Pie de imagen1']}
        className="dark:invert"
        priority
        width="200" height="200"
      />	
      }


      return (
          <div className={props.className + " " /*+ categoryToClassname(eventData['Type'])*/}>
            <div className="event-block-header">
              <span className='event-year'>{props.eventData['Año']}</span>
              <span className='event-location'>{props.eventData['COUNTRY']}</span>
            </div>
            <div className='event-heading' >{props.eventData['Año']}
            </div>
            {eventBody}
            {firstImage}
            {(imageSetData && (imageSetData[0] != {})) ? <ImageSet imageList={imageSetData}/> : null}
            </div>
      );
  }

