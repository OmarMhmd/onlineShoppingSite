import { useLocation, useNavigate } from "react-router-dom";
import { useEffect,useState } from "react"
import Navs from "../../navbar/Navs"
import Header from "./header/Header"
import './SuccessfullPurchase.css'
import axios from "axios";
import PurchaseComp from "./PurchaseComp"
function SuccessfullPurchase()
{
    const navigate=useNavigate()
    const location = useLocation();
    const data = location.state
    console.log('purchasedata',data)
    const [check,setCheck]=useState(false)
    useEffect(() => {
        axios.get('http://localhost:4000/sucessfull-purchase', {
          headers: {
            'Authorization': `token ${data}`
          }
        })
          .then((res) => {
            setCheck(true)
          })
          .catch((error) => {
            console.error(error)
          alert('You have to login before implementing the purchasing process!!!!')
            navigate('/')
          })
      }, [])
    return(
      <>
      <Header/>
        <Navs/>
      {check && <PurchaseComp/>}
      </>
       
    )
}

export default SuccessfullPurchase