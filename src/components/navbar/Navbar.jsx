import {motion} from 'framer-motion'
import "./navbar.scss"
import Sidebar from '../sidebar/Sidebar'

const Navbar =()=>{

    return(
        <div className="navbar">
            {/*sidebar*/}
            <div className="wrapper">

                {/*  Ehsan Salehin animation  */}
                <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                >
                {[].map((word, index) => (
                    <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.5,
                        delay: index * 0.4,
                        ease: [0.25, 0.1, 0.25, 1],
                    }}
                    style={{ display: "inline-block", marginRight: "0.3em" }}
                    >
                    {word}
                    </motion.span>
                ))}
                </motion.h1> 


        <div className="social">
        {[
          { href: "https://www.linkedin.com/in/ehsansalehin/", src: "/icons8-linkedin-100 (2).png", alt: "LinkedIn" },
          { href: "https://github.com/ehsanSalehin", src: "/icons8-github-100.png", alt: "GitHub" }
        ].map((icon, index) => (
          <motion.a
            key={index}
            href={icon.href}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              duration: 0.3,
              delay: 0.1
            }}
          >
            <motion.img 
              src={icon.src} 
              alt={icon.alt}
              whileHover={{ filter: 'brightness(1.2)' }}
            />
          </motion.a>
        ))}
      </div>


            </div>
            <Sidebar/>
        </div>
    )
}

export default Navbar