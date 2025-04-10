import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Dropdown, DropdownButton } from "react-bootstrap";

const servicesList = ["Lawn Mowing", "Water Blasting", "Maintenance", "Hedge Trimming", "Yard Cleaning", "Custom Request", "Other"];

const ContactUs = () => {

  const [loading, setLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleServiceSelect = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);         // Start loading
    setShowSuccessMessage(false); // Reset success message

    const data = {
      ...formData,
      services: selectedServices,
    };

    try {
      const response = await fetch("https://lawn-calc-app-39609e86578e.herokuapp.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowSuccessMessage(true); // Show success box
        setFormData({ name: "", email: "", phone: "", message: "" });
        setSelectedServices([]);
      } else {
        alert("Failed to send the email.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending the request.");
    } finally {
      setLoading(false); // Stop loading
    }
  };


  const handleClearForm = () => {
    setFormData({ name: "", email: "", phone: "", message: "" });
    setSelectedServices([]);
  }

  return (
    <Container fluid className="contact-page">
      <Row className="align-items-center min-vh-100">
        <Col md={6} className="p-5">
          <h2 className="mb-4">Get in Touch With Us</h2>
          <h4 className="mb-4">We respond quickly!</h4>
          <p className="text-muted">
            Let us know how we can assist you. Fill out the form below, and we’ll get back to you in 2 business hours.
          </p>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name" className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required value={formData.name} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required value={formData.email} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="phone" className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="service" className="mb-3">
              <Form.Label>Services Needed</Form.Label>
              <DropdownButton
                id="dropdown-service"
                title={selectedServices.length > 0 ? selectedServices.join(", ") : "Select Services"}
                variant="outline-secondary"
                className="service-dropdown"
              >
                {servicesList.map((service, index) => (
                  <Dropdown.Item
                    key={index}
                    as="div"
                    className="d-flex align-items-center"
                    onClick={(e) => {
                      e.preventDefault();       // Prevent default dropdown behavior
                      e.stopPropagation();      // Prevent closing dropdown
                      handleServiceSelect(service); // Toggle the correct service
                    }}
                  >
                    <Form.Check
                      type="checkbox"
                      label={service}
                      checked={selectedServices.includes(service)}
                      onClick={(e) => e.stopPropagation()} // Prevent the click from bubbling to parent
                      readOnly // Let the parent div handle the logic
                      className="me-2"
                    />
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </Form.Group>

            <Form.Group controlId="message" className="mb-3">
              <Form.Label>Describe Your Request</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Provide details" value={formData.message} onChange={handleChange} />
            </Form.Group>

            {loading ? (
              <div className="text-center my-3">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Sending...</span>
                </div>
              </div>
            ) : (
              <Button variant="primary" type="submit" className="w-100">
                Submit Request
              </Button>
            )}

          </Form>
          {showSuccessMessage && (
            <div className="mt-4 p-3 rounded bg-success text-white d-flex align-items-center justify-content-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8a8 8 0 1 1-16 0A8 8 0 0 1 16 8zM6.97 10.97a.75.75 0 0 0 1.08 0l3.992-3.993a.75.75 0 1 0-1.08-1.06L7.5 9.439 6.03 7.97a.75.75 0 0 0-1.06 1.061l2 2z" />
              </svg>
              <span>Your request has been sent successfully!</span>
            </div>
          )}

        </Col>

        <Col md={6} className="brand-logo-container p-5">
          <img src="/images/KLS-no-bg.png" alt="Brand Logo" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
