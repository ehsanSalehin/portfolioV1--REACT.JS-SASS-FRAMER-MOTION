import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import './Project2.scss';

const Project2 = () => {
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
  const projectName = "E-commerce Pet Shop Website";
  const projectImages = ["../../public/pet/1.png", "../../public/pet/9.png", "../../public/pet/10.png", "../../public/pet/4.png"];
  const projectDescription = "I developed an E-commerce Pet Shop Website with order management features using .NET Core MVC, MySQL, and Bootstrap, significantly improving UI/UX design by 40%.";
  const technologies = ["C#", ".NET Core MVC", "MySQL", "Bootstrap"];
  const githubLink = "https://github.com/ehsanSalehin/.NET-Core-MVC-Full-Stack-Pet-Shop-Website---Bootstrap-MySQL--ASP.NET--";

  return (
    <div className="project2">
      <div className="stars" ></div>
      <motion.div 
        className="project" 
        ref={containerRef}
        onMouseMove={handleMouseMove}
      >
        <motion.div 
          className="glass-box2"
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

export default Project2;