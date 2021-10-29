import "./aboutMe.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Kenan Kadic",
      title: "Before Coding",
      img: "assets/slu.png",
       desc:
        `I was an English professor with a Masters Degree in English Literature, and I taught at Saint Louis University.
         I also worked remotely for 6 years handling rental payments for Enterprise-Rent-A-Car.`,
    },
    {
      id: 2,
      name: "Kenan Kadic",
      title: "During LaunchCode",
      img: "assets/launchcode.png",
      desc:
        "In January 2020, I studied LC101, a course on Web Development. Five months later I graduated, and then joined the LiftOff course. I finished that course in October 2020 and made my LC Cornerstone project.",
      featured: true,
    },
    {
      id: 3,
      name: "Kenan Kadic",
      title: "After LaunchCode",
      img: "assets/react.png",
      desc:
        "I worked to improve my skills by studying about Javascript and Web Development on Udemy and I taught myself how to work in React. I created codewithkenan.com using React to host my portfolio.",
    },
  ];
  return (
    <div className="aboutMe" id="aboutMe">
      <h1>About Me</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <div className="right" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
