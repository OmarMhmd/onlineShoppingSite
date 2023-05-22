import {useEffect, useState } from "react"
import LeftMenu from "./LeftMenu"
import RightMenu from "./RightMenu"
import Store from "../../Store"
import axios from "axios"

function Details({loadedData})
{
      
    const [items,setAllItems]=useState(loadedData)
    const [products,setProducts]=useState(loadedData)
    const specificItems=(value)=>{
    var part=products.filter(product=>product.type===value)
    setAllItems([...part])
}

const allItems=()=>{
    setAllItems([...products])
}
    return(
        <>
        <div className="row">
            <div className="col-2">
            <div className="menu">
            <LeftMenu allProducts={products} specificItems={specificItems} allItems={allItems}/>
            </div>
            </div>
            <div className="col-10">
            <div className="details">
            <RightMenu products={items}/>
            </div>
            </div>
        </div>
  
        </>
    )
}


export default Details