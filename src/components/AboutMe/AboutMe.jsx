import "./aboutme.scss";

const AboutMe = () => {


  return (
    <div className="AboutMe">
      <div className="Photo" >
        <div className="background-animation"></div>
        <img src="./ehsan.png" alt="Ehsan"/>
      </div>
      <div className="back">
        <div className="text">
          <h2>Hi, I'm Ehsan</h2>
          <p>
            I'm a <span className="highlight">Full Stack Developer</span> proficient in both front-end and back-end technologies. With a <span className="highlight">Master's in Computer Engineering</span>, I specialize in crafting innovative web solutions.
          </p>
          <p>
            As a fast-learning and ever-curious developer, I create efficient, user-friendly web applications. I combine technical expertise with creative design, always ready to tackle new challenges and bring innovative digital ideas to life.
          </p>
          <p>
          My approach involves continuously learning and adopting modern web technologies and industry best practices. This ensures I deliver efficient, innovative solutions that meet and exceed client expectations.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe