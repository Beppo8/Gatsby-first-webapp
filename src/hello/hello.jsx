import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Alert = styled.p`
    background-color: rgba(250, 50,50, 0.3);
    color:rgb(57, 0, 0);
    border-radius: 4px;
    padding: 8px 15px;
`;

const title = css`
    font-size: 4em;
    font-weight: bold
`;

const Hello = (props) => {
    return(
        <div css={title} className={ props.className }>
            <Alert>Hola soy un alerta</Alert>
            <h1>Hola {props.name}</h1>
        </div>
    )
}

export default styled(Hello)`
    color:${ props => props.color || 'blue' };
`