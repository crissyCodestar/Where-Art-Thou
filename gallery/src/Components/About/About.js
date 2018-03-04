import React, { Component } from 'react';
import glBio from '../../pics/GL_Bio.jpg';
import cpBio from '../../pics/ChaltinBio.jpg';
import cgBio from '../../pics/CrystalBio.jpg';
import rzBio from '../../pics/RomieBio.jpg';
import './About.css';

class About extends Component{

    render(){
        return(
            <div id="aboutDiv">
                <h2>About Us </h2>
                <h3> Mission </h3>
                    <p id="mission">
                    New York City is home to over a thousand art galleries, presenting diverse and beautiful art in every imaginable discipline. From the Bronx to Far Rockaway, there are galleries at almost every step, and some hidden treasures that even long-time residents know litte about. 

                    We created "Art deCode" with the vision that discovering and seeing new and amazing art is only a click away. With an easy to use interface our app allows to search for art galleries by simply typing in your zip code.
                    </p>

                <h3> Team </h3>
                    <p>We are a team of creatives who are passionate about art, connections, and code.                       
                    </p>

                    <div id="bios">
                        <div class="bio">
                            <img width="200" alt="Bio image 1" src={cgBio}/>
                            Crystal Grant
                            software engineer, graphic designer
                        </div> 
                        <div class="bio">
                            <img width="200" alt="Bio image 2" src={glBio}/>
                            Guzal Latypova
                            software engineer, artist, curator 
                        </div>    
                        <div class="bio">
                            <img width="200" alt="Bio image 3" src={cpBio}/>
                            Chaltin Pagan
                            software engineer, project-manager, artist
                        </div>   
                        <div class="bio">
                            <img width="200" alt="Bio image 4" src={rzBio}/>
                            Romie Zelaya
                            software engineer, amateur photographer
                        </div>   
                    </div>    
            </div>
        )
    }
}

export default About;