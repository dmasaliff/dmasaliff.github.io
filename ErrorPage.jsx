import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="py-5 font-bold font-arial text-3xl flex justify-center min-h-screen items-center flex-col">
            <h1>Error</h1>
            <p>Sorry, an unexpected error has occured</p>
            <p>{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage