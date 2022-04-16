import React, { Suspense, StrictMode } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary'
import IndexLayout from './Components/LayoutComponent'
import componentLoader from './utils/componentloader' 
const loadable = (loader) => React.lazy(() => componentLoader(loader, 5))


const routes = [
    {
        path: '/',
        component: loadable(() => import('./Components/Pages/Dashboard')),
        exact: true,
    },
    {
        path: '/dashboard',
        component: loadable(() => import('./Components/Pages/Dashboard')),
        exact: true,
    },
    {
        path: '/market',
        component: loadable(() => import('./Components/Pages/Default')),
        exact: true,
    },
    {
        path: '/portfolio',
        component: loadable(() => import('./Components/Pages/Default')),
        exact: true,
    },
    {
        path: '/news',
        component: loadable(() => import('./Components/Pages/Default')),
        exact: true,
    },
    {
        path: '/setting',
        component: loadable(() => import('./Components/Pages/Default')),
        exact: true,
    }, 
    {
        path: '/profile',
        component: loadable(() => import('./Components/Pages/Default')),
        exact: true,
    },
    
    {
        path: '*',
        component: loadable(() => import('./Components/PageNotFound/index')),
        exact: false,
    },


]


const Router = () => {
    return (
       
        <React.Fragment>
            <ErrorBoundary>
            <BrowserRouter>
                <Suspense fallback={<div style={{ position: "absolute", left: "50%", top: "50%" }}><p>Loading....</p></div>}>
                <IndexLayout>
                   
                        <Switch >

                            {routes.map((route) => {
                                return (
                                    <Route
                                        path={route.path=="/"?<Redirect to="/dashboard"/>:route.path}
                                        component={route.component}
                                        key={route.path}
                                        exact={route.exact}
                                    />
                                )
                            })} 
                        </Switch>
                    </IndexLayout>
                </Suspense>
                </BrowserRouter>
            </ErrorBoundary>
        </React.Fragment>
  
    )
}
export default Router
