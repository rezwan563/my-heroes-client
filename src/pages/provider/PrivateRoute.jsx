import React, {  useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Shared/Spinner/Spinner';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <Spinner></Spinner>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}}></Navigate>
};

export default PrivateRoute;