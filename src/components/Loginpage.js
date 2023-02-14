import React from 'react';

const Loginpage = () => {
    return (
<div>
        <div className="container">
          <div className="row">
            <div className="col">
              <img
                src="./kaido.gif"
                alt="registerback"
                style={{ width: "85%" }}
              ></img>
            </div>

            <div className="col">
              <div className="form-div"></div>
              <form>
                <input
                  type="text"
                  placeholder="Full Name"
                  style={{ height: "80px" }}
                  className="form-control form-group"
                />
                <br></br>
                <input
                  type="text"
                  placeholder="Username"
                  style={{ height: "80px" }}
                  className="form-control form-group"
                />
                <br></br>
                <input
                  type="text"
                  placeholder="Email"
                  style={{ height: "80px" }}
                  className="form-control form-group"
                />
                <br></br>
                <input
                  type="password"
                  placeholder="Password"
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
};

export default Loginpage;