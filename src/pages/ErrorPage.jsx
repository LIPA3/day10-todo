import {useRouteError} from "react-router";
export default function ErrorPage(){
    const error=useRouteError();
    return <div>
        {JSON.stringify(error)}
        {error.status === 404
         ? <div>Page not found
            <div>
            <a href="/">try</a>
            </div>
            </div>
         : <div>{JSON.stringify(error)}</div>}
    </div>
}