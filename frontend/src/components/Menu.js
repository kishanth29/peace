// Menu.js
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Multicard from "./Multicard";

const Menu = () => {
  const [menu] = useState([1, 2, 3, 4, 5, 6, 7]);
  return (
    <section id="Workouts" className="bg-light">
      <Container>
        <div className="text-center">
          <h3 className="text-secondary my-3 py-4">
            Treat yourself with our Everyday Menu 
          </h3>
        </div>
        <Row>
          {menu.map((item) => {
            return (
              <Col md={3} lg={3} key={item}>
                <Multicard />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Menu;
