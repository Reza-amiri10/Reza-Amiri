import React, { useState, useEffect } from "react";
import "../assets/styles/ContactCard.css";

export default function ContactCard() {
  const [formData, setFormData] = useState({
    nfName: "",
    lName: "",
    country: "",
    email: "",
    phNumber: "",
    sobject: "",
    textarea: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    setFormData({
      fName: "",
      lName: "",
      country: "",
      email: "",
      phNumber: "",
      subject: "",
      textarea: "",
    });
  };
  return (
    <div className="contact-box">
      <form onSubmit={handleSubmit}>
        <label>
          <div className="fname-lname">
            <input
              id="f-name"
              type="text"
              name="fName"
              placeholder="First Name"
              onChange={handleChange}
              required
            />
            <input
              id="l-name"
              type="text"
              name="lName"
              placeholder="Last Name"
              onChange={handleChange}
              required
            />
            <div className="custom-select">
              <select
                className="select-country"
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Country
                </option>
                <option value="US">United States</option>
                <option value="TR">Turkey</option>
                <option value="CA">Canada</option>
                <option value="AUS">Australia</option>
                <option value="GR">Germany</option>
              </select>
            </div>
          </div>
          <div>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />
            <br />
            <input
              id="ph-number"
              type="text"
              name="phNumber"
              placeholder="Phone Number"
              onChange={handleChange}
              required
            />
            <br />
            <input
              id="sobject"
              type="text"
              name="sobject"
              placeholder="Sobject"
              onChange={handleChange}
              required
            />
            <br />
            <textarea
              id="textarea"
              typeof="text"
              name="textarea"
              placeholder="I want to contact you about..."
              onChange={handleChange}
            ></textarea>
            <br />
            <input id="submit" type="submit" />
          </div>
        </label>
      </form>
    </div>
  );
}
