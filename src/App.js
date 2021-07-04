import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/header';
import About from './Components/about';
import Footer from './Components/footer';
import Resume from './Components/resume';
import Contact from './Components/contact';
import Portfolio from './Components/portfolio';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foo: 'bar',
            resumeData: {}
        };
    }
    fetchResumeData() {
        $.ajax({
            url: '/resumeData.json',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({resumeData: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err);
                alert(err);
            }
        });
    }
    componentDidMount() {
        this.fetchResumeData();
    }
    render() {
        return (
            <div className="App">
                <Header data = {this.state.resumeData.main}/>
                <About data = {this.state.resumeData.main}/>
                <Resume data = {this.state.resumeData.resume}/>
                <Portfolio data = {this.state.resumeData.portfolio}/>
                <Contact data = {this.state.resumeData.main}/>
                <Footer data = {this.state.resumeData.main}/>
            </div>
        );
    }
}
export default App;