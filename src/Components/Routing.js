import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom";

import Callus from "./callus/Callus";
import About from "./about/About";
import AddItems from "./footer/addDeleteUpdateItems/AddItems";
import ShowDetails from "./home/details/ShowDetails";
import SuccessfullPurchase from "./home/details/SuccessfullPurchase";
import Signin from "./signinSignout/Signin"
import Signup from "./signinSignout/Signup";
import Navs from "./navbar/Navs";
import Header from "./home/details/header/Header";
import Details from "./home/details/Details";
import LeftMenu from "./home/details/LeftMenu";
import RightMenu from "./home/details/RightMenu";
import Data from "./home/details/Data";
import Home, { shoppingData } from "./Home";
import ErrorComp from "./errorComp/ErrorComp";
import Footer from "./footer/Footer";


function Routing()
{
    const router = createBrowserRouter(
        createRoutesFromElements(
        <>
        <Route path="/" element={<Home/>} loader={shoppingData}/>
        <Route path="/" element={<Details/>}loader={shoppingData}>
            <Route path="/" element={<LeftMenu/>}/>
            <Route path="/" element={<RightMenu/>}>
            <Route path="/" element={<Data/>}/>
        </Route>
        </Route>
     

        <Route path="/" element={<Header/>}> 
        <Route path="/" element={<Navs/>}> 
        <Route path="signup" element={<Signup/>}/>   
        <Route path="signin" element={<Signin/>}/>  
        <Route path="callus" element={<Callus/>}/>

        <Route path="about" element={<About/>}/> 
        </Route>
        </Route>
        
        <Route path="show-details/:id" element={<ShowDetails />}loader={shoppingData} errorElement={<ErrorComp/>}/>
        <Route path="sucessfull-purchase" element={<SuccessfullPurchase/>}/>
        <Route path="modify-items" element={<AddItems/>}/>

        <Route path="/" element={<Header/>}> 
        <Route path="/" element={<Navs/>}>
        <Route path="*"/>
        </Route>
        </Route>
        
        </>
    ));
return(
    <>
    <RouterProvider router={router}/>
    </>
)
}
export default Routing
