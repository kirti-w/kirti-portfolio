import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [successStatus, setSuccessStatus] = useState(0);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    // name field
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } //Validate the email
    else {
      var re = /\S+@\S+\.\S+/;
      if (formData.email.trim() && !re.test(formData.email))
        newErrors.email = "Invalid email";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";

    // set errrors
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);

      emailjs
        .send(
          "service_vld9w29",
          "template_i8a4vdw",
          {
            from_name: formData.name,
            message: formData.message,
            reply_to: formData.email,
          },
          "_PVcDThDqrkiLzurH"
          //"_PVcDThDqrkiLzurH"
        )
        .then(
          (result) => {
            setSuccessStatus(1);
            setStatusMessage("Message sent successfully!");
            setIsSubmitting(false);
          },
          (error) => {
            setStatusMessage("Something went wrong, please try again later.");
            setIsSubmitting(false);
            setSuccessStatus(0);
          }
        );
    }

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      {successStatus === 0 && (
        <p>
          If you have any questions, comments, or collaboration ideas, feel free
          to reach out using the form below!
        </p>
      )}

      {successStatus === 0 && (
        <form
          onSubmit={handleSubmit}
          className="contact-form"
          disabled="{isSubmitting}">
          {statusMessage && successStatus === 0 && (
            <p className="error">{statusMessage}</p>
          )}

          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <button type="submit" className="btn" disabled={isSubmitting}>
            {isSubmitting && <i class="fa fa-refresh fa-spin"></i>}
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
      )}

      {successStatus === 1 && <p className="success">{statusMessage}</p>}
    </div>
  );
};

export default Contact;
