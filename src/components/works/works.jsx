import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Code with Kenan",
      desc:
        "CodewithKenan.com is a React portfolio website that was created by using Javascript, HTML, CSS, SASS.",
      img:
        "./assets/codewithkenan.png",
    },
    {
      id: "2",
      icon: "./assets/mobile.png",
      title: "Flagship Phone Research",
      desc:
        "Flagship Phone Reserach is a website that was made using Java, Spring Boot, HTML, CSS and Thymeleaf.",
      img:
      "./assets/flagship.png",
    },
    {
      id: "3",
      icon: "./assets/mobile.png",
      title: "Collab Blog",
      desc:
        "Collab Blog is a place where LaunchCoders can blog about their experiences experiences and share their advice in tech while also contributing to building the platform that will house these blogs.",
      img:
        "./assets/blog.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                 
                </div>
              </div>
              <div className="right">
              <img src={d.img} 
                    alt=""/>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}