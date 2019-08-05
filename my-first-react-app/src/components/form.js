import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./form.css";

class MyForm extends Component {
  render() {
    return (
      <div style={{ border: "1px solid grey", width: 500 }}>
        <Form>
          <Form.Group controlId="Adi">
            <Form.Label>Adi</Form.Label>
            <Form.Control type="string" placeholder="Adini Girin" />
          </Form.Group>

          <Form.Group controlId="URL">
            <Form.Label>URL</Form.Label>
            <Form.Control type="url" placeholder="URL" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>HTTP Methodu</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="Ekle">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default MyForm;
