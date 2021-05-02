import React from 'react';
import Header from '../Header';
import { Container } from 'react-bootstrap';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <>
        <Header />
        <Container>
            {props.children}
        </Container>
        
    </>
   )

 }

export default Layout;