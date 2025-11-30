import React from 'react';
import '../styles/experience.css';
import { Helmet } from 'react-helmet';

import ExperienceCard from '../components/experience-card/experience-card';
import Datastore from '../data.json';


class Experience extends React.Component {
    render() {
      let experienceData = [];
      for (let x = 0; x < Datastore.experience.content.length; x++) {
          experienceData.push(<ExperienceCard experienceData = {Datastore.experience.content[x]}/>);
          experienceData.push(<br/>);
      }

      return(
        <html lang = "en">
          <Helmet>
            <title>Experience | Rohan Upponi</title>
            <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Lato|Open+Sans:300&display=swap'/>
            <meta name = "viewport" content = "width=device-width, initial-scale = 1"/>
          </Helmet>

          <div id = "view-container">
              <div id = "experience-component">
                <h1 id = "experience-section-title">{Datastore.experience.title}</h1>
                <div id = "experience-partition">

                    {experienceData}
                </div>
              </div>
          </div>
        </html>
      )
    }
  }
  
  export default Experience;