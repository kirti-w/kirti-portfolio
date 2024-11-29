import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>
        If you have any questions, comments, or collaboration ideas, feel free
        to reach out using the form below!
      </p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label for="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label for="message">Message:</label>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required></textarea>
        </div>
        <button type="submit" className="btn">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
