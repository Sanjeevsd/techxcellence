import React, { Component, useState } from "react";
import baseUrl from "../../utils/baseUrl";
import axios from "axios";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Loader from "../Layouts/Loader";
const MySwal = withReactContent(Swal);
const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};
const SubscribeStyleTwo = () => {
  const [email, setemail] = useState("");
  const [loading, setloading] = useState(false);
  const handleSubmit = async (e) => {
    setloading(true);
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/subscribe`;
      // const url = `/api/subscribe`;

      const payload = { email };
      const response = await axios.post(url, payload);
      setemail("");
      alertContent();
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };
  return (
    <section className="subscribe-section">
      <Loader loading={loading} />
      <div className="container">
        <div className="subscribe-area-content">
          <div className="subscribe-content">
            <span className="sub-title">Get Started Instantly!</span>
            <h2>Get the only new update from this newsletter</h2>

            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                className="input-newsletter"
                placeholder="Enter your email"
                name="EMAIL"
                required
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeStyleTwo;
