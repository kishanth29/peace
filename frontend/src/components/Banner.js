import React from "react";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import video from '../assets/videos/home.mp4';
import { Link } from "react-router-dom";

const Banner = () => {
  const bannerStyles = {
    container: {
      padding: 0,
      margin: 0,
    },
    videoContainer: {
      position: 'relative',
      height: '100vh',
      overflow: 'hidden',
      margin: 0,
      padding: 0,
    },
    videoOverlay: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end',
      color: 'white',
      textAlign: 'right',
      background: 'rgba(0, 0, 0, 0.5)',
      padding: '20px',
      boxSizing: 'border-box',
      zIndex: 1,
    },
    videoText: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
    },
    videoParagraph: {
      fontSize: '1.5rem',
    },
    videoFluid: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    carouselImage: {
      height: '100vh',
      objectFit: 'cover',
    },
  };

  return (
    <Container fluid style={bannerStyles.container}>
      <Row className="g-0 w-100">
        <Col lg={12} style={bannerStyles.videoContainer}>
          <video
            autoPlay
            loop
            muted
            style={bannerStyles.videoFluid}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div style={bannerStyles.videoOverlay}>
            <h1 style={bannerStyles.videoText}>
              <b>
                Feel Great <br />
                Body and Mind
              </b>
            </h1>
            <p style={bannerStyles.videoParagraph}>
              Choose from hundreds of workouts,<br />
              healthy recipes, relaxing meditations,<br />
              and expert articles,<br />
              for a whole body <br />
              and mind approach to feeling great.
            </p>
            <p>
              <Button variant="primary" as={Link} to="/login">Log in</Button>
            </p>
          </div>
        </Col>
      </Row>
      <Row className="g-0 w-100">
        <Col lg={12}>
          <Carousel>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("../assets/shan.jpg")}
                alt="First slide"
                style={bannerStyles.carouselImage}
              />
              <Carousel.Caption>
                <h3>Yoga is the art of listening to your body</h3>
                <p className="d-none d-sm-block">
                  Inner Peace Portal
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("../assets/two.jpg")}
                alt="Second slide"
                style={bannerStyles.carouselImage}
              />
              <Carousel.Caption>
                <h3>Train like a beast, look like a beauty</h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("../assets/three.jpg")}
                alt="Third slide"
                style={bannerStyles.carouselImage}
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
