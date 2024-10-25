import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const HowWorksCards = ({ item, index }) => {
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
    transition={{ duration: 0.5, delay: 0.35 }}  className="card">
        <div className="image">
            <img src={item.img} alt="" />
        </div>
        <h3>{item.title}</h3>
    </motion.div>
}