import { useLoaderData, useLocation, useParams } from "react-router-dom";
import Header from "./header/Header";
import Navs from "../../navbar/Navs";
import './showDetails.css'
import { useNavigate } from "react-router-dom";
function ShowDetails({state})
{
    const location = useLocation();
    const data=location.state
    console.log(data)

    const{id}=useParams()
    const products=useLoaderData()
    const product=products.filter(pp=>pp._id==id)
    if(product.length==0)
    {
        throw new Error('There is no product with this id')
    }

    const navigate=useNavigate()
    return(
        <>
        <Header/>
        <Navs/>
    <div className='row'>
        <div className='col-8 mx-auto'>
            <div className='parent'>
                <div className='col-2'>
                <div className='child1'>
                    <p>name:</p>
                    <p>Type</p>
                    <p>Price</p>
                    <p>Details</p>
                </div>
                </div>
                <div className='col-6'>
                <div className='child1 styleMe'>
                    <p>{product[0].name}</p>
                    <p>{product[0].type}</p>
                    <p>	{product[0].price}$</p>
                    <p>	{product[0].details}</p>
                </div>
                <div className='col-7'>
                <button className="btn btn-success but" onClick={()=>navigate('/sucessfull-purchase',{state:data})}>Buy this Item</button>
                 </div>
                </div>
            </div>
        </div>
    </div>
        </>

    )

}
export default ShowDetails