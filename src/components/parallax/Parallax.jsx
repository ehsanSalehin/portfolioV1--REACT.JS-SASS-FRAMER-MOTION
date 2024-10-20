import { useEffect, useState, useCallback } from "react";
import "./parallax.scss";

const Parallax = ({ type }) => {
  const [offset, setOffset] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleScroll = useCallback(() => {
    setOffset(window.pageYOffset);
  }, []);

  const handleMouseMove = useCallback((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleScroll, handleMouseMove]);

  const getRandomColor = () => {
    const colors = ['#61dafb', '#7dd3fc', '#fbbf24', '#34d399', '#f472b6', '#a78bfa', '#fb923c'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const elements = type === "me" 
    ? [
        { content: 'JavaScript', size: 40, x: '10%', y: '20%', speed: 0.3, rotate: 15 },
        { content: 'SQL', size: 24, x: '70%', y: '60%', speed: -0.2, rotate: -10 },
        { content: 'ASP.Net core', size: 40, x: '25%', y: '55%', speed: 0.1, rotate: 5 },
        { content: 'C#', size: 22, x: '36%', y: '60%', speed: -0.3, rotate: -5 },
        { content: 'React. js', size: 36, x: '70%', y: '30%', speed: 0.2, rotate: 20 },
        { content: 'Node.js', size: 40, x: '60%', y: '80%', speed: -0.1, rotate: -15 },
        { content: 'Python', size: 30, x: '15%', y: '50%', speed: 0.25, rotate: 10 },
        { content: 'TypeScript', size: 26, x: '46%', y: '-10%', speed: 0.25, rotate: 10 },
        { content: 'Docker', size: 26, x: '30%', y: '-5%', speed: 0.25, rotate: 10 },
      ]
    : [
        { content: '<React/>', size: 34, x: '20%', y: '50%', speed: 0.3, rotate: -10 },
        { content: '<div>', size: 30, x: '50%', y: '60%', speed: 0.3, rotate: 15 },
        { content: 'function()', size: 24, x: '70%', y: '100%', speed: -0.2, rotate: -10 },
        { content: '{...}', size: 40, x: '25%', y: '40%', speed: 0.1, rotate: 5 },
        { content: 'const', size: 22, x: '40%', y: '100%', speed: -0.3, rotate: -5 },
        { content: '</>', size: 36, x: '30%', y: '0%', speed: 0.2, rotate: 20 },
        { content: '[]', size: 28, x: '10%', y: '70%', speed: -0.1, rotate: -15 },
        { content: 'import', size: 26, x: '15%', y: '10%', speed: 0.25, rotate: 10 },
        { content: 'Node.js', size: 28, x: '75%', y: '75%', speed: -0.2, rotate: 15 },
        { content: 'MongoDB', size: 30, x: '20%', y: '25%', speed: 0.1, rotate: -5 },
        { content: 'Express', size: 26, x: '85%', y: '15%', speed: -0.3, rotate: 10 },
        { content: 'API', size: 32, x: '45%', y: '25%', speed: 0.2, rotate: -15 },
        { content: 'SQL', size: 24, x: '65%', y: '85%', speed: -0.1, rotate: 5 },
        { content: 'JavaScript', size: 28, x: '10%', y: '55%', speed: 0.25, rotate: -20 },
      ];

  return (
    <div 
      className="parallax" 
      style={{
        background: type === "me" 
          ? "linear-gradient(180deg, #1a1a2e, #16213e)"
          : "linear-gradient(180deg, #0a192f, #112240)"
      }}
    >
      <h1>{type === "me" ? "About Me" : "Featured Projects"}</h1>
      <div className="elements">
        {elements.map((element, index) => (
          <div
            key={index}
            className="element"
            style={{
              fontSize: `${element.size}px`,
              left: element.x,
              top: element.y,
              color: getRandomColor(),
              transform: `
                translateY(${offset * element.speed}px)
                rotate(${element.rotate || 0}deg)
                scale(${1 + (Math.sin(offset * 0.01) * 0.1)})
              `,
              opacity: 0.7 + (Math.cos(offset * 0.01) * 0.3),
            }}
          >
            {element.content}
          </div>
        ))}
      </div>
      <div 
        className="grid" 
        style={{ 
          transform: `
            perspective(500px) 
            rotateX(60deg) 
            translateY(${offset * 0.5}px)
          ` 
        }}
      />
      <div 
        className="glow" 
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
        }}
      />
    </div>
  );
};

export default Parallax;