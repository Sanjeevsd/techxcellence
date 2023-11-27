import React, { Component, useState } from "react";
const MySwal = withReactContent(Swal);
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Loader from "../Layouts/Loader";
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

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const AnalysisFormContent = () => {
  const [contact, setContact] = useState(INITIAL_STATE);

  const [loading, setloading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };

  const handleSubmit = async (e) => {
    setloading(true);
    e.preventDefault();
    try {
      const url = `https://techxcellencenpl.com/api/contact`;
      const { name, email, number, subject, text } = contact;
      const payload = { name, email, number, subject, text };
      const response = await axios.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };

  return (
    <section className="analysis-section">
      <Loader loading={loading} />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="analysis-image">
              <img
                src="/images/query.jpg"
                alt="image"
                style={{ borderRadius: "8px" }}
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="analysis-area-content">
              <span>Contact Us</span>
              <h3>Maximize Your Business's Reach?</h3>
              {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p> */}
            </div>

            <form className="contactForm" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Your Name *"
                      value={contact.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Email *"
                      value={contact.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="form-control"
                      placeholder="Phone *"
                      value={contact.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="text"
                      id="text"
                      className="form-control"
                      placeholder="Message *"
                      value={contact.text}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="send-btn">
                <button type="submit" className="default-btn-one">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalysisFormContent;
