import { useRouteError } from "react-router-dom"
import Footer from "../footer/Footer"

function ErrorComp()
{
    const error=useRouteError()
    return(
        <>
        <div>Error</div>
        <p>{error.message}</p>
        <h1>error component</h1>
        <Footer/>
        </>

    )

}

export default ErrorComp