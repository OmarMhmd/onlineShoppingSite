import React from "react";
import Navs from "../navbar/Navs";
import Header from "../home/details/header/Header";
import axios from "axios";
import "./about.css"
import AboutContent from "./AboutContent";
import Footer from "../footer/Footer";
class About extends React.Component {

    constructor()
    {
        super()
        this.state={
            about:'this is me'
        }
    }
    componentDidMount()
    {
        axios.get('http://localhost:4000/about')
        .then(response=>{
            this.setState({
                about:response.data
            })
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    render() {
        return(
            <>
            <div className="row">
            <div className="area">
            <AboutContent>{this.state.about}</AboutContent>
            </div>
          
            </div>
         <Footer/>
           </>

        )
    }
  }

export default About