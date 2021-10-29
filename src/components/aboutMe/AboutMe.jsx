import "./aboutMe.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Kenan Kadic",
      title: "Before Coding",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc:
        `I was an English professor with a Masters Degree in English Literature.
         I also worked remotely for 6 years handling rental payments for Enterprise-Rent-A-Car.`,
    },
    {
      id: 2,
      name: "Kenan Kadic",
      title: "During LaunchCode",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc:
        "In January 2020, I studied LC101, which introduced me to Web Development. Five months later I graduated, and then joined the LiftOff course. I finished that course in October and made my LC CornerStone project.",
      featured: true,
    },
    {
      id: 3,
      name: "Kenan Kadic",
      title: "After LaunchCode",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "I worked to improve my knowldge by studying courses on Udemy and I taught myself how to work in React. I created CodewithKenan.com as a website to host my portfolio.",
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
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
