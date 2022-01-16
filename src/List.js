import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Spinner } from "react-bootstrap";

import { Trash } from "react-bootstrap-icons";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { result: [] };
  }

  Function = () => {
    if (this.state.result.result.length > 0) {
      return this.state.result.result.map((pat) => {
        return (
          <>
            <tr>
              <td>{pat.Patient_name}</td>
              <td>{pat.Patient_number}</td>
              <td>{pat.Patient_disease}</td>
              <td>
                {/* <Button variant="danger">Danger</Button> */}
                {/* <i class="bi bi-trash" />
                 */}
                <Trash
                  onClick={async (e) => {
                    console.log("delete");
                    console.log(pat.Patient_number);
                    await axios.delete(
                      `https://homeomedicare.herokuapp.com/delete/${pat.Patient_number}`,
                      {
                        phone: pat.Patient_number,
                      }
                    );
                    const res = await axios.get(
                      "https://homeomedicare.herokuapp.com/retrivedata"
                    );
                    this.setState({ result: res.data });
                    console.log("Deleted");
                  }}
                />
              </td>
            </tr>
          </>
        );
      });
    } else {
      return <div></div>;
    }
  };
  componentDidMount = async () => {
    console.log(this.state.result.length);
    const res = await axios.get(
      "https://homeomedicare.herokuapp.com/retrivedata"
    );
    this.setState({ result: res.data });
  };

  render() {
    console.log(this.state.result);
    if (this.state.result.length == 0) {
      return (
        <div>
          <br />
          <center>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </center>
          <br />
        </div>
      );
    } else {
      return (
        <>
          <br />
          <br />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>FIRST NAME</th>
                <th>PHONE </th>
                <th>DISEASE</th>
              </tr>
            </thead>
            <tbody>{this.Function()}</tbody>
          </Table>
        </>
      );
    }
  }
}
export default List;
