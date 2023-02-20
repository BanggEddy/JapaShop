import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//Axios permet de passer les données dans le backend, mongoDB
import axios from "axios";

class Adminpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameadmin: "",
      passwordadmin: "",
    };

    //pass the data as an argument to the function of a class based component. (if we don't have, in the console of F12 will show errors)
    this.changeUsernameAdmin = this.changeUsernameAdmin.bind(this);
    this.changePasswordAdmin = this.changePasswordAdmin.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  //permet de changer et le sauvegarde le value du constructor() dans this.state
  //Change the this.state value
  //Take the value of the event and save it
  changeUsernameAdmin(event) {
    this.setState({
      usernameadmin: event.target.value,
    });
  }
  changePasswordAdmin(event) {
    this.setState({
      passwordadmin: event.target.value,
    });
  }
  //Il permet de garder the value of all datas
  //The all page refresh
  onSubmit(event) {
    event.preventDefault();

    //Il est enregistré dans registered et ensuite on le met dans le backend
    const loginadmin = {
      usernameadmin: this.state.usernameadmin,
      passwordadmin: this.state.passwordadmin,
    };
    //Send to the server(in this port), and the registered send to this port, and the port will send to mongodb
    axios
      .post("http://127.0.0.1:4000/app/loginadmin ", loginadmin)
      .then((response) => console.log(response.data));

    this.setState({
      usernameadmin: "",
      passwordadmin: "",
    });
  }

  //Front and take the value
  /*onChange permet de déclancher les méthodes pour faire des actions '' */

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <img
                src="./adminfront4.gif"
                alt="registerback"
                style={{ width: "45%" }}
              ></img>
            </div>

            <div className="col">
              <div className="form-div"></div>
              <form onSubmit={this.onSubmit}>
                <br></br>
                <input
                  type="text"
                  placeholder="Username"
                  onChange={this.changeUsernameAdmin}
                  value={this.state.usernameadmin}
                  style={{ height: "80px" }}
                  className="form-control form-group"
                />
                <br></br>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={this.changePasswordAdmin}
                  value={this.state.passwordadmin}
                  style={{ height: "80px" }}
                  className="form-control form-group"
                />
                <br></br>
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

export default Adminpage;
