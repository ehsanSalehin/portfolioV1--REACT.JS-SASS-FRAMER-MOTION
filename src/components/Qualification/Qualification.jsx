import { title } from "framer-motion/client";
import "./qualification.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import { useRef } from "react";

const item = [
    {
        id:1,
        title:"Education",
        img:"",
        des:"",
    },
    {
        id:2,
        title:"Work Experience",
        img:"",
        des:"",
    },
    {
        id:3,
        title:"Licenses",
        img:"",
        des:"",
    },    {
        id:4,
        title:"Contact Info",
        img:"",
        des:"",
    },

]


const Single =({item})=>{
    
    const ref = useRef();

    const {scrollYProgress}=useScroll({
        target: ref,
        //offset: ["start start", "end end"]
    });
    const y = useTransform(scrollYProgress,[0,1],[-300, 300]);
    return(
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imgContainer" ref={ref}>
                        <img src={item.img} alt=""/>   
                    </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.des}</p>
                </motion.div>
                </div>
            </div>
        </section>
    )
}

const Qualification =()=>{

    //target => qualification //when we use useScroll we need a targetand for target we use useRef
    const ref = useRef();
    // first our prigress bar is 100% and then 0% => end end and then start start
    const{scrollYProgress} = useScroll({target: ref, offset:["end end", "start start"]})

    const scaleX=useSpring(scrollYProgress,{
        stiffness:100,
        damping: 30,
    })

    return(
        <div className="qualification" ref={ref}>
            <div className="progress">
                <h1>Qualifications</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>
            {item.map(items=>(
                <Single item={items} key={item.id}/>
            ))}
                  <div className="madeBy"><p>Developed  With <span>&#128151;</span> By Ehsan</p></div>

        </div>
    )
}
export default Qualification