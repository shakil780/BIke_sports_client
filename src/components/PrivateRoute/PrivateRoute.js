import React from 'react';
import { Redirect } from 'react-router';
import { Route } from 'react-router';
import UseAuth from '../../Context/UseAuth/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
     const {user,Loding}=UseAuth()
     console.log(Loding);
     if (Loding) {
        return <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    }
      console.log(user);
    return (
        <Route
        {...rest}
        render={({ location }) =>
         user.email?  (
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