import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class Addpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameproduct: "",
      imageproduct: null,
      descriptionproduct: "",
      quantityproduct: "",
      dateproduct: "",
    };

    this.changeNameproduct = this.changeNameproduct.bind(this);
    this.changeDescriptionproduct = this.changeDescriptionproduct.bind(this);
    this.changeQuantityproduct = this.changeQuantityproduct.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeNameproduct(event) {
    this.setState({
      nameproduct: event.target.value,
    });
  }

  changeDescriptionproduct(event) {
    this.setState({
      descriptionproduct: event.target.value,
    });
  }

  changeQuantityproduct(event) {
    this.setState({
      quantityproduct: event.target.value,
    });
  }

  handleImageChange(event) {
    this.setState({
      imageproduct: event.target.files[0],
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("nameproduct", this.state.nameproduct);
    formData.append("imageproduct", this.state.imageproduct);
    formData.append("descriptionproduct", this.state.descriptionproduct);
    formData.append("quantityproduct", this.state.quantityproduct);

    axios
      .post("http://127.0.0.1:4000/addproduct ", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));

    this.setState({
      nameproduct: "",
      imageproduct: null,
      descriptionproduct: "",
      quantityproduct: "",
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <img
                src="./addfront2.gif"
                alt="registerback"
                style={{
                  width: "85%",
                  borderRadius: "20%",
                  border: "solid rgb(189, 91, 219)",
                }}
              ></img>
            </div>

            <div className="col">
              <div className="form-div"></div>
              <form onSubmit={this.onSubmit}>
                <input
                  type="text"
                  placeholder="Name of product"
                  onChange={this.changeNameproduct}
                  value={this.state.nameproduct}
                  style={{ height: "80px" }}
                  className="form-control form-group"
                />
                <br />

                <input
                  type="text"
                  placeholder="Description"
                  value={this.state.descriptionproduct}
                  onChange={this.changeDescriptionproduct}
                  style={{ height: "80px" }}
                  className="form-control form-group"
                />
                <br />
                <input
                  type="text"
                  placeholder="Quantity"
                  onChange={this.changeQuantityproduct}
                  value={this.state.quantityproduct}
                  style={{ height: "80px" }}
                  className="form-control form-group"
                />
                <br />
                <input
                  type="file"
                  onChange={this.handleImageChange}
                  style={{ height: "80px" }}
                  className="form-control form-group"
                />
                <br />
                <input
                  type="submit"
                  style={{ height: "50px" }}
                  className="btn btn-danger btn-block"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Addpage;
