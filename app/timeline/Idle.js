import { motion } from 'framer-motion';

export default function Idle(props) {
    return (
        <div id="idle-block" className={(props.idleMode) ? "active" : "inactive"}>
            <motion.div initial="hidden" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10 }}

variants={{
  hidden: {
    scale: .8,
    opacity: 1,
    x: "0px",
    y: "1250px"

  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: .4
    }
  },
}}><div>{props.configData.idleText}</div>
        </motion.div>
        </div>
  );
}
