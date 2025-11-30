import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/home.css';
import '../styles/font-awesome-icons.css';


class Home extends React.Component {
  render() {
    return(
      <div>
        <Helmet>
          <title>Rohan Upponi</title>
          <meta name = "viewport" content = "width=device-width, initial-scale = 1"/>
        </Helmet>

        <div id = "view-container">
            <div id = "introduction-component">
              <h1 id = "intro-message">
                  My name is Rohan Upponi<br/>
                  I love to work because I work on what I love
              </h1>

              <div id = "ref-link-container">
                  <a rel = "noopener noreferrer" target = "_blank" href = "mailto:mail@rohanupponi.com" aria-label="Email Link"><div className = "ref-cont"><i className = "ref fa fa-envelope-o"/></div></a>
                  <a rel = "noopener noreferrer" target = "_blank" href = "https://github.com/rupponi" aria-label="Github Link"><div className = "ref-cont"><i className = "ref fa fa-github"/></div></a>
                  <a rel = "noopener noreferrer" target = "_blank" href = "https://linkedin.com/in/rohanupponi" aria-label="LinkedIn Link"><div className = "ref-cont"><i className = "ref fa fa-linkedin"/></div></a>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Home;