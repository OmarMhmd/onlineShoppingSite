import { Link, Outlet } from "react-router-dom"
import Home from "../Home"
import About from "../about/About"
import Callus from "../callus/Callus"
import './navbar.css'
function Navs()
{
    return(
        <>
        <div className="row">
        <div className="col-2">
        </div>
         <div className="col-10">
            <Link to="/" className="links">Home</Link>
            <Link to="/callus" className="links">Callus</Link>
            <Link to="/about" className="links">About</Link>
        </div>
        </div>
        <Outlet/>
        </>
    )
}
export default Navs