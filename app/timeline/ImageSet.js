import Image from "next/image"
import ImageCaption from './ImageCaption.js';

export default  function ImageSet( props ) {
    function build_divs(imageList) {
        for (image in imageList) {

        }
    }
    return (
        <div className='image-set'>
            {
            props.imageList.map((image) => {
        //console.log("Episodes",event);
              
                return(<div className='captioned-image' key={image.alt}>
                    <img src={"/0_Imágenes/" + image.src}
                        alt={image.alt}
                        className="dark:invert"
                        width="200" height="200"
                    />
                    <ImageCaption caption={image.caption}/>
                    </div>
              )
            }
            )
        }

        </div>
    );
}
