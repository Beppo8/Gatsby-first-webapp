import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const container = {
    display: 'flex'
};

const element = {
    flex: '1',
    textAling: 'center',
    color: 'white',
    paddin: '10px 15px'
};

const NavLink = styled(Link)`
    background-color: ${props => props.active ? 'red' : 'blue'}
`;

export default (props) => {
    const [path,setPath] = useState('index');
    return(
        <nav css={container} >
            <NavLink css={element} onClick={ ev => setPath('index')}  active={ path === 'index'} to="/">Inicio</NavLink>
            <NavLink  css={element} onClick={ ev => setPath('about')} active={ path === 'about' } to="/about" >Acerca de</NavLink>
        </nav>
    )
}