import { motion } from 'framer-motion';

export default function Idle(props) {
  if ( props.idleMode ) {
    return (
      <div id="idle-block" className={(props.idleMode) ? "active" : "inactive"} >
        <div className="idle-image">
          <img src={"/Historia_Screensaver.png"}
                        alt={"exhhibit description"}
                        className=""
                        
                    />
        </div>
        <div id="idle-text">
          {/* <motion.div initial="start" animate={{ rotate: 359, scale: 0.5 }} transition={{ repeat: Infinity, duration: 10 }}
            variants={{
              start: {
                scale: 1.0,
                rotate: 0
              },
              visible: {
                scale: 1,
                rotate: 360,
                transition: {
                  delay: .4
                }
              },
            }}> */}
            <div>
              <div className="instructions" style={{color:"black", width:"100%"}}>
                <div className="exhibit-title">{props.configData.exhibitTitle}</div>
                <div className="exhibit-description">{props.configData.exhibitDescription}</div>
                <div className="instruction-text">{props.configData.idleText}</div>
              </div>
            </div>
{/*           </motion.div>
 */}        </div>
      </div>
    );
  } else {
    return(
      <div id="idle-block" className={(props.idleMode) ? "active" : "inactive"} />
    )
  }
}
