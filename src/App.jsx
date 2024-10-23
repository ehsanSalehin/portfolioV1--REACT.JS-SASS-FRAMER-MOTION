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


const Qualifications = ({ visible }) => {
  if (!visible) return null;
  return <section id="Qualifications">Resume</section>;
};

const Contact = ({ visible }) => {
  if (!visible) return null;
  return <section id="Contact">Contact</section>;
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

  const getProjectStyle = (projectNumber) => {
    if (projectNumber === 1 || projectNumber === 5) {
      return {
        opacity: 1 - transitionProgress,
        filter: `blur(${transitionProgress * 5}px)`,
      };
    }
    return {};
  };

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
          <div className="project-section" style={getProjectStyle(1)}><Project/></div>
          <div className="project-section"><Project2/></div>
          <div className="project-section"><Project3/></div>
          <div className="project-section"><Project4/></div>
          <div className="project-section" style={getProjectStyle(5)}><Project5/></div>
        </div>
      </section>
      <Qualifications visible={!isProjectsVisible || currentProject === 5} />
      <Contact visible={!isProjectsVisible || currentProject === 5} />
    </div>
  );
}

export default App;
