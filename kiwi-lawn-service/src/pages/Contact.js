import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Dropdown, DropdownButton } from "react-bootstrap";

const servicesList = ["Lawn Mowing", "Water Blasting", "Maintenance", "Hedge Trimming", "Yard Cleaning", "Custom Request", "Other"];

const ContactUs = () => {
  const [selectedServices, setSelectedServices] = useState([]);

  // Toggle selection of a service
  const handleServiceSelect = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  return (
    <Container fluid className="contact-page">
      <Row className="align-items-center min-vh-100">
        {/* Left Side: Contact Form */}
        <Col md={6} className="p-5">
          <h2 className="mb-4">Get in Touch With Us</h2>
          <p className="text-muted">
            Let us know how we can assist you. Fill out the form below, and we’ll get back to you shortly.
          </p>

          <Form>
            {/* Name */}
            <Form.Group controlId="name" className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>

            {/* Email */}
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>

            {/* Phone */}
            <Form.Group controlId="phone" className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone number" />
            </Form.Group>

            {/* Multi-Select Service Section */}
            <Form.Group controlId="service" className="mb-3">
              <Form.Label>Services Needed</Form.Label>
              <DropdownButton
                id="dropdown-service"
                title={selectedServices.length > 0 ? selectedServices.join(", ") : "Select Services"}
                variant="outline-secondary"
                className="w-100 service-dropdown"
              >
                {servicesList.map((service, index) => (
                  <Dropdown.Item key={index} as="button" className="d-flex align-items-center">
                    <Form.Check
                      type="checkbox"
                      label={service}
                      checked={selectedServices.includes(service)}
                      onChange={() => handleServiceSelect(service)}
                      className="me-2"
                    />
                    
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </Form.Group>

            {/* Additional Details */}
            <Form.Group controlId="message" className="mb-3">
              <Form.Label>Describe Your Request</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Provide details" />
            </Form.Group>

            {/* File Upload */}
            <Form.Group controlId="file" className="mb-3">
              <Form.Label>Upload Image (Optional)</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            {/* Submit Button */}
            <Button variant="primary" type="submit" className="w-100">
              Submit Request
            </Button>
          </Form>
        </Col>

        {/* Right Side: Brand Logo */}
        <Col md={6} className="brand-logo-container p-5">
          <img src="/images/KLS-no-bg.png" alt="Brand Logo" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
