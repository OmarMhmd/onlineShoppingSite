import { Link, Outlet } from "react-router-dom";
import './Header.css'
function Header() {
  return (
    <>
        <div className="row">
          <div className="col-1">
          <Link to="/"><img src={require ("./logo.png")}/></Link> 
          </div>
          <div className="col-8">
          </div>
          <div className="col-3">
            <Link to="/signin" id="sign">Signin</Link>
            <Link to="/signup" id="sign">Signup</Link>
          </div>
         
        </div>
        <Outlet/>
       
    </>
  )
}

export default Header