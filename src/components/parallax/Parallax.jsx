import { motion, useScroll, useTransform } from "framer-motion"
import "./parallax.scss"
import { useRef } from "react"


const Parallax = ({ type }) => {

  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["start start", "end start"]
  })

  const yText = useTransform(scrollYProgress, [0,1], ["0%", "500%"])
  const yBg = useTransform(scrollYProgress, [0,1], ["0%", "100%"])

  return (
    <div className="parallax" ref={ref} style={{
      background:
        type === "services"
          ? "linear-gradient(180deg, #111132, #0c0c1d)"
          : type === "portfolio"
          ? "linear-gradient(180deg, #111132, #505064)"
          : "linear-gradient(180deg, #111132, #61617a)" }}>
      <motion.h1 style={{y: yText}}>{type === "services" ? "What Do I Do ?" : type === "portfolio" ? "My Latest Works !" : "My Career !"}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets" style={{
        backgroundImage: `url(${type === "services" ? "/planets.png" : type === "portfolio" ? "/sun.png" : "/moon.png"})`,
        y:yBg
      }}></motion.div>
      <motion.div style={{x: yBg}} className="stars"></motion.div>
    </div>
  )
}

export default Parallax