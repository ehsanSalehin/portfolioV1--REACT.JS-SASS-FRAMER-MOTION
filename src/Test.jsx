import {motion} from 'framer-motion'
import './App.scss'

const Test =()=>{
const variants={
    visible:{
        opacity: 1,
        x: 100,
        transition:{staggerChildren: 0.5},
        //transition:{delay: i*0.3}
    },
    hidden: {opacity: 0},
};

const items = ["item1","item2","item3","item4"]
    return(
        <div className="course">
            <motion.div className="box"  initial={{opacity:0, scale:0.5}} animate={{opacity: 5}}transition={{duration:5}} whileHover={{opacity:1}} drag></motion.div>
            <motion.ul initial="hidden" animate="visible" variants={variants}>
            {items.map((item)=>(
                <motion.li variants={variants} key={item}>
                    {item}
                </motion.li>
            ))}
  
            </motion.ul>
        </div>
    )
}



export default Test