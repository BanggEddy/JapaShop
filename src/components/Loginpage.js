import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Loginpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
    };

    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeUsername(event) {
    this.setState({
      username: event.target.value,
    });
  }

  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const login = {
      username: this.state.username,
      password: this.state.password,
    };

    axios
      .post("http://127.0.0.1:4000/api/login", login)
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          const redirectTo = response.data.redirectTo;
          this.props.history.push(redirectTo);
        } else {
          this.setState({ error: response.data.message });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        this.setState({
          error: "Une erreur s'est produite lors de la connexion.",
        });
      });

    this.setState({
      username: "",
      password: "",
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="form-div"></div>
              <center>
                <h2 className="bold">Connectez-vous à votre compte</h2>
              </center>
              <form onSubmit={this.onSubmit}>
                <br />
                <input
                  type="text"
                  placeholder="Username"
                  onChange={this.changeUsername}
                  value={this.state.username}
                  style={{ height: "80px" }}
                  className="form-control form-group"
                />
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={this.changePassword}
                  value={this.state.password}
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
              {this.state.error && <p>{this.state.error}</p>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loginpage;
