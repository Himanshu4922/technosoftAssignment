import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s]*$/;
    if (!name) return "Name is required";
    if (!nameRegex.test(name)) return "Name can only contain alphabets";
    return "";
  };

  const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    if (!username) return "Username is required";
    if (!usernameRegex.test(username))
      return "Username can only contain alphanumeric and special characters";
    return "";
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Email must be a valid Gmail address";
    return "";
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^(\+\d{1,3}[-.\s]?)?\d{10}$/;
    if (!phone) return "Phone number is required";
    if (!phoneRegex.test(phone))
      return "Phone must include country code and valid phone number";
    return "";
  };

  const validatePassword = (password) => {
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    if (!password) return "Password is required";
    if (!passwordRegex.test(password))
      return "Password can only contain alphanumeric characters and special characters";
    if (password === formData.username)
      return "Password cannot be the same as username";
    return "";
  };

  const validateConfirmPassword = (confirmPassword) => {
    if (!confirmPassword) return "Confirm password is required";
    if (confirmPassword !== formData.password) return "Passwords do not match";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    let error = "";
    switch (name) {
      case "name":
        error = validateName(value);
        break;
      case "username":
        error = validateUsername(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "phone":
        error = validatePhone(value);
        break;
      case "password":
        error = validatePassword(value);
        break;
      case "confirmPassword":
        error = validateConfirmPassword(value);
        break;
      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameError = validateName(formData.name);
    const usernameError = validateUsername(formData.username);
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);
    const passwordError = validatePassword(formData.password);
    const confirmPasswordError = validateConfirmPassword(
      formData.confirmPassword
    );

    setErrors({
      name: nameError,
      username: usernameError,
      email: emailError,
      phone: phoneError,
      password: passwordError,
      confirmPassword: confirmPasswordError,
    });

    if (
      !nameError &&
      !usernameError &&
      !emailError &&
      !phoneError &&
      !passwordError &&
      !confirmPasswordError
    ) {
    //   console.log("Sign up successful:", formData);
      localStorage.setItem("userCredentials",JSON.stringify(formData));
      toast.success("Form submitted successfully!");
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-teal-600 text-white text-center py-8">
            <h1 className="text-3xl font-bold">Create new Account</h1>
          </div>

          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* first row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="NAME"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="Enter your full name"
                />
                <InputField
                  label="USERNAME"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  error={errors.username}
                  placeholder="Enter your username"
                />
              </div>

              {/* second row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="EMAIL"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="Enter your Gmail address"
                />
                <InputField
                  label="PHONE NO."
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  placeholder="Enter phone with country code"
                />
              </div>

              {/* third row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="NEW PASSWORD"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  error={errors.password}
                  placeholder="Enter your password"
                  showPasswordToggle
                />
                <InputField
                  label="CONFIRM NEW PASSWORD"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={errors.confirmPassword}
                  placeholder="Confirm your password"
                  showPasswordToggle
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-3 rounded-md hover:bg-teal-700 transition duration-200 font-semibold text-lg"
                >
                  SIGN UP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
