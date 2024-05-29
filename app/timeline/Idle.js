import { motion } from 'framer-motion';

export default function Idle(props) {
    return (
        <div id="idle-block" className={(props.idleMode) ? "active" : "inactive"} >
          <div style={{left:"0px", top:"1122px", width:"80%", position:"absolute"}}>
            <motion.div initial="start" animate={{ rotate: 359, scale: 0.5 }} transition={{ repeat: Infinity, duration: 10 }}

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
}}><div><div className="instructions" style={{color:"white", width:"100%"}}>
<div className="exhibit-title">HISTORIA</div>
<div className="instruction-text">Desliza la pantalla lentamente para descubrir la historia de Jalisco.</div>
</div></div>
        </motion.div>
        </div>
        </div>
  );
}
