import React, { Component } from 'react';
import glBio from '../../pics/GL_Bio.jpg';
import cpBio from '../../pics/ChaltinBio.jpg';
import cgBio from '../../pics/CrystalBio.jpg';
import rzBio from '../../pics/RomieBio.jpg';
import './About.css';

class About extends Component {

    render() {
        return (
            <div id="aboutDiv">
                <h2>About Us </h2>
                <div id="descriptionDiv">
                    <h3> Mission </h3>
                    <p id="mission">
                        New York City is home to over a thousand art galleries, presenting diverse and beautiful art in every imaginable discipline. From the Bronx to Far Rockaway, there are galleries at almost every step, and some hidden treasures that even long-time residents know litte about.
    
                        We created "Art deCode" with the vision that discovering and seeing new and amazing art is only a click away. With an easy to use interface our app allows to search for art galleries by simply typing in your zip code.
                    </p>
                </div>
                <h3> Team </h3>
                <p id="desciption">We are a team of creatives who are passionate about art, connections, and code.</p>

                <div id="bios">
                    <div className="bio">
                        <p id="name">Crystal Grant</p>
                        <img width="200" alt="Bio image 1" src={cgBio} />
                        <p>Software Engineer, Graphic Designer</p>
                    </div>
                    <div className="bio">
                        <p id="name">Guzal Latypova</p>
                        <img width="200" alt="Bio image 2" src={glBio} />
                        <p>Software Engineer, Artist, Curator</p>
                    </div>
                    <div className="bio">
                        <p id="name">Chaltin Pagan</p>
                        <img width="200" alt="Bio image 3" src={cpBio} />
                        <p>Software Engineer, Project-Manager, Artist</p>
                    </div>
                    <div className="bio">
                        <p id="name">Romie Zelaya</p>
                        <img width="200" alt="Bio image 4" src={rzBio} />
                        <p>Software Engineer, Amateur Photographer</p>
                    </div>
                </div>
            </div>

        )
    }
}

export default About;