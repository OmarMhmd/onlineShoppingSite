import { useState } from 'react'
import './details.css'

function LeftMenu({ allProducts, specificItems, allItems }) {

    const [state, setPrevState] = useState(0)
    const reset=()=>
    {    
        document.getElementsByTagName('button')[state].classList.remove("styles")
    }
    const changeStyle = (index) => {
        document.getElementsByTagName('button')[state].classList.remove("styles")
        document.getElementsByTagName('button')[index+1].classList.add("styles")
        setPrevState(index+1)
    }
    const mySet = [...new Set(allProducts.map(product => product.type))]
    return (
    <>
    <h2>Select your group</h2>
    <button onClick={e => { allItems(); reset()}} className='myButton'>Display All Items</button>
{
mySet.map((value, index) =>
<button key={index} className='myButton' onClick={e => { specificItems(value); changeStyle(index) }} >{value}</button>)
 }
</>
)
}

export default LeftMenu