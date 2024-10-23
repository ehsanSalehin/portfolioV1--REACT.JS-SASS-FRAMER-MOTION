import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import './Project3.scss';

const Project3 = () => {
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
  const projectName = "Movie Web Application + Admin Dashboard";
  const projectImages = ["../../public/movie/6.png", "../../public/movie/4.png", "../../public/movie/7.png", "../../public/movie/8.png"];
  const projectDescription = "I developed a Movie Web Application with an Admin Dashboard using the MERN stack, I implemented a caching strategy with Axios and Express, which successfully reduced API response times by 40%. I also utilized MongoDB for efficient data management and enhanced security with jsonwebtoken, crypto-js, and Firebase for storage.";
  const technologies = ["React.js", "Node.js", "Express.js", "MongoDB","REST API","MVC","SASS","Firebase"];
  const githubLink = "https://github.com/ehsanSalehin/Full-Stack-Movie-Website--MERN-Stack-SCSS---Client";

  return (
    <div className="project3">
      <div className="stars" ref={starsRef}></div>
      <motion.div 
        className="project" 
        ref={containerRef}
        onMouseMove={handleMouseMove}
      >
        <motion.div 
          className="glass-box3"
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

export default Project3;