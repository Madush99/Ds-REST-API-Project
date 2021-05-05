import React from 'react';
import Layout from '../../components/Layout';
import { Jumbotron, Row , Col, Container} from 'react-bootstrap';
import './style.css';
import { NavLink} from 'react-router-dom'

/**
* @author
* @function Home
**/

const Home = (props) => {



  return(
    <Layout>
      <Container fluid>
        <Row>
          <Col md = {2} className = "sidebar">
            <ul>
              <li><NavLink to = {'/'}>Home</NavLink></li>
              <li><NavLink to = {'/products'}>Products</NavLink></li>
              <li><NavLink to = {'/orders'}>Oders</NavLink></li>
            </ul>
          </Col>
          <Col md={10} style={ {marginLeft: 'auto'}}>container</Col>
        </Row>
      </Container>

      

       {/*<Jumbotron style = {{margin: '5rem', background: '#fff'}} className = "text-center">
            <h1>Welcome to Admin Dashboard</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
  </Jumbotron> */}
    </Layout>
   )

 }

export default Home