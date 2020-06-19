import React from 'react';

const isAuth = false;

export default (props) => {
    if(!isAuth){
        props.navigate('/app')
        return null;
    }
    return(
        <div>
            <h1>My courses</h1>
        </div>
    )
}