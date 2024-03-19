import Image from "next/image"
export default function FullScript(props) {
   
    //  this.state = {color: "red", timePosition: 0};
    console.log("FullScript", props);

    function categoryToClassname(category) {
      let retVal = category.replace(/[ /]/g, "_").toLowerCase();
      //console.log(category,retVal);
      return retVal;
    }      
       let eventBody;
      if (props['Acontecimiento'] !== "") {
        eventBody = <div className='event-body' 
            dangerouslySetInnerHTML={{ __html: props['Acontecimiento']}} />
      }
      let firstImage;
      if (props['Imagen1'] !== "") {
        firstImage = <Image src={props.Imagen1}
        alt={props['Pie de imagen1']}
        className="dark:invert"
        priority
      />	


      return (
          <div className={props.className + " " + categoryToClassname(this.props['CATEGORY'])}>
            <div className="event-block-header">
              <span className='event-year'>{props['Año']}</span>
              <span className='event-location'>{props['COUNTRY']}</span>
            </div>
            <div className='event-heading' 
              dangerouslySetInnerHTML={{ __html: props['EVENT']}}>
            </div>
            {eventBody}
            {firstImage}
          </div>
      );
  }
}
