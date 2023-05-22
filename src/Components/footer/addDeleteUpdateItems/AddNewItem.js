import axios from "axios"
import { useState,useContext } from "react"
import { jwtContext } from "./AddItems";
function AddNewItem()
{
    const data=useContext(jwtContext)
    const init={
        name: '',
        type: '',
        price: '',
        details: '',
    }

    const[element,setElement]=useState(init)
    const [image,setImage]=useState()

    const changeValue=(e)=>{
        element[e.target.name] = e.target.value
        setElement({...element})
    }
    const changeImage=(e)=>{
        setImage(e.target.files[0])
    }
    const addElement=(e)=>{
        e.preventDefault()
        const form=document.querySelector('form')
        var formData=new FormData(form);
        axios.post('http://localhost:4000/add-item',formData,{
            headers: {
              'Authorization': `token ${data} `
            }
          })

        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return(
        <>
            <h2>add new item</h2>
            <div className="row">
                <div className="col-12">
                <form  encType="multipart/form-data" onSubmit={addElement}>
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
                <label>image:</label>
                <input type="file" name="image" onChange={changeImage}/><br/>
                </div>
                <div className="organize">
                <label>Price:</label>
                <input type="number" name="price"value={element.price}onChange={changeValue}/><br/>
                </div>
                <div className="organize">
                <label>Details:</label>
                <textarea name="details"value={element.details}onChange={changeValue}/><br/>
                </div>
                <button type="submit" className="btn btn-success size">Add new item</button>
                </fieldset>
                </form>
                </div>
            </div>
        </>

    )

}


export default AddNewItem