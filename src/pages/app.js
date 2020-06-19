import React from 'react'
import { Router } from '@reach/router';
import Home from '../components/home';
import MyCourses from '../components/my-courses';

export default (props) => {
    return(
        <div>
            <h1>Soy App</h1>
            <Router>
                <Home path="/app" />
                <MyCourses path="/app/cursos" />
            </Router>
        </div>
    )
}