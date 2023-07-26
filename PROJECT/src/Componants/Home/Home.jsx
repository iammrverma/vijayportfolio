import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const vk = () => {
    var typed = new Typed("#element", {
      strings: [
        "Web developer",
        "Software Developer",
        "Graphical Designer",
        "Java Developer",
      ],
      typeSpeed: 50,
    });
  };
  return (
    <div className="container2">
      <div className="left-home">
        <div className="about-home">
          <h1>Hi,I'm Vijay Kumar</h1>
          <h5>Web designer and developer </h5>
<div className="home-i"><i class="fa-solid fa-file"></i><h5>Web Designer & Developer</h5></div>
<div className="home-i"> <i class="fa-solid fa-envelope"></i><h5>vijayweb18@gmail.com</h5></div>
<div className="home-i">  <i class="fa-solid fa-location-dot"></i> <h5>Uttarakhand ,india 263665</h5></div>
          
          
        
        </div>
        <div className="about-home">
          <h2>Download my curriculum vitae:</h2>
        <button>
          <a href="./Vijay new resume 2.pdf" download>
            <i className="fa-solid fa-download fa-beat-fade"></i>Download RESUME
          </a>
          
        </button>
       
        </div>
      </div>
      <div className="right-home">

      <img src="./profie.png" alt="" className=" active"  />
      </div>
      
      {/* <div
        className="About-Container"
        onClick={() => {
          "/aboutus";
        }}
      >
        <div className="bio"> 
          {/* <div className="">
          <h1>Hello, I Am <span>Vijay kumar</span></h1>
          <h1>I Am <span id="element"></span></h1>
          
          </div>
          <div className="">
          <img src="./Bg2.png" alt="" />
          </div> 
        </div>

        <button>
          <a href="./Vijay new resume 2.pdf" download>
            <i className="fa-solid fa-download fa-beat-fade"></i>Download RESUME
          </a>
        </button>
        <div className="hire-me">
          <p className="hire">
            Welcome to my Website, 
          </p>

           <span><i className="fa-solid fa-phone fa-bounce">contact me</i></span> 
        </div>

        <div className="contect-right">
          <p>
            <i className="fa-sharp fa-solid fa-envelope"></i>{" "}
            Vk6379183@gmail.com
          </p>
          <p>
            <i className="fa-solid fa-phone"></i>7055169266
          </p>
          <div className="social-icons">
            <a href="">
              <i className="fa-brands fa-facebook fa-beat-fade"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-square-instagram fa-beat-fade"></i>
            </a>
            <a href="https://www.linkedin.com/in/vijay-kumar-9453ba247 ">
              <i className="fa-brands fa-linkedin fa-beat-fade"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-square-twitter fa-beat-fade"></i>
            </a>
            <a href="https://github.com/Vijaykumar7055 ">
              <i className="fa-brands fa-github fa-beat-fade"></i>
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
