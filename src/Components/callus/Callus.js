import React from "react";
import { FaFacebook,TiLocation } from "react-icons/fa"
import { AiFillHome, AiFillMail, AiTwotoneMail, AiTwotonePhone } from "react-icons/ai";
import Header from "../home/details/header/Header"
import Navs from "../navbar/Navs"
import './callus.css'
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
class Callus extends React.Component
{
    render()
    {
    return(
        <>
        <div className="row area">
            <div className="col-4">
        <div className="office">
        <AiFillHome className="mtStyle"/>
        <span>Office</span>
        <span className="spanme">Come say hell at our office HQ</span>
        <span>121 Rock street, 12 Avenue, New York, NY 92103-9000</span>
        </div>
        </div>
        <div className="col-4">
        <div className="office">
        <AiTwotonePhone className="mtStyle"/>
        <span>Call us</span>
        <span className="spanme">Mon-fri 8am to 5am</span>
        <span>+1 (641) 233-9012</span>
        </div>
        </div>
        <div className="col-4">
        <div className="office">
        <AiFillMail className="mtStyle"/>
        <span>Email Us</span>
        <span className="spanme">Our friendly team is here to help</span>
        <span>algburi89@gmail.com</span>
        </div>
        </div>
        </div>
        <Footer/>
        </>
    )
}
}

export default Callus