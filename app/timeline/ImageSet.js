import Image from "next/image"
import ImageCaption from './ImageCaption.js';
import CrossfadeImage from "react-crossfade-image";

export default  function ImageSet( props ) {
    function build_divs(imageList) {
        for (var image in imageList) {

        }
    }
    let setKeyIndex = 0;
    let imageCount = props.imageList.length;
    //console.log("ImageSet", props.imageList, imageCount, props.currentImageIndex);

    return (
        <div className='image-set'>
            { 

            props.imageList.map((image) => {
                //console.log("Episodes",event);
                if (image.src === undefined) {
                    //console.log("ImageSet error", image);
                    return (<></>)
                }
                if (image.alt === undefined) {
                    image.alt = "foo" + (setKeyIndex+100);
                }
                let displayState = "off";
                if (setKeyIndex === Number(props.currentImageIndex)) {
                    displayState = "on";
                }
                setKeyIndex += 1;

                //console.log("ImageSet", image.src, image.alt, displayState, setKeyIndex);
                return(<div className={"captioned-image " + displayState} key={image.alt + setKeyIndex}>
                    <CrossfadeImage src={"/0_Imágenes/" + image.src}
                        alt={image.alt}
                        className=""
                        duration={600}
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
