import { useState,createContext } from "react"
import Footer from "./footer/Footer"
import Details from "./home/details/Details"
import Header from "./home/details/header/Header"
import Navs from "./navbar/Navs"
import { Outlet, useLoaderData, useLocation } from "react-router-dom"
import axios from "axios"
export const UserContext=createContext()

function Home()
{

    let loadedData=useLoaderData()

    const location = useLocation();
    const data = location.state

    const [user,setUser]=useState(data)

    console.log('user',user)

    return(
        <>
        <Header/>
        <Navs/>
        
        <UserContext.Provider value={user}> 
        <Details loadedData={loadedData}/>
        </UserContext.Provider>
        <Footer/>
        </>
    )

}
export const shoppingData=async ()=>{
    let products=[]
    const res= await axios.get('http://localhost:4000')
    products=res.data
    return products
}
export default Home