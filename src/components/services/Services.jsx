import { motion } from "framer-motion"
import "./services.scss"
import { useState } from "react"


const variants = {
    "initial": {
        x: -300,
        opacity: 0,
        y: 100
    },
    "animate": {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
}

const items = [
    {
        id: 1,
        category: "Back-end Development",
        images: [
            {
                id: 1,
                img: "/java.png",
                alt: "Java",
            },
            {
                id: 2,
                img: "/spring.png",
                alt: "Spring Framework"
            },
            {
                id: 3,
                img: "/node.png",
                alt: "NodeJS"
            },
            {
                id: 4,
                img: "/python.png",
                alt: "Python"
            },
        ]

    },
    {
        id: 2,
        category: "Front-end Development",
        images: [
            {
                id: 1,
                img: "/react.png",
                alt: "ReactJS",
            },
            {
                id: 2,
                img: "/flutter.png",
                alt: "Flutter Framework"
            },
            {
                id: 3,
                img: "/typescript.png",
                alt: "Typescript"
            },
            {
                id: 4,
                img: "/angular.png",
                alt: "AngularJS"
            },
        ]

    },
    {
        id: 3,
        category: "Computer Graphics",
        images: [
            {
                id: 1,
                img: "/inkscape.png",
                alt: "Inkscape",
            },
            {
                id: 2,
                img: "/illustrator.png",
                alt: "Adobe Illustrator"
            },
            {
                id: 3,
                img: "/filmora.png",
                alt: "Wondershare Filmora"
            },
            {
                id: 4,
                img: "/figma.png",
                alt: "Figma"
            },
        ]

    },
    {
        id: 4,
        category: "Misc",
        images: [
            {
                id: 1,
                img: "/c.png",
                alt: "C",
            },
            {
                id: 2,
                img: "/git.png",
                alt: "Git"
            },
            {
                id: 3,
                img: "/ruby.png",
                alt: "Ruby"
            },
            {
                id: 4,
                img: "/docker.png",
                alt: "Docker"
            },
        ]

    },
    
    
]

const Box = ({item}) => {

    return (
        <motion.div className="box" whileHover={{ background: 'lightgray', color: "black" }} key={item.id}>
            <h2>{item.category}</h2>
            <div className="imageContainer">
                {item && item?.images.map(it => <BoxImage image={it} />)}
                {/* <button>Go !</button>  */}
            </div>
        </motion.div>
    )
}

const BoxImage = ({image}) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseOver = () => {
        setHovered(true);
      };
    
      const handleMouseOut = () => {
        setHovered(false);
      };
      return (
        <div key={image.alt} className="singleImageContainer">
        <img src={image.img} alt={image.alt} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
        {hovered && <div className="hoverMessage">{image.alt}</div>}
        </div>
      )
}

const Services = () => {
    return (
        <motion.div className="services" variants={variants} initial='initial' whileInView='animate'>
            <motion.div className="textContainer" variants={variants} initial='initial' whileInView='animate'>
                <p>I focus on helping your brand grow
                    <br /> and move forward
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants} initial='initial' whileInView='animate'>
                <div className="title">
                    <img src="/people.webp" alt="People" />
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>Implementing</motion.b> Ideas
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.
                    </h1>
                    <button>WHAT ARE MY TOOLS ?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants} initial='initial' whileInView='animate'>
                    {items?.map(item => <Box item={item} />)}
            </motion.div>
        </motion.div>
    )
}

export default Services