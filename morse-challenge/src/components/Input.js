import React from 'react';
import { Form } from 'react-bootstrap';
import '../Input.css';

const Input = (props) => {
    const handleChange = (event) => {
        props.setValue(event.target.value);
    }

    return (
        <>
            <Form className="form-container">
                <Form.Group className="mb-3 input form-group">
                    <Form.Control
                        as="textarea"
                        value={props.value}
                        onChange={handleChange}
                        placeholder="Introducir texto"
                        rows={3}
                    />
                </Form.Group>
            </Form>
        </>
    );
}

export default Input;