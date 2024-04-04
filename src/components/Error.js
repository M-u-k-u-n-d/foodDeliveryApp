import { useRouteError } from "react-router-dom";
const Error = () => {
    let err = useRouteError();
    console.log(err)
    return (
        <div className="error-container">
            <h1>OOP's !!</h1>
            <h2>Something Went wrong !!</h2>
        </div>
    );
};


export default Error;