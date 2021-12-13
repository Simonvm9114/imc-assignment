import React from "react";
import { Navbar, Container, Form } from 'react-bootstrap';

const Header = () => {
    return (
      <Navbar variant="dark" bg="dark" expand="lg">
          <Container>
              <Navbar.Brand href="#">Food and Beverages</Navbar.Brand>
              <Form className="text-light">
                  <div>
                      <Form.Label>
                          Period
                      </Form.Label>
                  </div>
                  <div>
                      <Form.Check
                        inline
                        label="Weekly"
                        name="period_selector"
                        type="radio"
                        id="period_selector_weekly"
                      />
                      <Form.Check
                        inline
                        label="Monthly"
                        name="period_selector"
                        type="radio"
                        id="period_selector_monthly"
                      />
                  </div>
              </Form>
              <Form className="text-light">
                  <div>
                      <Form.Label>
                          Value Type
                      </Form.Label>
                  </div>
                  <div>
                      <Form.Check
                        inline
                        label="Revenue"
                        name="value_type_selector"
                        type="radio"
                        id="value_type_selector_revenue"
                      />
                      <Form.Check
                        inline
                        label="Margin"
                        name="value_type_selector"
                        type="radio"
                        id="value_type_selector_Margin"
                      />
                  </div>
              </Form>
        </Container>
      </Navbar>
    );
  };

export default Header;