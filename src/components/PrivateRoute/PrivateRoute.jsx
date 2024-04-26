import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
             <p className="h-[90vh] bg-red-600">Loading...</p>
    }

    if (user) {
        return children
    }
    return <Navigate state={location?.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;