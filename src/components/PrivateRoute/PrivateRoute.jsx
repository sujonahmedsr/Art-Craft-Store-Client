import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

import { Audio } from 'react-loader-spinner'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
             <Audio
                height="100"
                width="100"
                radius="10"
                color="green"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
            />
    }

    if (user) {
        return children
    }
    return <Navigate state={location?.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;