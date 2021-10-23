import "./intro.scss";

export default function Intro() {
    return (
        <div className="intro" id="intro">
          <div className="left">
            <div className="imageContainer">
              <img src="assets/man.png" alt="" />
            </div>
            </div>
          <div className="right">
            <div className="wrapper">
              <h2>Hi There, I am</h2>
              <h1>Kenan Kadic</h1>
              <h3>Web Developer working with<span></span></h3>
            </div>
            <a href="#portfolio">
              <img src="assets/down.png" alt="" />
            </a>
        </div>
        </div>
    )
}
