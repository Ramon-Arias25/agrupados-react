import React from 'react';

const Login = React.lazy(() => import('./views/login/Login'));

const routes = [
    { path: '/login', exact: true, name: 'Login' , component: Login }
]
export default routes;