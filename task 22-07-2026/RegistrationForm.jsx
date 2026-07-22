import { useState } from "react";
import "../task 22-07-2026/RegistrationForm.css";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    gender: "",
    course: "",
    address: "",
    agree: false,
  });

  const [profile, setProfile] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must contain at least 6 characters";
    }

    if (!formData.gender) {
      newErrors.gender = "Select Gender";
    }

    if (!formData.course) {
      newErrors.course = "Select Course";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.agree) {
      newErrors.agree = "Accept Terms & Conditions";
    }

    if (!profile) {
      newErrors.profile = "Upload Profile Image";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert("Registration Successful!");

    console.log(formData);
    console.log(profile);

    setErrors({});
  };

  return (
    <div className="container">
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Full Name</label>

        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />

        {errors.fullName && (
          <span className="error">{errors.fullName}</span>
        )}

        <label>Email</label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        {errors.email && (
          <span className="error">{errors.email}</span>
        )}

        <label>Password</label>

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        {errors.password && (
          <span className="error">{errors.password}</span>
        )}

        <label>Gender</label>

        <div>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
          />
          Male

          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
          />
          Female
        </div>

        {errors.gender && (
          <span className="error">{errors.gender}</span>
        )}

        <label>Course</label>

        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
        >
          <option value="">Choose Course</option>
          <option value="React">React</option>
          <option value="Angular">Angular</option>
          <option value="Vue">Vue</option>
        </select>

        {errors.course && (
          <span className="error">{errors.course}</span>
        )}

        <label>Address</label>

        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
        />

        {errors.address && (
          <span className="error">{errors.address}</span>
        )}

        <label>Profile Image</label>

        <input
          type="file"
          onChange={(e) => setProfile(e.target.files[0])}
        />

        {errors.profile && (
          <span className="error">{errors.profile}</span>
        )}

        <div className="check">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />

          <label>I Accept Terms & Conditions</label>
        </div>

        {errors.agree && (
          <span className="error">{errors.agree}</span>
        )}

        <button type="submit">Register</button>
      </form>

      <div className="preview">
        <h2>Live Data</h2>

        <p><b>Name :</b> {formData.fullName}</p>

        <p><b>Email :</b> {formData.email}</p>

        <p><b>Gender :</b> {formData.gender}</p>

        <p><b>Course :</b> {formData.course}</p>

        <p><b>Address :</b> {formData.address}</p>

        <p><b>Terms :</b> {formData.agree ? "Accepted" : "Not Accepted"}</p>

        <p><b>File :</b> {profile ? profile.name : "No File Selected"}</p>
      </div>
    </div>
  );
}

export default RegistrationForm;