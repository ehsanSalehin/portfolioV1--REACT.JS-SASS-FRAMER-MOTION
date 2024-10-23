import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import './Project5.scss';

const Project5 = () => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const starsRef = useRef(null);

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  useEffect(() => {
    const stars = starsRef.current;
    const moveStars = () => {
      const y = window.scrollY;
      stars.style.transform = `translateY(${y * 0.5}px)`;
    };
    window.addEventListener('scroll', moveStars);
    return () => window.removeEventListener('scroll', moveStars);
  }, []);

  // Project details
  const projectName = "Blog App";
  const projectImages = ["../../public/blog/2.png", "../../public/blog/5.png", "../../public/blog/3.png", "../../public/blog/4.png"];
  const projectDescription = "I developed a Full-Stack blog application with essential features.";
  const technologies = ["React.js", "Node.js", "Express.js", "MongoDB","REST API","MVC"];
  const githubLink = "https://github.com/ehsanSalehin/Full-Stack-Blog-MERN-Stack-REST-API";

  return (
    <div className="project5">
      <div className="stars" ref={starsRef}></div>
      <motion.div 
        className="project" 
        ref={containerRef}
        onMouseMove={handleMouseMove}
      >
        <motion.div 
          className="glass-box5"
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        >
          <h2>{projectName}</h2>
          <div className="image-carousel">
            {projectImages.map((img, index) => (
              <img key={index} src={img} alt={`Project ${index + 1}`} />
            ))}
          </div>
          <div className="description">
            <p>{projectDescription}</p>
          </div>
          <div className="tech-stack">
            {technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Project5;