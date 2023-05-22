import axios from "axios"
import { useState } from "react"
function UpdateComp({el})
{
    const[element,setElement]=useState(el)
    const changeValue=(e)=>{
        element[e.target.name] = e.target.value
        setElement({...element})
    }
    const addElement=(e)=>{
        e.preventDefault()
        axios.put('http://localhost:4000/update-item',element)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return(
        <>
            <h2>Update Item</h2>
            <div className="row">
                <div className="col-12">
                <form onSubmit={addElement}>
                <fieldset>
                <legend>Add New Item:</legend>
                <div className="organize">
                <label>Item name:</label>
                <input type="text" name="name"value={element.name} onChange={changeValue}/><br/>
                </div>
                <div className="organize">
                <label>Item type:</label>
                <input type="text" name="type" value={element.type}onChange={changeValue}/><br/>
                </div>
                <div className="organize">
                <label>Price:</label>
                <input type="number" name="price"value={element.price}onChange={changeValue}/><br/>
                </div>
                <div className="organize">
                <label>Details:</label>
                <textarea name="details"value={element.details}onChange={changeValue}/><br/>
                </div>
                <input type="hidden" name="id" value={element._id}/>
                <button type="submit" className="btn btn-success size">Update</button>
                </fieldset>
                </form>
                </div>
            </div>
        </>

    )

}

export default UpdateComp