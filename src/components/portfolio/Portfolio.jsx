import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "ECommerce App",
    img: "/ecommerce.png",
    desc:"A web application allowing users to purchase articles through a responsive and stylish interface. Made with Angular, NodeJS+Express and MySQL.",
    demo:"https://youtu.be/-1KMY1JbW4g"
  },
  {
    id: 2,
    title: "Zelda-Like Game",
    img: "/pygame.png",
    desc: "2D Zelda-style Action-RPG game made with Python using the pygame library. The player can move on every direction on the map, attack enemies, cast spells and upgrade their skills. All animated !",
    demo:"https://www.youtube.com/watch?v=n0JWx9gM_hs"
  },
  {
    id: 3,
    title: "ChatGPT Clone App",
    img: "/chatgpt.png",
    desc: "A clone of the famous virtual assistant ChatGPT of OpenAI. It is able to perform tasks by AI, including answering questions entered by the user, translating text as well as generate images with AI. Made with React.",
    demo:"https://www.youtube.com/watch?v=ZB3mnN4W0_I"
  },
  {
    id: 4,
    title: "ConnectMe Game",
    img: "/connectme.png",
    desc:"A game in which the player moves squares to solve puzzles. The player can choose a game difficulty, or make their own level through our integrated level editor. Made with Java using the Slick2D Library.",
    demo:"https://www.youtube.com/watch?v=pP55hYiyWuQ"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.demo}>See Demo</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;