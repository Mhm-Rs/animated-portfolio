import { motion } from "framer-motion"
import "./hero.scss"

const textVariants = {
    initial: {
        x:-500,
        opacity:0
    },
    animate: {
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1
        }
    },
    scroll:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
}

const sliderVariants = {
    initial: {
        x:0,
    },
    animate: {
        x:"-600%",
        transition:{
            duration:20,
            repeat:Infinity,
            repeatType:"mirror",

        }
    },

}

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>RAÏS MOHAMAN</motion.h2>
                    <motion.h1 variants={textVariants}>Software Engineer</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.a variants={textVariants} href="#Portfolio">See my latest works !</motion.a>
                        <motion.a variants={textVariants} href="#Contact">Contact Me </motion.a>
                    </motion.div>
                    <motion.img src="/scroll.png" alt="Scroller" variants={textVariants} animate="scroll"/>
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Java, Python and Javascript Developer
            </motion.div>
            <div className="imageContainer">
                <img src="/me3.jpg" alt="Photo" />
            </div>
        </div>
    )
}

export default Hero