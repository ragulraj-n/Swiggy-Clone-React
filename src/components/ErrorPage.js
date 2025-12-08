import { useRouteError } from "react-router-dom";

const ErrorPage = () =>{
    const err = new useRouteError();
    console.log(err);
    return(
        <h1>Not Found</h1>
    )
}

export default ErrorPage;