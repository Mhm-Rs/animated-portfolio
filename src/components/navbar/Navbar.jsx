import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"

const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >Mhm_Rs</motion.span>
                <div className="social">
                    <a href="https://github.com/Mhm-Rs"><img src="/github.png" alt="github" /></a>
                    <a href="https://linkedin.com/in/rais-mohaman"><img src="/linkedin.png" alt="linkedin" /></a>
                    <a href="https://www.youtube.com/channel/UCrdgiCFtOPlbaR882MSLJzQ"><img src="/youtube.png" alt="youtube" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar