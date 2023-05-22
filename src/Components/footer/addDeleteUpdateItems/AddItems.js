import { useState, useEffect,createContext, useReducer } from "react"
import Header from "../../home/details/header/Header"
import Navs from "../../navbar/Navs"
import AddNewItem from "./AddNewItem"
import DeleteItems from "./DeleteItems"
import './addDeleteItems.css'
import UpdateItems from "./UpdateItems"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"
export const jwtContext=createContext()
const reducer=(state,action)=>{
  switch(action.type)
  {
    case 'add':
      {
        return {add:state.add=true, del:state.del=false,upd:state.upd=false}
      }
    case 'del':
      {
      return {add:state.add=false, del:state.del=true,upd:state.upd=false}
      }
    case 'upd':
      {
       return {add:state.add=false, del:state.del=false,upd:state.upd=true}
      }
  }
}
function AddItems() {
  const init={
    add:true,
    del:false,
    upd:false
  }
  const [value,dispatch]=useReducer(reducer,init)
  const location = useLocation();
  const data = location.state
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:4000/modify-items', {
      headers: {
        'Authorization': `token ${data} `
      }
    })
      .then((res) => {
        
        if(res.data=='user')
        {
          navigate('/', { state: data })
        }
      })
      .catch((error) => {
        console.error(error)
        navigate('/')
      })
  }, [])

  return (
    <>
      <Header />
      <Navs />
      <div className="row">

        <div className="col-2">
          <div className="operations">
            <h2>Operations</h2>
            <button onClick={() => dispatch({type:'add'})}>Add new Item</button>
            <button onClick={() => dispatch({type:'del'})}>Delete items</button>
            <button onClick={() => dispatch({type:'upd'})}>Update items</button>
            <button>Sales</button>
          </div>
        </div>

        <div className="col-10">
          <div className="commands">
            <jwtContext.Provider value={data}>
              {value.add && <AddNewItem />}
              {value.del && <DeleteItems />}
              {value.upd && <UpdateItems />}
            </jwtContext.Provider>

          </div>
        </div>
      </div>
    </>

  )

}

export default AddItems