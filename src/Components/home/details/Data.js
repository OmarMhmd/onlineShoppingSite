import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState, useTransition } from "react"
import { UserContext } from "../../Home";

function Data({ products }) {
    const [isPending, startTransition] = useTransition()
    const data = useContext(UserContext)
    const navigate = useNavigate();
    const [status, setStatus] = useState({
        name: ''
    })
    const [filtered, setFiltered] = useState([])
    useEffect(()=>{
        setFiltered([...products])
    },[products])
    
    let find = [];
    const handleChnage = (e) => {
        status[e.target.name] = e.target.value
        setStatus({ ...status })
        startTransition(() => {
            for (let i = 0; i < filtered.length; i++) {
                if (filtered[i].name == status.name) {
                    find[0] = filtered[i];
                    setFiltered([...find])
                }
            }
        })

        if (e.target.value == '') {
            setFiltered([...products])
        }
    }
    return (
        <>
            <label>Serach about your products:</label><input type="text" name="name" value={status.name} onChange={handleChnage} />
            <div className="row">
                {
                    isPending ? 'Loading...' : filtered.map((product, index) => (
                        <div className="col-3" key={index}>
                            <div className='item'>
                                <img src={require(`../../../backend/public/${product.filename}`)} className="right-menu-image" />
                                <span>{product.name}</span>
<button className='btn btn-success sty' onClick={() => navigate(`/show-details/${product._id}`, { state: data })}>Show details</button>
<button className='btn btn-info sty' onClick={() => navigate('/sucessfull-purchase', { state: data })}>Buy now</button>
<span>{product.price}$</span>
            </div>
            </div>
             ))
             }
            </div>
        </>
    )
}

export default Data