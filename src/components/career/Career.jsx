import { motion } from "framer-motion";
import "./career.scss"
import { Chrono } from "react-chrono";

const items = [
  {
  title: "2020",
  cardTitle: "High School Diploma | Physics and Maths major",
  cardSubtitle:"Lycée Classique et Moderne de Garoua | A- Grade",
  media: {
    type: "IMAGE",
    source: {
      url: "/bacc.jpg"
    }
  }
  }, 
  {
    title: "2020-2022",
    cardTitle: "2-year Preparatory classes",
    url: "https://prepavogt.org/",
    cardSubtitle:"Prepavogt | A Grade",
    media: {
      type: "IMAGE",
      source: {
        url: "/prepa.png"
      }
    }
    }, 
    {
      title: "2022-2023",
      cardTitle: "1st year Engineering School",
      url: "https://www.3il-ingenieurs.fr/",
      cardSubtitle:"3iL Ingénieurs | A Grade",
      media: {
        type: "IMAGE",
        source: {
          url: "/3il.jpg"
        }
      }
      }, 
      {
        title: "Aug2023-now",
        cardTitle: "2nd year Engineering School",
        url: "https://www.esiea.fr/",
        cardSubtitle:"ESIEA Paris | A Grade",
        media: {
          type: "IMAGE",
          source: {
            url: "/esiea.png"
          }
        }
        }, 
        {
          title: "Sep2023-now",
          cardTitle: "Software Engineering Apprentice",
          url: "https://personal-finance.bnpparibas/",
          cardSubtitle:"BNP Paribas Personal Finance | Mobile App Squad",
          media: {
            type: "IMAGE",
            source: {
              url: "/bnppf.png"
            }
          }
          }, 

];

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

const Career = () => {
    return (
        <div className="timeline-container hide-scrollbar">
          <div className="career-wrapper hide-scrollbar">
            <Chrono items={items} itemWidth="250" useReadMore="false" mediaHeight="350" mode="HORIZONTAL"
              showAllCardsHorizontal
              cardWidth={450}
              cardHeight={100}
              contentDetailsHeight={100}
              readMore={true}
              classNames={{cardText:"hide-scrollbar", cardMedia:"hide-scrollbar", card:"hide-scrollbar", cardSubtitle:"hide-scrollbar"}}
            />
          </div>
          <div><motion.img src="/scroll.png" alt="Scroller" variants={textVariants} animate="scroll" className="scroll-img"/></div>
  
        </div>
      );
}

export default Career;
