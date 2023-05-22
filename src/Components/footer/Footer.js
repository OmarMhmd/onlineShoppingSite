import { Link, Outlet } from "react-router-dom"
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './footer.css'
function Footer() {
    return (
        <>
        <footer>
        <Link to={'https://www.facebook.com/'}><FaFacebook className="mtStyle"/></Link>
        <Link to={'https://www.instagram.com/'} ><FaInstagram className="mtStyle"/></Link>
        <Link to={'https://twitter.com'} ><FaTwitter className="mtStyle"/></Link>
        
        </footer>
       
        
        </>
    )

}

export default Footer