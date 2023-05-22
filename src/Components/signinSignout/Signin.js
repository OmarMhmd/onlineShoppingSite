import axios from "axios"
import Header from "../home/details/header/Header"
import Navs from "../navbar/Navs"
import { useState, createContext } from "react"
import { useNavigate } from "react-router-dom"
import Footer from "../footer/Footer"
export const userTokenContext = createContext()
function Signin() {
    const obj = {
        email: '',
        password: '',
        type: ''
    }
    const navigate = useNavigate()
    const [user, setUser] = useState(obj)
    const changevalue = (e) => {
        user[e.target.name] = e.target.value
        setUser({ ...user })
    }
    var value = 'dd';
    const submitUserInformation = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/Signin', user)
            .then(response => {
                value = response.data
                navigate('/modify-items', { state: response.data })
            })
            .catch(error => {
                console.log(error)
                alert('Email or password are not correct')
            })
    }
    return (
        <>

            <div className="row ">
                <div className="area">
                    <form onSubmit={submitUserInformation}>
                        <fieldset>
                            <legend>Signin</legend>
                            <label htmlFor="email">Email:</label><br /><input type="text" name="email" value={user.email} id="email" onChange={changevalue} /><br />
                            <label htmlFor="password">Password:</label><br /><input type="password" name="password" value={user.password} id="password" onChange={changevalue} /><br />

                        </fieldset>
                        <button type="submit" className="btn btn-primary" >Signin</button>
                    </form>
                </div>

            </div>


            <Footer />
        </>

    )

}

export default Signin