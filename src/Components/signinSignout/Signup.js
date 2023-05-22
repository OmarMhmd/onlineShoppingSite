import Header from "../home/details/header/Header"
import Navs from "../navbar/Navs"
import { useState,useEffect  } from "react"
import axios from "axios"
import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer"
function Signup()
{
    {
        const obj={
            fname:'',
            lname:'',
            email:'',
            password:'',
            state:'',
            street:'',
            zip:'',
            type:''
        }
    
        const [user,setUser]=useState(obj)
    const changevalue=(e)=>{
    
        user[e.target.name]=e.target.value
        setUser({...user})
    }
    const submitUserInformation=(e)=>{
        e.preventDefault()
    
        axios.post('http://localhost:4000/Signup',user)
        .then(response=>{console.log(response)})
        .catch(error=>{
            console.log(error)
        })
    }
        return(
        <>
 
        <form onSubmit={submitUserInformation}>
        <fieldset>
        <legend>Signup</legend>
        <label htmlFor="fname">First name:</label><br/><input type="text" name="fname" value={user.fname} id="fname" onChange={changevalue}/><br/>
        <label htmlFor="lname">Last name:</label><br/><input type="text" name="lname" value={user.lname} id="lname"onChange={changevalue}/><br/>
        <label htmlFor="email">Email:</label><br/><input type="text" name="email" value={user.email} id="email"onChange={changevalue}/><br/>
        <label htmlFor="password">Password:</label><br/><input type="password" name="password" value={user.password} id="password"onChange={changevalue}/><br/>
        <label htmlFor="state">State:</label><br/><input type="text" id="state"  name="state"value={user.state}onChange={changevalue}/><br/>
        <label htmlFor="street">Street address:</label><br/><input type="text" name="street" value={user.street} id="street"onChange={changevalue}/><br/>
        <label htmlFor="zip">ZIP or postal code (optional):</label><br/><input type="number" name="zip" value={user.zip}id="zip"onChange={changevalue}/><br/>
        <label htmlFor="type">Type</label><br/>
            <select name="type" id="type"value={user.type} onChange={changevalue}>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            </select>
        
        </fieldset>
        <button type="submit" className="btn btn-primary" >Signup</button>
         </form>
         <Footer/>

            </>
    
        )
    
    }

}

export default Signup