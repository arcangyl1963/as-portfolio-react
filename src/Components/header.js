import React, { Component } from 'react';

class Header extends Component {
    render() {
        if(this.props.data){
            var name = this.props.data.name;
            var org = this.props.data.organization
            var jobtitle = this.props.data.jobtitle;
            var desc = this.props.data.desc;
            var networks = this.props.data.social.map(function(network){
                return <li key={network.name}><a href={network.url} target="_blank" rel="noreferrer"><i className={network.className}></i></a></li>
            })
        }
        return (
            <header id="home">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav=wrap" title="Show Navigation">Show Navigation</a>
                    <a className="mobile-btn" href="#home" title="Hide Navigation">Hide Navigation</a>
                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
                        <li><a className="smoothscroll" href="#contact">Contact</a></li>
                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        <li><a className="btn" type="button" href="https://www.linkedin.com/in/artboyatl/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i>LinkedIn</a></li>
                    </ul>
                </nav>
                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">{org}</h1>

                        <h2 className="myName">{name}</h2>
                        <h3>A <span>{jobtitle}</span> from Atlanta, GA. {desc}</h3>
                        <hr />
                        <ul className="social">
                            {networks}
                        </ul>

                    </div>
                </div>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                </p>
            </header>
        );
    }
}
export default Header;