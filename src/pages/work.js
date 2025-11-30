import React from 'react';
import '../styles/work.css';
import { Helmet } from 'react-helmet';

import WorkCard from '../components/work-card/work-card';
import Datastore from '../data.json';

class Work extends React.Component {
  render() {
    let content = [];
    for (let x = 0; x < Datastore.work.content.length; x++) {
      content.push(
        <div className="grid-item">
          <WorkCard workData = {Datastore.work.content[x]}/>
        </div>
      );
    }

    return(
      <html lang="en">
          <Helmet>
            <title>Work | Rohan Upponi</title>
            <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Lato|Open+Sans:300&display=swap'/>
            <meta name = "viewport" content = "width=device-width, initial-scale = 1"/>
          </Helmet>

          <div id = "view-container">
            <h1 id = "work-section-title">{Datastore.work.title}</h1>
            <div id = "work-partition">
                {content}
            </div>
          </div>
      </html>
    )
  }
}

export default Work;