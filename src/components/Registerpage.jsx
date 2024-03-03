import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class Registerpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      username: "",
      email: "",
      password: "",
    };

    this.changeFullName = this.changeFullName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeFullName(event) {
    this.setState({
      fullName: event.target.value,
    });
  }
  changeUsername(event) {
    this.setState({
      username: event.target.value,
    });
  }
  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const registered = {
      fullName: this.state.fullName,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post("http://127.0.0.1:4000/api/signup ", registered)
      .then((response) => console.log(response.data));

    this.setState({
      fullName: "",
      username: "",
      email: "",
      password: "",
    });
  }
  render() {
    const { fullName, username, email, password } = this.state;
    const isFormValid = fullName && username && email && password;

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <center>
                <h2 className="bold">
                  Créez votre compte
                </h2>
              </center>   
              <br></br>           
              <form onSubmit={this.onSubmit}>
                <input
                  type="text"
                  placeholder="Full Name"
                  onChange={this.changeFullName}
                  value={fullName}
                  style={{ height: "80px" }}
                  className="form-control form-group"
                />
                <br></br>
                <input
                  type="text"
                  placeholder="Username"
                  onChange={this.changeUsername}
                  value={username}
                  style={{ height: "80px" }}
                  className="form-control form-group"
                />
                <br></br>
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={this.changeEmail}
                  style={{ height: "80px" }}
                  className="form-control form-group"
                />
                <br></br>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={this.changePassword}
                  value={password}
                  style={{ height: "80px" }}
                  className="form-control form-group"
                />
                <br></br>
                <input
                  type="submit"
                  style={{ height: "50px" }}
                  className={`btn btn-danger btn-block ${isFormValid ? "" : "disabled"}`}
                  value="Submit"
                  disabled={!isFormValid}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Registerpage;
