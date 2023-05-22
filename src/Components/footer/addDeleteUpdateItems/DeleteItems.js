import { useEffect, useState } from 'react'
import axios from 'axios'
import Data from './Data'
import Store from '../../Store'
function DeleteItems({products})
{
    const [items,setItems]=useState([])
    useEffect(()=>{
        setItems(products)
    },[])
    const deleteItem=(id)=>{
        const newItem=items.find(item=>item._id==id)        
        items.splice(newItem,1)
        setItems([...items])
        axios.delete(`http://localhost:4000/modify-items/${id}`)
        .then(response=>console.log(response))
        .catch(error=>console.log(error))
    }
    return(
        <>
        <h2>Delete Items</h2>
        <Data items={items} deleteItem={deleteItem}/>
      </>
    )
}

export default Store(DeleteItems)