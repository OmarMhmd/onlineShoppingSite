import './details.css'
import Data from './Data'
import { Outlet } from 'react-router-dom'

function RightMenu({products})
{
    return(
        <>
       
        <Data products={products}/>
        
        </>
        
    )
}

export default RightMenu