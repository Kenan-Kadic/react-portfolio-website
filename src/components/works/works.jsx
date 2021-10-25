import "./works.scss";

export default function Works() {
    const data = [

        {
            id: 1,
            icon: "./assets/phone.png",
            title: "Testing 1",
            desc: "Lorem ipsum dolor sit, amet consectetur.",    
            img: "assets/coming.png"
        
        },
        {
            id: 2,
            icon: "./assets/phone.png",
            title: "Testing 2",
            desc: "Lorem ipsum dolor sit, amet consectetur.",    
            img: "assets/coming.png"
        
        },
        {
            id: 3,
            icon: "./assets/phone.png",
            title: "Testing 3",
            desc: "Lorem ipsum dolor sit, amet consectetur.",    
            img: "assets/coming.png"
        },
    ];


    return (
        <div className="works" id="works">
            <div className="slider">
                {data.map((d) => (
                <div className="container">
                    <div className="item">
                    <div className="left">
                        <div className="leftContainer">
                            <div className="imgContainer">
                                <img src={d.icon} alt="" />
                            </div>
                            <h2>{d.title}</h2>
                            <p>
                                {d.desc} 
                            </p>
                            <span>Projects</span>
                        </div>
                    </div>
                    <div className="right">
                    
                        <img src="https://cdn.dribbble.com/users/8648/screenshots/5824634/jeffsum.png?compress=1&resize=400x300" alt="" />
                    </div>
                </div>
                ))
                </div> }
                            
            </div> 
            
            <img src="assets/arrow.png" className="arrow left" alt="" />
            <img src="assets/arrow.png" className="arrow right" alt="" />
        </div>
    );
}
