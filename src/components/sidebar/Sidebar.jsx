import { useState } from 'react'
import Links from './links/Links'
import './sidebar.scss'
import Toggle from './toggle/Toggle'
import { delay, motion} from 'framer-motion'

const variants ={
    open:{
        clipPath: "circle(1200px at 50px 50px)",
        transition:{
            type:"spring",
            sniffness: 300,
            damping: 30,
        },
    },
    close:{
        clipPath: "circle(20px at 50px 50px)",   
        x: "-100%",         
        transition:{
            type:"spring",
            sniffness: 300,
            damping: 30,
        },
    },
};

const Sidebar =()=>{
const [open, setOpen]=useState(false)

    return(
        <motion.div className='sidebar' animate={open? "open": "close"}>
            <motion.div className="backGround" variants={variants}>
                <Links/>
            </motion.div>
                <Toggle setOpen={setOpen}/>
        </motion.div>
    )
}
export default Sidebar