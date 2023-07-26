import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="class-container">
      <h4 className="contact-header-title">Let's Meet</h4>
\

      <div className="Conact-module">
      <div className="contact-right">
       <h1>Vijay Kumar</h1>
        <h5>Web designer and devloper</h5>

        <p>I Am Available for freelance work.Connect with me via call in to my account</p>

        <div className="Details-me">
            <i className="fa-sharp fa-solid fa-envelope"></i>
            <p>Vijayweb18@gmail.com </p>
   
        
          <p  className="Details-me"> 
            <i className="fa-solid fa-phone"></i>+917055169266
</p>
</div>
            <div className="find-me">
              <h3>FIND WITH ME</h3>
            </div>
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




      <div className="contact-left">
        <input
          type="text"
          name="Name"
          placeholder="What's your Name"
          required
        />
        <input
          type="email"
          name="Email"
          placeholder="Enter your Email"
          required
        />
        <input
          type="text"
          name="Number"
          placeholder="Enter your Number"
          required
        />
        <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
        <button type="submit" className="btn btn2">
         Send Message
        </button>

        <span id="msg"></span>
      </div>
      </div>
    </div>
  );
};

export default Contact;
