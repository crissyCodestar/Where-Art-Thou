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
                        <img width="200px" height="200px" alt="Bio 1" src={cgBio} />
                        <div id="info">
                            <p id="name"><strong>Crystal Grant</strong></p>
                            <p>Software Engineer, Graphic Designer</p>
                        </div>
                    </div>
                    <div className="bio">
                        <img width="200px" height="200px" alt="Bio 2" src={glBio} />
                        <div id="info">
                            <p id="name"><strong>Guzal Latypova</strong></p>
                            <p>Software Engineer, Artist, Curator</p>
                        </div>
                    </div>
                    <div className="bio">
                        <img width="200px" height="200px" alt="Bio 3" src={cpBio} />
                        <div id="info">
                            <p id="name"><strong>Chaltin Pagan</strong></p>
                            <p>Software Engineer, Project-Manager, Artist</p>
                        </div>
                    </div>
                    <div className="bio">
                        <img width="200px" height="200px" alt="Bio 4" src={rzBio} />
                        <div id="info">
                            <p id="name"><strong>Romie Zelaya</strong></p>
                            <p>Software Engineer, Amateur Photographer</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default About;