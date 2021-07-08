/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";

class About extends Component {
    render() {
        if(this.props.data) {
            var profImg = "images/"+this.props.data.image;
            var bio = this.props.data.bio;
            var downloadResume = this.props.data.downloadresume;
        }
        return (
          <section id="about">
            <div className="row">
              <div className="three columns">
                <img className="profile-img" src={profImg} alt="James Harris" />
              </div>
              <div className="nine columns main-col">
                <h2>About Arcangyl Studios</h2>
                <p>{bio}</p>
                <div className="row">
                  <div className="columns download">
                    <p>
                      <a
                        href={downloadResume}
                        target="_blank"
                        className="button"
                      >
                        <i className="fa fa-download"></i>Download Resume
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default About;