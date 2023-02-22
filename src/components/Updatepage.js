import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//Axios permet de passer les données dans le backend, mongoDB
import axios from "axios";

class Updatepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameproduct: "",
      imageproduct: "",
      descriptionproduct: "",
      quantityproduct: "",
      dateproduct: "",
    };

    //pass the data as an argument to the function of a class based component. (if we don't have, in the console of F12 will show errors)
    this.changeNameproduct = this.changeNameproduct.bind(this);
    this.changeImageproduct = this.changeImageproduct.bind(this);
    this.changeDescriptionproduct = this.changeDescriptionproduct.bind(this);
    this.changeQuantityproduct = this.changeQuantityproduct.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  //permet de changer et le sauvegarde le value du constructor() dans this.state
  //Change the this.state value
  //Take the value of the event and save it
  changeNameproduct(event) {
    this.setState({
      nameproduct: event.target.value,
    });
  }
  changeImageproduct(event) {
    this.setState({
      imageproduct: event.target.value,
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
  //Il permet de garder the value of all datas
  //The all page refresh
  onSubmit(event) {
    event.preventDefault();

    //Il est enregistré dans registered et ensuite on le met dans le backend
    const registered = {
      nameproduct: this.state.nameproduct,
      imageproduct: this.state.imageproduct,
      descriptionproduct: this.state.descriptionproduct,
      quantityproduct: this.state.quantityproduct,
    };
    //Send to the server(in this port), and the registered send to this port, and the port will send to mongodb
    axios
      .post("http://127.0.0.1:4000/app/updateproduct ", registered)
      .then((response) => console.log(response.data));

    this.setState({
        nameproduct: "",
        imageproduct: "",
        descriptionproduct: "",
        quantityproduct: "",
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
                src="./addfront2.gif"
                alt="registerback"
                style={{ width: "85%", borderRadius :"20%", border:  "solid rgb(189, 91, 219)", }}
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
                <br></br>

                <input
                  type="text"
                  placeholder="Description"
                  value={this.state.descriptionproduct}
                  onChange={this.changeDescriptionproduct}
                  style={{ height: "80px" }}
                  className="form-control form-group"
                />
                <br></br>
                <input
                  type="text"
                  placeholder="Quantity"
                  onChange={this.changeQuantityproduct}
                  value={this.state.quantityproduct}
                  style={{ height: "80px" }}
                  className="form-control form-group"
                />
                <br></br>
                <input
                  type="text"
                  placeholder="Image"
                  onChange={this.changeImageproduct}
                  value={this.state.imageproduct}
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

export default Updatepage;
