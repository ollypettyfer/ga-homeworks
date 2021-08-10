import React from 'react'

const About = (props) => {
    return (
        <section className="section" id="about">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-10 content">
              <h2 className="title">About</h2>
              <p>{props.aboutText0}</p>
              <p>{props.aboutText1}</p>
              <p>{props.aboutText2}</p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default About