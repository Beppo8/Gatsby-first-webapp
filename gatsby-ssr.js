import Layout from './src/components/layout';
import React from 'react';

export const wrapPageElement = ( { element, props } ) => {
    return <Layout {...props} >{element}</Layout>
};