'use client'

import {motion} from "framer-motion"
    

export default function SpringBasica() {
    return (
        <motion.div 
            initial = {{ scale: 0.5}}
            animate = {{ scale: 1}}
            transition = {{ type: "spring", stiffness: 100, dumping: 10}}
            className ="w-32 h-32 bg-red-500 rounded-lg"
            />
    )
}