import React, { Component } from 'react';

class Footer extends Component {
    render() {
        if (this.props.data) {
            var networks = this.props.data.social.map( function(network) {
                return <li key={network.name}><a href={network.url} target="_blank" rel="noreferrer"><i className={network.className}></i></a></li>
            })
        }
        return (
            <footer>
                <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">
                            {networks}
                        </ul>
                        <ul className="copyright">
                            <li>&copy; Copyright 2021 Arcangy Studios</li>
                        </ul>
                    </div>
                    <div id="to-top">
                        <a className="smoothsroll" title="Return to Top" href="#home"><i className="icon-up-open"></i></a>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;