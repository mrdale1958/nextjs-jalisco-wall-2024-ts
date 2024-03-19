import Image from "next/image"
export default function FullScript(eventData) {
   
    //  this.state = {color: "red", timePosition: 0};
    console.log("FullScript", eventData);

    function categoryToClassname(category) {
      let retVal = category.replace(/[ /]/g, "_").toLowerCase();
      //console.log(category,retVal);
      return retVal;
    }      
       let eventBody;
      if (eventData['Acontecimiento'] !== "") {
        eventBody = <div className='event-body' >{eventData['Acontecimiento']}</div>
            //dangerouslySetInnerHTML={{ __html: eventData['Acontecimiento']}} />
      }
      let firstImage;
      if (eventData['Imagen1'] !== "") {
        firstImage = <Image src={eventData.Imagen1}
        alt={eventData['Pie de imagen1']}
        className="dark:invert"
        priority
      />	


      return (
          <div className={eventData.className + " " /*+ categoryToClassname(eventData['Type'])*/}>
            <div className="event-block-header">
              <span className='event-year'>{eventData['Año']}</span>
              <span className='event-location'>{eventData['COUNTRY']}</span>
            </div>
            <div className='event-heading' >{eventData['Año']}
            </div>
            {eventBody}
            {firstImage}
          </div>
      );
  }
}
