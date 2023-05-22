import { useNavigate } from "react-router-dom"

function PurchaseComp()
{
    const navigate=useNavigate()
    return(
        <>

        <div className="alert alert-success" role="alert">
         The purchasing process has been implemented sucessfully and you will receive email for detasil delivery!!
        </div>
        <button className="btn btn-primary" onClick={()=>navigate('/')}>Home</button>
        </>
    )

}

export default PurchaseComp