import { useState } from "react";

function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    let newErrors = {};

    if (formData.name === "") {
      newErrors.name = "Name Required";
    }

    if (formData.email === "") {
      newErrors.email = "Email Required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form Submitted");
    }
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />

      <p>{errors.name}</p>

      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <p>{errors.email}</p>

      <button>Submit</button>

    </form>
  );
}

export default EmployeeForm;