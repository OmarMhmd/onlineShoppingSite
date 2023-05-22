import axios from "axios"
import { useState, useEffect } from "react"
 const Store = (Original) => {
     function EnhancedComponent() {
        const [products, setProducts] = useState([])
        useEffect(() => {
                axios.get('http://localhost:4000')
                    .then(response => {
                        response.data.map(res => products.push(res))
                        setProducts([...products])
                    })
                    .catch(error => console.log(error))
        }, [])
         return (<Original products={products} />)
    }
    return EnhancedComponent
}

export default Store