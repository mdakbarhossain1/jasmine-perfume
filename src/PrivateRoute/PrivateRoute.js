import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {

    const { user, isLoading } = useAuth();


    if (isLoading) {
        return <div className="text-center"><Spinner animation="border" className="mt-5 my-5 mx-auto text-center" variant="success"></Spinner></div>

    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;