import React from 'react'
import './projects.css'
const Projects = () => {
  return (
    <div id="portfolio">
    <div class="container">
        <h1 class="subtitle">My Work</h1>
        <div class="work-list">
            <div class="work">
                <img src="./project1.png" alt="" />
                <div class="layer">
                    <h3>QUIZS App</h3>
                    <p>The app connects you to the talented people around the world.
                        Download it from play store
                    </p>
                    <a href="./QUIZ-APP/index.html"><i class="fa-solid fa-link"></i></a>
                </div>
            </div>
            <div class="work">
                <img src="./project2.png" alt="" />
                <div class="layer">
                    <h3>CLOCK App</h3>
                    <p>The app connects you to the talented people around the world.
                        Download it from play store
                    </p>
                    <a href="./mybuild1/index.html"><i class="fa-solid fa-link"></i></a>
                </div>
            </div>
            <div class="work" >
                <img src="./project3.png" alt="" />
                <div class="layer">
                    <h3>Food ordering App</h3>
                    <p>The app connects you to the talented people around the world.
                        Download it from play store
                    </p>
                    <a href="./MY_cook/index.html"><i class="fa-solid fa-link"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Projects
