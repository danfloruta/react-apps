import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const navigate = useNavigate();
  const form = useRef();

  const handleOnChange = (value) => {
    console.log("Captcha Value:", value);
  };
  const submitForm = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0olgfka",
        "template_uazie6e",
        form.current,
        "Yn6Z9epSHa8X_etk9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    navigate("/");
  };
  return (
    <div className="contact">
      <h1>Contact</h1>
      <form ref={form} onSubmit={submitForm} className="form">
        <div className="name new-input">
          <label htmlFor="name">Name:</label>
          <input className="input" type="text" name="name" id="name" />
        </div>
        <div className="email new-input">
          <label htmlFor="email">Email:</label>
          <input className="input" type="email" name="email" id="email" />
        </div>

        <div className="message new-input"></div>
        <label htmlFor="message">Contact Us:</label>
        <textarea
          className="input"
          name="message"
          id="message"
          cols="30"
          rows="10"
        ></textarea>
        <div className="submit">
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={handleOnChange}
          />
          <button type="submit" className="btn btn-info button-contact">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
