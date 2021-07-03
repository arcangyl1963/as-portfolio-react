import React, { Component } from 'react';

class Contact extends Component {
    render() {
        if (this.props.data) {
            var name = this.props.data.name;
            var street = this.props.data.address.street;
            var city = this.props.data.address.city;
            var state = this.props.data.address.state;
            var zip = this.props.data.address.zip;
            var phone = this.props.data.address.phone;
            var email = this.props.data.email;
            var msg = this.props.data.contactMsg
        }
        return (
            <section id="contact">
                <div className="row section-head">
                    <div className="col-2 columns header-col">
                        <h1><span>Contact Me</span></h1>
                    </div>
                    <div className="col-10 columns">
                        <p className="message">{msg}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 columns">
                        <div className="columns contact-info">
                            <h4>Contact Information:</h4>
                            <p className="address">
                                <span>{name}</span><br />
                                <span>{street}<br />
                                {city} {state}, {zip}
                                </span><br />
                            </p>
                        </div>
                    </div>
                    <aside className="col-4 columns footer-widget">
                        <div className="widget widget-contact">
                            <h4>Phone and Email:</h4>
                            <p className="address">
                                <span>{phone}</span><br />
                                <span>{email}</span>
                            </p>
                        </div>
                    </aside>
                </div>
            </section>
        );
    }
}
export default Contact;