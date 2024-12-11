import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGem, FaHome, FaEnvelope, FaPhone, FaPrint } from 'react-icons/fa';
import { GrYoga } from "react-icons/gr";

const Footer = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    
    // Create FormData object from the form
    const formData = new FormData(event.target);
  
    // Append additional fields
    formData.append("access_key", "8d8f3462-ce60-4b78-a568-2159755c1495");
    formData.append("welcome_message", "Welcome to Inner Peace Portal, we will contact you within 24 hours");
  
    try {
      // Send the form data to the API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      // Handle the response
      const data = await response.json();
  
      if (data.success) {
        setResult("Email sent successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult("An error occurred while sending the email");
    }
  };
  

  return (
    <footer className="text-center text-lg-start bg-dark text-white mt-0">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span><strong>Get connected with us on social networks:</strong></span>
        </div>
        <div>
          <a href="/" className="me-4 text-reset text-white" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="/" className="me-4 text-reset text-white" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="/" className="me-4 text-reset text-white" aria-label="Google">
            <FaGoogle />
          </a>
          <a href="/" className="me-4 text-reset text-white" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="/" className="me-4 text-reset text-white" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </section>

      <Form onSubmit={onSubmit} className="bg-dark text-white p-4">
        <Row className="d-flex justify-content-center">
          <Col size="auto">
            <p className='pt-2 px-4'>
              <strong>Sign up for our newsletter</strong>
            </p>
          </Col>
          <Col md={5} lg={3}>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label className='d-none'>Email address</Form.Label>
              <Form.Control 
                type='email' 
                name='email' 
                placeholder='Email address' 
                className='mt-2' 
                size='sm' 
                required 
              />
            </Form.Group>
          </Col>
          <Col size="auto" md={5} lg={3}>
            <Button variant='outline-light' type='submit' className='mt-2' size='sm'>
              Subscribe
            </Button>
          </Col>
        </Row>
        <div className="mt-3 text-center">
          <span>{result}</span>
        </div>
      </Form>

      <section className="">
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">
          <Col md="3" lg="4" xl="3" className="mx-auto mb-4">
            <div className="d-flex justify-content-center mb-4">
              <GrYoga size={60}/>
            </div>
          
            <h6 className="text-uppercase fw-bold mb-4 text-center">
              Inner Peace Portal
            </h6>
            <div className="d-flex justify-content-center mb-4">
              <FaGem  size={60}/>
            </div>
          </Col>



            <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Programs</h6>
              <p>
                <a href="/programs#workouts" className="text-reset text-white text-decoration-none">
                  Workouts
                </a>
              </p>
              <p>
                <a href="/programs#yoga" className="text-reset text-white text-decoration-none">
                  Yoga
                </a>
              </p>
              <p>
                <a href="/programs#articles" className="text-reset text-white text-decoration-none">
                  Articles
                </a>
              </p>
              <p>
                <a href="/programs#recipes" className="text-reset text-white text-decoration-none">
                  Recipes
                </a>
              </p>
            </Col>

            <Col md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <FaHome className="me-2" />
                Badulla Road, Badulla
              </p>
              <p>
                <FaEnvelope className="me-3" />
                Innerpeaceportal@gmail.com
              </p>
              <p>
                <FaPhone className="me-3" /> +077 1234567
              </p>
              <p>
                <FaPrint className="me-3" /> +021 1449561
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="text-center p-4 bg-dark" > 
        © 2024 Copyright:
       
        <a className="text-reset fw-bold text-white text-decoration-none" href="/">
          @ Inner Peace Portal
        </a>
      </div>
    </footer>
  );
};

export default Footer;
