import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        mobile: '',
        email: '',
        gender: '',
        dob: '',
        course: '',
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const courses = ['Biology', 'Computer Science', 'Commerce', 'Humanities'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const errors = {};

        if (!formData.name.trim()) errors.name = 'Name is required';
        if (!formData.address.trim()) errors.address = 'Address is required';
        if (!/^[0-9]{10}$/.test(formData.mobile)) errors.mobile = 'Mobile must be a 10-digit number';
        if (!/^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(formData.email)) errors.email = 'Invalid email address';
        if (!formData.gender) errors.gender = 'Gender is required';
        if (!formData.dob) errors.dob = 'Date of birth is required';
        if (!formData.course) errors.course = 'Course selection is required';

        return errors;
    };

    const handleRegister = () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        alert(`Data Stored Successfully:\n\nName: ${formData.name}\nAddress: ${formData.address}\nMobile: ${formData.mobile}\nEmail: ${formData.email}\nGender: ${formData.gender}\nDate of Birth: ${formData.dob}\nCourse: ${formData.course}`);
        setErrors({});
    };

    const handleCancel = () => {
        setFormData({
            name: '',
            address: '',
            mobile: '',
            email: '',
            gender: '',
            dob: '',
            course: '',
        });
        setErrors({});
        setSuccessMessage('');
    };

    return (
        <Container className="container mt-5">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <Card className='card'>
                        <Card.Body>
                            <h2 className="text-center fw-bold mb-4">Higher Secondary Admission Form</h2>

                            {successMessage && (
                                <Alert variant="success" onClose={() => setSuccessMessage('')} dismissible>
                                    {successMessage}
                                </Alert>
                            )}

                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        isInvalid={!!errors.name}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        isInvalid={!!errors.address}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Mobile</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        isInvalid={!!errors.mobile}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.mobile}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        isInvalid={!!errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Gender</Form.Label>
                                    <div>
                                        <Form.Check
                                            inline
                                            type="radio"
                                            label="Male"
                                            name="gender"
                                            value="Male"
                                            checked={formData.gender === 'Male'}
                                            onChange={handleChange}
                                            isInvalid={!!errors.gender}
                                        />
                                        <Form.Check
                                            inline
                                            type="radio"
                                            label="Female"
                                            name="gender"
                                            value="Female"
                                            checked={formData.gender === 'Female'}
                                            onChange={handleChange}
                                            isInvalid={!!errors.gender}
                                        />
                                    </div>
                                    <Form.Control.Feedback type="invalid">{errors.gender}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Date of Birth</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="dob"
                                        value={formData.dob}
                                        onChange={handleChange}
                                        isInvalid={!!errors.dob}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.dob}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Course</Form.Label>
                                    <Form.Select
                                        name="course"
                                        value={formData.course}
                                        onChange={handleChange}
                                        isInvalid={!!errors.course}
                                    >
                                        <option value="">Select a course</option>
                                        {courses.map((course) => (
                                            <option key={course} value={course}>
                                                {course}
                                            </option>
                                        ))}
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">{errors.course}</Form.Control.Feedback>
                                </Form.Group>

                                <div className="d-flex justify-content-between">
                                    <Button variant="success" onClick={handleRegister}>
                                        Register
                                    </Button>
                                    <Button variant="danger" onClick={handleCancel}>
                                        Cancel
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    );
}

export default RegistrationForm;

