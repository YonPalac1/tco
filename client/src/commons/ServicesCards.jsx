import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const ServicesCards = ({ item, delay }) => {
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
        transition={{ duration: 0.5, delay: delay }} className="card">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
    </motion.div>
}