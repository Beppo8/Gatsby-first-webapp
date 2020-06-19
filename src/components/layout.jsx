import React from 'react';
import Navigation from "../components/navigation";

export default (props) => {
    return(
        <div>
            <Navigation/>
            {props.children}
        </div>
    )
}