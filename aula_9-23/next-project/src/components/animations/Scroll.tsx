"use client"

import { motion } from "framer-motion";
import {useInView} from "framer-motion";
import {useRef} from "react";

export default function ScrollAnimation() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <div className="h-96"></div>
            <motion.div
            ref={ref}
            initial={{opacity:0, y:50 }}
            animate={isInView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.8}}
            className="w-64 h-64 bg-purple-500 text-white flex items-center justify-center rounded-lg"
            >
                Hello
            </motion.div>
            <div className="h-96"></div>
        </div>
    )
}