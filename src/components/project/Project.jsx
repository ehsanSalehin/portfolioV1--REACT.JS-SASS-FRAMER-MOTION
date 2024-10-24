import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import './Project.scss';

const Project = () => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };


  // Project details
  const projectName = "Realtime Responsive Chat App";
  const projectImages = ["../../public/chat/1.png", "../../public/chat/2.png", "../../public/chat/3.png", "../../public/chat/4.png"];
  const projectDescription = "I improved message delivery speed by 50% using Socket.io and implemented an MVC architecture with Tailwind CSS while ensuring robust state management and security with Zustand, cookie-parser, CORS, and bcrypt.";
  const technologies = ["React.js", "Node.js", "MongoDB","Socket.io","REST API","MVC","Tailwind"];
  const githubLink = "https://github.com/ehsanSalehin/Realtime-Responsive-Chat-App-MERN-Full-Stack--Tailwind--Socket.io";

  return (
    <div className="project1">
      <div className="stars"></div>
      <motion.div 
        className="project" 
        ref={containerRef}
        onMouseMove={handleMouseMove}
      >
        <motion.div 
          className="glass-box1"
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

      <img className="mouse" src="./21.png" alt="scroll" />

    </div>
  );
};

export default Project;