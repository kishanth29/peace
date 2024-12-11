import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Appbar from '../components/Appbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { getProducts } from '../actions/productActions';
import MetaData from '../components/layouts/MetaData';
import { Container, Row, Col, Button } from 'react-bootstrap';
import image1 from '../assets/Home/first.jpg';
import image2 from '../assets/Home/workout.jpg';
import image3 from '../assets/Home/All.jpg';
import image4 from '../assets/Home/HealthyRecipes.jpg';
import image5 from '../assets/Home/wellnessArticle.jpg';
import image6 from '../assets/Home/About.jpg';

function Home() {
  const dispatch = useDispatch();
  const [currentPage] = useState(1);

  useEffect(() => {
    dispatch(getProducts(currentPage));
  }, [dispatch, currentPage]);

  return (
    <Fragment>
      <MetaData title={"Home"} />
      <Appbar />
      <Banner />
      <Container fluid className=" px-0 ">
        {/* First Row */}
        <Row className="g-0">
          <Col md={6} className="position-relative">
            <img
              src={image1}
              alt="First"
              className="img-fluid"
            />
            <div className="overlay">
              <div className="text">
                
              </div>
            </div>
          </Col>
          <Col md={6} className="position-relative home-image-2-container">
          <img
            src={image2}
            alt="Second"
            className="img-fluid home-image-2"
          />
          <div className="overlay">
            <div className="text">
              <h3>Workout Videos</h3>
              <p>Exercise with certified personal trainers <br /> whether you’re at home or on the road.</p>
            </div>
            <Button variant="primary" as={Link} to="/programs#workouts">Find a Workout</Button>
          </div>
        </Col>

        </Row>

        {/* Second Row */}
        <Row className="g-0">
          <Col md={6} className="position-relative">
            <img
              src={image3}
              alt="Third"
              className="img-fluid"
            />
            <div className="overlay">
              <div className="text">
                <h3>All Programs</h3>
                <p>Professionally designed programs <br /> take the guesswork out of exercising</p>
              </div>
              <Button variant="primary" as={Link} to="/programs">Browse All Programs</Button>
            </div>
          </Col>
          <Col md={6} className="position-relative">
            <img
              src={image4}
              alt="Fourth"
              className="img-fluid"
            />
            <div className="overlay">
              <div className="text">
                <h3>Wellness Articles</h3>
                <p>Research-backed articles to help you <br /> care for your body and mind.</p>
              </div>
              <Button variant="primary" as={Link} to="/programs#article">Learn from Experts</Button>
            </div>
          </Col>
        </Row>

        {/* Third Row */}
        <Row className="g-0">
          <Col md={6} className="position-relative">
            <img
              src={image5}
              alt="Fifth"
              className="img-fluid"
            />
            <div className="overlay">
              <div className="text">
                <h3>Healthy Recipes</h3>
                <p>Fuel your day with recipes by Registered Dietitians and professional chefs</p>
              </div>
              <Button variant="primary" as={Link} to="/programs#recipe">Find a Recipe</Button>
            </div>
          </Col>
          <Col md={6} className="position-relative">
            <img
              src={image6}
              alt="Sixth"
              className="img-fluid"
            />
            <div className="overlay">
              <div className="text">
                <h3>About Us</h3>
                <p>Learn more about our mission and team.</p>
              </div>
              <Button variant="primary" as={Link} to="/about">About Us</Button>
            </div>
          </Col>
        </Row>
      </Container>
      
      <Footer />
    </Fragment>
  );
}

export default Home;
