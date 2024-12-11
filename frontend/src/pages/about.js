import React from "react";
import Appbar from "../components/Appbar";
import Footer from "../components/Footer";
import PersonalProfile from "./profile";
import ContactForm from "../components/ContactForm";
import backgroundImage from "../assets/final.jpg"; 
import { MdOndemandVideo } from "react-icons/md";
import { VscTasklist } from "react-icons/vsc";
import { BsEmojiSunglasses } from "react-icons/bs";
import MetaData from "../components/layouts/MetaData";
import { Card, Container ,Row,Col} from "react-bootstrap";

// Inline CSS for wave animation
const waveAnimation = `
@keyframes wave {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
`;

const waveStyle = {
  display: 'inline-block',
  animation: 'wave 1s ease-in-out infinite',
};

const evenWaveStyle = {
  ...waveStyle,
  animationDelay: '0.1s',
};

// Component with updated layout
export default function About() {
  return (
    <>
    <MetaData title={"About Page"}/>
      <Appbar />

      <div
        style={{
          
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh', // Full viewport height
          width: '100%',
          position: 'relative',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end', // Aligns content to the right
          padding: '20px' // Adds padding to the right
        }}
      >
        <div
          style={{
            textAlign: 'right', // Aligns text to the right
            backgroundColor: 'rgba(0, 0, 0, 0)', // Semi-transparent background for readability
            padding: '20px',
            borderRadius: '10px',
            maxWidth: '50%', // Adjust as needed for your layout
            color: 'white'
          }}
        >
          <p style={{ margin: 0 }}>ABOUT INNER PEACE PORTAL</p>
          <h4 style={{ margin: 0 }}>
            Our goal is to make health and <br />
            fitness attainable, affordable and <br />
            approachable.
          </h4>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          textAlign: 'center'
        }}
      >
        <style>{waveAnimation}</style>
        <div>
          <h1 style={waveStyle}>Created to help you live a better, <br />happier, healthier life.</h1> <br />
          <span><p style={evenWaveStyle}>
           <b> 
                we believe fitness should be accessible to everyone, everywhere, regardless of income level or access to a gym. <br />
                That's why we offer hundreds of free, full-length workout videos, the most affordable and effective workout programs
                on the web, meal plans, <br /> and helpful health, nutrition and fitness information.
           </b>
          </p>
          </span>
        </div>

      </div>
      <div className="bg-dark text-white">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              height: '200px', // Adjust as needed
              marginBottom: '20px' // Space between the centered content and columns
            }}
            className=""
          >
            <h3 style={{ margin: 0 }} className="text-white">We believe in unbiased, gimmick-free, research-backed information</h3>
            <p style={{ margin: 0 }}>The only thing we endorse is eating unprocessed, whole foods, and working out for <br />
               a strong, healthy body. As a business, we believe good things happen when you put people before profit.</p>
          </div>

          
          <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '20px', // Space between columns
                    textAlign:'center'
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      padding: '10px',
                      height: '300px', // Fixed height for the column
                      
                    }}
                  >
                    <h4> <BsEmojiSunglasses size={48}/> </h4>
                    <p>Inner Peace Portal has reached tens of millions around the <br />globe, all from word of mouth; happy viewers sharing <br />our content with friends and family.</p>
                  </div>
                  <div
                    style={{
                      flex: 1,
                      padding: '10px',
                      height: '300px', // Fixed height for the column
                     
                    }}
                  >
                    <h4> <VscTasklist size={48}/> </h4>
                    <p>Our workout plans use  to provide detailed, <br /> day-by-day plans, creating incredible, <br /> sustainable results.</p>
                  </div>
                  <div
                    style={{
                      flex: 1,
                      padding: '10px',
                      height: '300px', // Fixed height for the column
                     
                    }}
                  >
                    <h4 > <MdOndemandVideo size={48}/></h4>
                    <p>Over 500 free workouts range from 4-5 minutes long, <br /> from beginner level to elite athlete, <br />from HIIT to Pilates, and strength training to bodyweight.</p>
                  </div>
                </div>

        </div>
        <div style={{ backgroundColor: '#000', color: '#fff', padding: '50px 0' }} className="">
            <Container>
                <Row className="justify-content-center">
                    <Col md={8} lg={6}>
                        <Card style={{ backgroundColor: '#000', color: '#fff', border: 'none' }}>
                            <Card.Body className="text-center">
                                <Card.Title as="h2">Vision</Card.Title>
                                <Card.Text className="mb-4">
                                    To be a leading online destination for wellness, inspiring a global community to embrace yoga and fitness for a happier, healthier life.
                                </Card.Text>
                                <Card.Title as="h2">Mission</Card.Title>
                                <Card.Text>
                                    To provide diverse resources and a supportive environment, making wellness accessible and enjoyable for everyone.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

      <PersonalProfile />
      <ContactForm />
      <Footer />
    </>
  );
}
