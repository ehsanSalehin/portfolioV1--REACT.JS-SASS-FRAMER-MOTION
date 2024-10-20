import {motion} from "framer-motion"

const variants = {
    open:{
        transition:{
            staggerChildren:0.1
        },
    },
    close:{
        transition:{
            staggerChildren:0.05,
            staggerDirection: -1,
        },
    },
};

const itemVariants = {
    open:{
        x:0,
        opacity:1,
    },
    close:{
        x:50,
        opacity:0,
    },
};

const Links =()=>{
const items=[            
    "Home",
    "About Me",
    "Projects",
    "Qualifications",
    "Contact",
]
    return(
        <motion.div className="Links" variants={variants}>
            {items.map(item=>(
                <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.5}} whileTap={{scale:0.95}}>{item}</motion.a>
            ))}
        </motion.div>
    )
}

export default Links