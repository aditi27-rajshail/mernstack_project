import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <>
            <div class="container">
                <div class="center">
                    <h1>404</h1>
                    <h2>We are sorry, Page not found</h2>
                    <p className="mb-5">
                        The page you are looking for might have been removed or 
                        had its name changed or temporarily unavailable.
                    </p>
                    <NavLink to="/">Back to HomePage</NavLink>
                </div>
            </div>
        </>
    )
}

export default ErrorPage;
