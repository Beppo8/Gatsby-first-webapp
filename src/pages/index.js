import React from "react";
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';


export default (props) => {
  console.log(props);
 return(
 <div>
    <h1>Home</h1>
    <Link to="/about" >Acerca de</Link>
    <Img fluid={props.data.file.childImageSharp.fluid} alt="Imagen de ejemplo" />
  </div>
 )
}

export const query = graphql`
  query {
    file(relativePath: {eq: "pinkSun.jpg"}) {
      childImageSharp{
        fluid(maxWidth: 1920){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;