import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      disease: "",
      status: "pending",
    };
  }
  Submit = () => {
    console.log("affa");
    axios.post("/postDetails", this.state).then(() => {
      console.log("Sucess");
      this.setState({ status: "success" });
      setTimeout(() => {
        this.setState({ name: "", phone: "", disease: "", status: "pending" });
      }, 2000);
    });
  };
  render() {
    return (
      <div>
        <Container>
          <br />
          <br />
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name of the patient</Form.Label>
              <Form.Control
                type="text"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
                placeholder="Enter Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Phone no</Form.Label>
              <Form.Control
                onChange={(e) => this.setState({ phone: e.target.value })}
                type="number"
                value={this.state.phone}
                placeholder="Mobile no"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Disease</Form.Label>
              <Form.Control
                onChange={(e) => this.setState({ disease: e.target.value })}
                type="text"
                value={this.state.disease}
                placeholder="Disease"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                console.log(this.state);
                this.Submit();
              }}
            >
              Submit
            </Button>
          </Form>
          <br />
          <br />
          {this.state.status === "success" ? (
            <div style={{ color: "green" }}>Success!</div>
          ) : (
            <div></div>
          )}
        </Container>
      </div>
    );
  }
}

export default Home;
