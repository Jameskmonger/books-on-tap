import * as React from "react";

import CircularProgress from '@material-ui/core/CircularProgress';

const Loader: React.FunctionComponent = () => {
    return (
        <div className="loader">
            <CircularProgress />
        </div>
    )
};

export { Loader };
