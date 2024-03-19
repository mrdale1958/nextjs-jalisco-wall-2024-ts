'use client'
import { useState, useEffect } from "react";



export default function  PhidgetSlider({configData, id, positionCallback}) {
       // (phidget22, setPhidget22) = useState(window.phidget22);
       useEffect(() => {
        if (typeof window !== "undefined") {
            const phidget22 = window.phidget22;
            const [color,setColor] = useState( "red");
            const [conn,setConn] = useState(  phidget22.Connection(8089, 'localhost'));
            const [encoder, setEncoder] = useState(phidget22.Encoder());
            }
      }, []);
            const [currentPosition, setCurrentPosition] = useState(0)
        const [lastPosition, setLastPosition] = useState(0)
        // this.buildPhidgetConnection = this.buildPhidgetConnection.bind(this);
        // this.processPositionChange = this.processPositionChange.bind(this);
        // this.clockedPositionChangeNotifier = this.clockedPositionChangeNotifier.bind(this);

    useEffect(() => {
        //console.log(this.state, this.state.conn, this.state.encoder);
        conn.connect().then(buildPhidgetConnection)
		.catch(error=>console.log(error));;
        setTimeout(clockedPositionChangeNotifier, configData.moveTime);
    });

    function processPositionChange(newPosition) {
        setCurrentPosition(newPosition);
              
    }

    function clockedPositionChangeNotifier() {
        const updateSlider = positionCallback;
        if (lastPosition !== currentPosition)  {
            setLastPosition(currentPosition);
            updateSlider(currentPosition);
        }
        setTimeout(this.clockedPositionChangeNotifier, configData.moveTime);
    }

    function buildPhidgetConnection() {
        var encoder0 = encoder;
        const maxClicks = configData.availableClicks;
        //const theComponent = this;
        encoder0.onPositionChange = function onEncoder0_PositionChange(positionChange, timeChange, indexTriggered) {
            let newX = encoder0.getPosition();
            ////console.log('PositionChange: ', positionChange.toString(),newX);
            if (newX < 0) {
                //console.log('0000000000000',newX);
                encoder0.setPosition(0);
                newX=0;
            } else if (newX>maxClicks) {
                //console.log('===============',newX);
                encoder0.setPosition(maxClicks);
                newX=maxClicks;
            }
            //console.log('++++++++++',newX);
            //console.log('----------',newX);
            processPositionChange(newX);
        };
    
        encoder0.onDetach = function(ch) {
            console.log(encoder0 + ' detached');
        };
        encoder0.onError = function(ch) {
            console.log(encoder0 + ' error');
        };
        encoder0.open((openEncoder) => {processPositionChange(openEncoder.getPosition())})
        .catch(function (err) {
            console.log('failed to open the channel:' + err);
        });       
    }
        return (
            <div className="slider" >
                <div id={id}> &nbsp; </div>
            </div>

        );
  }
