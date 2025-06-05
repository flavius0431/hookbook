import { useState } from "react";
import useForm from "../hooks/useForm";

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Form() {
  const { values, handleChange, reset } = useForm({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!values.name.trim()) newErrors.name = "Name is required";
    if (!values.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(values.email)) {
      newErrors.email = "Invalid email address";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmittedData(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Form</h2>

      <div>
        <input
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          style={{ borderColor: errors.name ? "red" : "" }}
        />
        {errors.name && (
          <div style={{ color: "red", fontSize: "0.8rem" }}>{errors.name}</div>
        )}
      </div>

      <div>
        <input
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          style={{ borderColor: errors.email ? "red" : "" }}
        />
        {errors.email && (
          <div style={{ color: "red", fontSize: "0.8rem" }}>{errors.email}</div>
        )}
      </div>

      <button type="submit">Submit</button>

      {submittedData && (
        <div style={{ marginTop: 20 }}>
          <h3>Submitted Data:</h3>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
        </div>
      )}
    </form>
  );
}
