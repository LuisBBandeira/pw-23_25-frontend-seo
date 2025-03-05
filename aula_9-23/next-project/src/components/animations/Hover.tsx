'use client'

import {motion} from "framer-motion"


export default function HoverBasica() {
    return (
       <motion.button
            whilehover = {{ scale: 1.2}}
            whileTap = {{ salce: 0.1}}
            className ="bg-green-500 text-white px-6 py-2 rounded-lg">
            Clica-me!!
       </motion.button>
    )
}