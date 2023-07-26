import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="About-container">
      
        <h2 className="Skills-heading">SKILL</h2>


        <h2 className="para">Let's do some Magic!</h2> 
    
      <div className="logos">
        <div className="skilldiv">
          <img src="./html.png" alt="" className="logo" />
        </div>
        <div className="skilldiv">
          <img src="./Css.png" alt="" className="logo" />
        </div>

        <div className="skilldiv">
        <img src="./javaScript.png" alt="" className="logo" />
        </div>

        <div className="skilldiv">
        <img src="./React.png" alt="" className="logo" />
        </div>

        <div className="skilldiv">

        <img src="./Bootstrap.jpg" alt="" className="logo" />
        </div>

        <div className="skilldiv">
        <img src="./Mongodb.jpg" alt="" className="logo" />

        </div>

        <div className="skilldiv">
        <img src="./Tailwind.jpg" alt="" className="logo" />
        </div>

        <div className="skilldiv">
        <img src="./Java.png" alt="" className="logo" />

        </div>

        <div className="skilldiv">
        <img src="./React+vite.jpg" alt="" className="logo" />
        </div>
      </div>

      <div className="skills">
        <div className="name">
          <p>HTML</p>
          <div className="Percentage">
            <div className="skills-List" id="html"></div>
            <p>90%</p>
          </div>
        </div>

        <div className="name">
          <p>CSS</p>
          <div className="Percentage">
            <div className="skills-List" id="Css"></div>
            <p>80%</p>
          </div>
        </div>

        <div className="name">
          <p>JavaScript</p>
          <div className="Percentage">
            <div className="skills-List" id="JavaScript"></div>
            <p>60%</p>
          </div>
        </div>

        <div className="name">
          <p>React</p>
          <div className="Percentage">
            <div className="skills-List" id="React"></div>
            <p>50%</p>
          </div>
        </div>

        <div className="name">
          <p>Java</p>
          <div className="Percentage">
            <div className="skills-List" id="Java"></div>
            <p>85%</p>
          </div>
        </div>

        <div className="name">
          <p>C</p>
          <div className="Percentage">
            <div className="skills-List" id="C"></div>
            <p>95%</p>
          </div>
        </div>

        <div className="name">
          <p>C++</p>
          <div className="Percentage">
            <div className="skills-List" id="C1"></div>
            <p>85%</p>
          </div>
        </div>

        <div className="name">
          <p>SQL</p>
          <div className="Percentage">
            <div className="skills-List" id="SQL"></div>
            <p>40%</p>
          </div>
        </div>
        {/* <div className="Percentage">
        <p>HTML</p>
        <div className="skills-List"id="css">Css</div>
        <p>85%</p>


       </div>

       <div className="Percentage">
        <p>HTML</p>
        <div className="skills-List" id="javaScript">JavaScript</div>
        <p>55%</p>
       </div>

       <div className="Percentage">
        <p>HTML</p>
        <div className="skills-List" id="React">React</div>
        <p>60%</p>
       </div>


       <div className="Percentage">
        <p>HTML</p>
        <div className="skills-List" id="java">Java</div>
        <p>90%</p>
       </div>

       <div className="Percentage">
        <p>HTML</p>
      <div className="skills-List" id="c">C</div>
        <p>90%</p>
       </div>

       <div className="Percentage">
       <div className="skills-List" id="C++">C++</div>
        <p>90%</p>
       </div> */}
        {/* 
       
       
        <div className="skills-List" id="Python">Python</div>
        <p>60%</p>
        <div className="skills-List" id="SQL">MySQL</div>
        <p>40%</p> */}
      </div>

      <hr />

      <h1>MY JOURNEY</h1>
      <div className="Journey-container">
      <div className="education-container">
        <div className="education">
          <h1>Education</h1>
          <div className="Education-list">
            <p className="pass-year"> 2021-2021</p>
            <h3>C,C++,JAVA</h3>
            <p className="education-description">From Ducat institute</p>
          </div>

          <div className="Education-list">
            <p className="pass-year">2021-Current</p>
            <h3>Graducation</h3>
            <p className="education-description">
              Bachelor of Computer Application <br /> From DPG School of
              Technology And <br />
              Management (Gurgaon,haryana)
            </p>
          </div>

          <div className="Education-list">
            <p className="pass-year">2018-2020</p>
            <h3>Intermediate</h3>
            <p className="education-description">
              Associate of Science From 'GOVT. Inter College
              Gumti(Almore),Uttarakhand'
            </p>
          </div>
        </div>

        <div className="education">
          <h1>Certificate</h1>
          <div className="Certificate-list">
            <h3>2020-2021</h3>
            <p>Certificate of C,C++ & JAVA</p>
          </div>
          <div className="Certificate-list">
            <h3>2020-2021</h3>
            <p>Certificate of C,C++ & JAVA</p>
          </div>
          <div className="Certificate-list">
          <h3>2020-2021</h3>
            <p>Certificate of C,C++ & JAVA</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
