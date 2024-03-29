import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contactpagemember = () => {
  return (
    <div>
      <div class="moi" style={{ height: "50px", width: "43.2%" }}>
        <d>
          <b>Contact</b>
        </d>
        <c> Me :</c>
      </div>
      <br></br>
      <div class="container" style={{ height: "800px", textAlign: "center" }}>
        <form>
          <div className="row">
            <div class="col">
              <h5 for="nom" s>
                {" "}
                Nom{" "}
              </h5>
              <input type="text" name="name" placeholder="Nom" required />
            </div>

            <div class="col">
              <h5 for="prenom" s>
                {" "}
                Prénom{" "}
              </h5>

              <input type="text" name="prenom" placeholder="Prénom" required />
            </div>
          </div>

          <div class="saut0"></div>
          <div className="row">
            <div class="col">
              <h5 for="email"> Email </h5>

              <input type="text" name="email" placeholder="Email" required />
            </div>

            <div class="col">
              <h5 for="numéro"> Numéro de téléphone </h5>

              <input
                type="text"
                name="phone"
                placeholder="Numéro de téléphone"
                required
              />
            </div>
          </div>
          <div class="saut0"></div>
          <div class="col">
            <h5 for="message"> Message </h5>
            <div class="from-group">
              <textarea name="message" rows="10" placeholder="Votre message" />
            </div>
          </div>
          <div class="saut0"></div>
          <div class="centrer">
            <input
              type="submit"
              className="btn btn-light"
              value="Send Message"
              style={{ width: "30%", height: "30%", color: "#000" }}
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactpagemember;
