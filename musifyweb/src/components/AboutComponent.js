import React, { Component } from "react";
import { Form, FormGroup, Input, Button, Col, Label } from "reactstrap";
class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    function submitClick(e) {
      e.preventDefault();
    }
    return (
      <div className="container" id="aboutComponentContainer">
        <div id="aboutUsSection">
          <div id="aboutUsWord">
            <p>About Us</p>
          </div>
          <div id="aboutUsInfo">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div id="contactUsSection">
          <div id="contactUsWord">
            <p>Contact Us</p>
          </div>
          <div id="contactUsInfo">
            <Form>
              <FormGroup>
                <Label for="fullname" hidden>
                  Full Name
                </Label>
                <Col md={10}>
                  <Input
                    style={{
                      borderRadius: "10px",
                    }}
                    type="fullname"
                    name="fullname"
                    id="fullname"
                    placeholder="Full Name"
                    bsSize="lg"
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Label for="emailaddress" hidden>
                  Email Address
                </Label>
                <Col md={10}>
                  <Input
                    style={{
                      borderRadius: "10px",
                    }}
                    type="email"
                    name="emailaddress"
                    id="emailaddress"
                    placeholder="Email Address"
                    bsSize="lg"
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Label for="message" hidden>
                  Message
                </Label>
                <Col md={10}>
                  <Input
                    style={{
                      borderRadius: "10px",
                    }}
                    type="textarea"
                    name="message"
                    id="message"
                    placeholder="Message"
                    bsSize="lg"
                  />
                </Col>
              </FormGroup>
              <Button
                style={{
                  backgroundColor: "transparent",
                  outlineColor: "white",
                  color: "white",
                  width: "180px",
                  height: "57px",
                  float: "right",
                }}
                type="submit"
                onClick={submitClick}
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
