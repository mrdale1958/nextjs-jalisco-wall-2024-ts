'use client'
import DOMPurify from 'isomorphic-dompurify';
import Image from "next/image"
import ImageSet from './ImageSet.js';

export default function FullScript(props) {
   
    if (props.displayPosition < (props.left_edge - props.configData.episodePitch) || props.displayPosition > (props.right_edge + props.configData.episodePitch)) {  
      return (
        <div className={props.className + " " /*+ categoryToClassname(eventData['Type'])*/}/>

      );
    }
    let eventBody;
    if (props.eventData['Acontecimiento'] !== "") {
      eventBody = <div className='event-body' ><div className="event-text-container"><p className="event-text" //</div>>{props.eventData['Acontecimiento']}</p></div></div>
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.eventData['Acontecimiento'])}} /> </div></div>
    }
    let firstImage;
    let imageSetData = [{}];
    let currentImageIndex = 0;
    
    
    imageSetData[0].src = props.eventData['LocalImagen1']
    imageSetData[0].caption = props.eventData['Pie de imagen1']
    imageSetData[0].alt = props.eventData['LocalImagen1']
    if (props.eventData['LocalImagen2'] != "") {
        imageSetData[1] = {};

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
        if (props.eventData.LocalImagen1 === undefined) {
          console.log("Primary Image error", props.eventData.LocalImagen1);
      }
        //firstImage = <img src={"/0_Imágenes/" + props.eventData.LocalImagen1 }
        //alt={props.eventData['Pie de imagen1']}
        //className="dark:invert first-image"
        
        //width="200" height="200"
      ///>	
      }
      const valley = { width: props.configData.screenWidth-props.configData.episodePitch,
                      left: props.left_edge + props.configData.episodePitch - 400,
                      right: props.left_edge + props.configData.screenWidth - 400};
      if (props.displayPosition <   valley.left) {
        currentImageIndex = imageSetData.length - 1;
        //if (props.eventData['Año'] === '1600') console.log(props.displayPosition, props.eventData['Año'], "left", currentImageIndex, props.left_edge, valley.left, valley.right);

      } else if (props.displayPosition > valley.right) {
        currentImageIndex = 0;
        //if (props.eventData['Año'] === '1925') console.log(props.displayPosition, props.eventData['Año'], "right", currentImageIndex, props.left_edge, valley.left, valley.right);

      } else {
        let slotWidth = valley.width/(imageSetData.length-1);
        //let slotWidth = props.configData.screenWidth/imageSetData.length;
        let relativePosition = (Number(props.displayPosition) - props.left_edge -  props.configData.episodePitch/2);
        //if (props.eventData['Año'] === '1600') console.log(props.displayPosition, props.eventData['Año'], slotWidth, valley.left, valley.right, relativePosition);
        for (var imageIndex in imageSetData) {
          let image =  Number(imageIndex);
          let imageSlot = { 
            left: slotWidth * image , 
            right: slotWidth * (image + 1)
          };
          if (relativePosition  > imageSlot.left && relativePosition < imageSlot.right) {
            currentImageIndex = imageSetData.length - 1 - image;
            //if (props.eventData['Año'] === '1600') console.log(props.displayPosition, props.eventData['Año'], "currentImage", currentImageIndex, slotWidth, imageSlot.left, imageSlot.right, relativePosition);
          } 
          //console.log("ImageSet", slotWidth, imageIndex, imageSlot, relativePosition, currentImageIndex);
            /* if (imageSetData[image].src === undefined) {
            imageSetData[image].src = ""; */
        }
      }
      return (
          <div className={props.className + " " /*+ categoryToClassname(eventData['Type'])*/}>
            <div className='event-date' >{props.eventData['Año'] /* + " -- pos: "+ Number(props.displayPosition)  + " relative pos:"+ relativePosition */} </div>
            <div className="event-block-header">
              <span className='event-subject' >{props.eventData['Subject']}</span>

            </div>
            {eventBody}
            <div className='event-images'>
            {firstImage}
      {(imageSetData && (imageSetData[0] != {})) ? <ImageSet currentImageIndex={currentImageIndex} imageList={imageSetData}/> : null} 
            </div> 
            </div>
      );
  }

