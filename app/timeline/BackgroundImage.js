'use client'
import Image from "next/image";
import bgimage from "/public/JAPI_ID_HISTORIA_FONDO_PANTALLA.png";

export default function BackgroundImage  (props) {
    const alttext = 'background graphic';
    return(
        <img src="/JAPI_ID_HISTORIA_FONDO_PANTALLA.png"
            alt={alttext}
            id="printed-png-object"
            className=""
            width={props.configData.printedGraphicWidth}
            
            />	
    );

}