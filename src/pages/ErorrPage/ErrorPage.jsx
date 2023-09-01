import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";


function ErrorPage() {
    const error = useRouteError();
    if (isRouteErrorResponse(error)) {
        return (
            <div>
                <h1>{error.status}</h1>
                <h2>{error.data.message || 'Something goes wrong!'}</h2>
                <h3 style={{textAlign: "center"}}>{error.data.reason}</h3>
            </div>
        );
    }

    // throw new Error('Application error not related to routing!');
    return <div>Something goes wrong</div>
}

export default ErrorPage;