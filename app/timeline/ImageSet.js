import Image from "next/image"
import ImageCaption from './ImageCaption.js';

export default  function ImageSet( props ) {
    function build_divs(imageList) {
        for (image in imageList) {

        }
    }
    let setKeyIndex = 0;

    return (
        <div className='image-set'>
            { 
            props.imageList.map((image) => {
        //console.log("Episodes",event);
        setKeyIndex += 1;
        if (image.alt === undefined) {
            image.alt = "foo" + (setKeyIndex+100);
        }
        return(<div className='captioned-image' key={image.alt + setKeyIndex}>
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
