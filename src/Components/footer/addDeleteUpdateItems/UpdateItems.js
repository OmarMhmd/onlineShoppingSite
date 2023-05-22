import { useEffect, useState } from "react"
import UpdateComp from "./UpdateComp"
import Store from "../../Store"

function UpdateItems({products})
{
    const [items,setItems]=useState([])
    const [elem,setEleme]=useState('')
    const [show,setShow]=useState(false)
    useEffect(()=>{
        setItems(products)
    },[])

    const updateItem=(id)=>{
         const item=items.find(item=>item._id==id)  
         setEleme({...item})
        setShow(true)
    }

    return(
        <>
        {show&&<UpdateComp el={elem}/>}
        <h2>Update Items</h2>
        <table className="table table-striped col-6">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Price</th>
            <th scope="col">Details</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map(item => (
              <tr key={item._id}>
                <td></td>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.price}</td>
                <td>{item.details}</td>
                <td><button className="btn btn-danger" onClick={()=>updateItem(item._id)}>Update</button></td>
              </tr>
            ))
          }

        </tbody>
      </table>
      </>
    )

}

export default Store(UpdateItems)