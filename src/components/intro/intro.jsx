import "../../global.scss";
import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef();

    useEffect(()=> {
        init(textRef.current, {
          showCursor: true,
          backDelay: 1500,
          backSpeed: 60,
          strings: ["React", "JavaScript", "Java", "TypeScript", "HTML", "CSS", "Sass"],
        });
    }, [])


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
              <h3>A Developer with <span ref={textRef}></span></h3>
            </div>
            <a href="#portfolio">
              <img src="assets/down.png" alt="" />
            </a>
        </div>
        </div>
    )
}
