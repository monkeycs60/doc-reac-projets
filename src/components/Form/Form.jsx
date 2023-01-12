import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Form.css";
import DataForm from "../DataForm/DataForm.jsx";

const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    dob: null,
    location: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const resetForm = () => {
    setFormData({
      username: "",
      dob: null,
      location: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const usernameRegex = /^[a-zA-Z]{6,10}$/;
  const emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, dob, location, email, password, confirmPassword } =
      formData;
    const isInvalidUsername = !usernameRegex.test(username);
    const isInvalidEmail = !emailRegex.test(email);
    const isInvalidPassword = !passwordRegex.test(password);
    const isEmptyField = !(
      username &&
      dob &&
      location &&
      email &&
      password &&
      confirmPassword
    );

    isEmptyField && alert("All fields are required");
    isInvalidUsername &&
      alert(
        "Invalid username. It should have only letters, between 6 and 10 characters"
      );
    isInvalidEmail && alert("Invalid email");
    isInvalidPassword &&
      alert(
        "Invalid password. It should be at least 6 characters long, with at least one number and one special character"
      );
    password !== confirmPassword && alert("Passwords do not match");
    !(
      isInvalidUsername ||
      isInvalidEmail ||
      isInvalidPassword ||
      isEmptyField
    ) &&
      password === confirmPassword &&
      (alert("Form submitted successfully!"),
      resetForm(),
      localStorage.setItem("formData", JSON.stringify(formData)),
      window.location.reload(),
      console.log(formData.username, formData.dob)
      );
      };
  

  const handleChange = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const handleDobChange = (date) =>
    setFormData({
      ...formData,
      dob: date,
    });

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          value={formData.username}
          onChange={handleChange}
        />
        <br />
        <div className="dateSpace">
          <label htmlFor="dob">Date of Birth:</label>
          <DatePicker
            selected={formData.dob}
            onChange={handleDobChange}
            id="dob"
          />
        </div>
        <br />
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          name="location"
          id="location"
          value={formData.location}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <button onClick={resetForm}>Clear Form</button>
      <DataForm />
    </div>
  );
};

export default Form;
