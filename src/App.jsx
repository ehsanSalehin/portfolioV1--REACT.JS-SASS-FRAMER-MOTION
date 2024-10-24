import { useEffect, useRef, useState } from 'react';
import './App.scss';
import AboutMe from './components/AboutMe/AboutMe';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';
import Project from './components/project/Project';
import Project2 from './components/project/Project2';
import Project3 from './components/project/Project3';
import Project4 from './components/project/Project4';
import Project5 from './components/project/Project5';
import Qualification from './components/Qualification/Qualification'


const Qualifications = ({ visible }) => {
  if (!visible) return null;
  return <section id="Qualifications"><Qualification/></section>;
};


function App() {
  const projectsRef = useRef(null);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);
  const [isEnteringProjects, setIsEnteringProjects] = useState(false);
  const [currentProject, setCurrentProject] = useState(1);
  const [transitionProgress, setTransitionProgress] = useState(0);
  const [progressWidth, setProgressWidth] = useState(100);


  useEffect(() => {
    const projectsSection = projectsRef.current;
    if (!projectsSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isProjectsVisible) {
          setIsEnteringProjects(true);
          setTimeout(() => {
            setIsProjectsVisible(true);
            setIsEnteringProjects(false);
            document.body.style.overflow = 'hidden';
          }, 100);
        } else if (!entry.isIntersecting && isProjectsVisible) {
          setIsProjectsVisible(false);
          document.body.style.overflow = '';
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(projectsSection);

    let accumulatedDelta = 0;
    const threshold = 100; 

    const handleWheel = (e) => {
      if (isEnteringProjects) {
        e.preventDefault();
        return;
      }

      if (!isProjectsVisible) return;

      const isAtStart = projectsSection.scrollLeft === 0;
      const isAtEnd = projectsSection.scrollLeft + projectsSection.clientWidth >= projectsSection.scrollWidth - 1;

      if ((isAtStart && e.deltaY < 0) || (isAtEnd && e.deltaY > 0)) {
        e.preventDefault();
        accumulatedDelta += Math.abs(e.deltaY);
        const progress = Math.min(accumulatedDelta / threshold, 1);
        setTransitionProgress(progress);

        if (progress >= 1) {
          setIsProjectsVisible(false);
          document.body.style.overflow = '';
          accumulatedDelta = 0;
          setTransitionProgress(0);
          
          if (isAtStart && e.deltaY < 0) {
            document.getElementById('Projects').scrollIntoView({ behavior: 'smooth' });
          } else if (isAtEnd && e.deltaY > 0) {
            document.getElementById('Qualifications').scrollIntoView({ behavior: 'smooth' });
          }
        }
        return;
      }

      accumulatedDelta = 0;
      setTransitionProgress(0);

      e.preventDefault();
      projectsSection.scrollLeft += e.deltaY;

      // Update progress bar
      const scrollProgress = projectsSection.scrollLeft / (projectsSection.scrollWidth - projectsSection.clientWidth);
      setProgressWidth(100 - (scrollProgress * 100));

      const projectWidth = projectsSection.scrollWidth / 5;
      const newCurrentProject = Math.floor(projectsSection.scrollLeft / projectWidth) + 1;
      setCurrentProject(newCurrentProject);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      observer.unobserve(projectsSection);
      window.removeEventListener('wheel', handleWheel);
      document.body.style.overflow = '';
    };
  }, [isProjectsVisible, isEnteringProjects]);


  return (
    <div className={`app-container ${isProjectsVisible ? 'no-snap' : ''}`}>
      {isProjectsVisible && (
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progressWidth}%` }}></div>
        </div>
      )}
      <section id="Home">
        <Navbar/>
        
        <Hero/>
      </section>
      <section id="About Me"><Parallax type="me"/></section>
      <section><AboutMe/></section>
      <section id="Projects"><Parallax type="projects"/></section>
      <section className="projects-container" ref={projectsRef}>
        <div className="horizontal-scroll-container">
          <div className="project-section" ><Project/></div>
          <div className="project-section" ><Project2/></div>
          <div className="project-section"><Project3/></div>
          <div className="project-section"><Project4/></div>
          <div className="project-section" ><Project5/></div>
        </div>
        <div className="scroll-text line line1">
    {"console.log('Hello, World!'); console.log('This is a test message.'); console.log('JavaScript is fun!');" +
    " alert('Welcome to my portfolio!'); const sum = (a, b) => a + b; console.log(`Sum: ${sum(5, 10)}`);" +
    " for (let i = 0; i < 3; i++) { console.log(`Iteration ${i}`); }" +
    " document.querySelector('body').style.back " +
    "console.log('Hello, World!'); console.log('This is a test message.'); console.log('JavaScript is fun!');" +
    " alert('Welcome to my portfolio!'); const sum = (a, b) => a + b; console.log(`Sum: ${sum(5, 10)}`);" +
    " for (let i = 0; i < 3; i++) { console.log(`Iteration ${i}`); }" +
    " document.querySelector('body').style.back "}
</div>
<div className="scroll-text line line2">
    {"def greet(name): return f'Hello, {name}'; def farewell(name): return f'Goodbye, {name}'; print(greet('Alice'));" +
    " numbers = [1, 2, 3, 4, 5]; squares = [x**2 for x in numbers]; print(squares);" +
    " import math; print(math.pi); def factorial(n): return 1 if n == 0 else n * factorial(n-1);" +
    " with open('file.txt', 'w') " +
    "def greet(name): return f'Hello, {name}'; def farewell(name): return f'Goodbye, {name}'; print(greet('Alice'));" +
    " numbers = [1, 2, 3, 4, 5]; squares = [x**2 for x in numbers]; print(squares);" +
    " import math; print(math.pi); def factorial(n): return 1 if n == 0 else n * factorial(n-1);" +
    " with open('file.txt', 'w') "}
</div>
<div className="scroll-text line line3">
    {"<link rel='stylesheet' href='styles.css'> <script src='app.js'></script> <meta charset='UTF-8'>" +
    " <div class='container'><p>This is a paragraph.</p></div>" +
    " <button onclick='alert(\"Button clicked!\")'>Click Me</button>" +
    " <input type='text' placeholder='Enter your name struct Point { int x, y; }; Point" +
    "<link rel='stylesheet' href='styles.css'> <script src='app.js'></script> <meta charset='UTF-8'>" +
    " <div class='container'><p>This is a paragraph.</p></div>" +
    " <button onclick='alert(\"Button clicked!\")'>Click Me</button>" +
    " <input type='text' placeholder='Enter your name struct Point { int x, y; }; Point"}
</div>
<div className="scroll-text line line4">
    {"class Car: def __init__(self, make, model): self.make = make; self.model = model; def drive(self): print(f'Driving {self.make} {self.model}');" +
    " interface Vehicle { void start(); void stop(); } class Bike implements Vehicle { public void start() { System.out.println(\"Bike started\"); } public void stop() " +
    "class Car: def __init__(self, make, model): self.make = make; self.model = model; def drive(self): print(f'Driving {self.make} {self.model}');" +
    " interface Vehicle { void start(); void stop(); } class Bike implements Vehicle { public void start() { System.out.println(\"Bike started\"); } public void stop() "}
</div>
<div className="scroll-text line line5">
    {"if __name__ == '__main__': main(); print('Program started'); for i in range(5): print(i);" +
    " try: x = int(input(\"Enter a number: \")); except ValueError: print(\"That's not a number!\");" +
    " const fs = require('fs'); fs.readFile('file.txt', 'utf8', (err, data) => { if (err) throw err; console.log(data); });" +
    " async function" +
    "if __name__ == '__main__': main(); print('Program started'); for i in range(5): print(i);" +
    " try: x = int(input(\"Enter a number: \")); except ValueError: print(\"That's not a number!\");" +
    " const fs = require('fs'); fs.readFile('file.txt', 'utf8', (err, data) => { if (err) throw err; console.log(data); });" +
    " async function"}
</div>
<div className="scroll-text line line6">
    {"import React from 'react'; import { useState } from 'react'; const App = () => <h1>Hello React</h1>;" +
    " useEffect(() => { document.title = \"New Title\"; }, []);" +
    " const [count, setCount] = useState(0); return (<button onClick={() => setCount(count + 1)}>{count}</button>);" +
    " export default function My" + 
	"import React from 'react'; import { useState } from 'react'; const App = () => <h1>Hello React</h1>;" + 
	" useEffect(() => { document.title = \"New Title\"; }, []);" + 
	" const [count, setCount] = useState(0); return (<button onClick={() => setCount(count + 1)}>{count}</button>);" + 
	" export default function My"}
</div>
      </section>
      <Qualifications visible={!isProjectsVisible || currentProject === 5} />

    </div>
  );
}

export default App;
