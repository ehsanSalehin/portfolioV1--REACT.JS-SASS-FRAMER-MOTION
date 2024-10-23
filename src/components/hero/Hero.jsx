import "./hero.scss"

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <div className="textContainer">
                    <h2>Ehsan Salehin</h2>
                    <h1>Full-Stack Web Developer</h1>
                    {/*.......<div className="buttons">
                        
                    <a href="#about-me">
                        <button>About Me</button>
                    </a>
                        <button>View Featured Projects</button>
                    </div> */}
                    <img src="./icons8-mouse-64.png" alt="scroll" />
                </div>
            </div>
            <div className="slidingText">
                <div className="slidingTextInner">
                    Delivering end-to-end web solutions | Innovative full stack development for modern challenges Delivering end-to-end web solutions | Innovative full stack development for modern challenges
                </div>
            </div>
        </div>
    );
};

export default Hero