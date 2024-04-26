import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

import { Audio } from 'react-loader-spinner'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
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
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;