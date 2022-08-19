import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import "../styles/oneProduct.css";

export default function OneProduct(props) {
  const [count, setCount] = useState(0);

  const [show, setShow] = useState(false);

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <div className="OneProduct">
        <img src={props.img} alt="" />
        <h3>{props.title}</h3>
        <div className="qte">
          <h5>{props.price}</h5>
          <div className="qte2">
            <Button
              variant="primary"
              size="sm"
              onClick={() => setCount(count + 1)}
            >
              +
            </Button>
            <div>{count}</div>
            <Button
              variant="primary"
              size="sm"
              onClick={() => setCount(count - 1)}
            >
              -
            </Button>
          </div>
          {/* <input type="number" id="quantity" name="quantity" min="1" max="5" /> */}
        </div>
        <Button variant="primary" onClick={handleShow}>
          Commander
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Please, add your information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Full Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Enter your number" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    
  );
}
