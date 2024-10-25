import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Answers = ({ active, handleToggle, item, index }) => {
    const contentEl = useRef();
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation()
    
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    return <motion.div ref={ref}
    variants={{
        hidden: { opacity: 0, y: 1 },
        visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    animate={mainControls}
    transition={{ duration: 0.5, delay: 0.35 }} className={`questions ${active === index ? "active" : ""}`} onClick={() => handleToggle(index)}>
            <div className="question">
                <h4>{item.q}</h4>
            </div>
            <div  ref={contentEl} className={`answer ${active === index ? "show": ""}`}
            style={
                active === index
                ? { height: contentEl.current.scrollHeight }
                : { height: "0px" }
            }>
                <p>{item.a}</p>
            </div>
        </motion.div>
    
}
export default Answers;