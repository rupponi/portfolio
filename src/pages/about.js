import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/about.css';

import Datastore from '../data.json';

class About extends React.Component {
  render() {
    let aboutData = [];
    for (let x = 0; x < Datastore.about.content.length; x++) {
      aboutData.push(Datastore.about.content[x].description);
      aboutData.push(<br/>);
      aboutData.push(<br/>);
    }

    return(
      <html lang = "en">
        <Helmet>
          <title>About Me | Rohan Upponi</title>
          <link href="https://fonts.googleapis.com/css?family=Lato|Open+Sans:300&display=swap" rel="stylesheet"/>
          <meta name = "viewport" content = "width=device-width, initial-scale = 1"/>
        </Helmet>

        <div id = "view-container">
            <div id = "about-component">
                <h1 id = "about-title">
                    {Datastore.about.title}
                </h1>
                <h1 id = "about-message">
                    {aboutData}
                </h1>
            </div>
          </div>
      </html>
    )
  }
}

export default About;