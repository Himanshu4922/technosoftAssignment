import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "./InputField";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const userCredentials = JSON.parse(
    localStorage.getItem("userCredentials")
  ) || {
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };
  //   console.log(userCredentials.username);
  //   console.log(userCredentials.password);

  const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    if (!username) return "Username is required";
    if (!usernameRegex.test(username))
      return "Username can only contain alphanumeric characters and special characters";
    if (userCredentials.username !== username) return "User does not exists";
    return "";
  };

  const validatePassword = (password) => {
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    if (!password) return "Password is required";
    if (!passwordRegex.test(password))
      return "Password can only contain alphanumeric characters and special characters";
    if (userCredentials.password !== password) return "Incorrect Password";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    let error = "";
    if (name === "username") {
      error = validateUsername(value);
    } else if (name === "password") {
      error = validatePassword(value);
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const usernameError = validateUsername(formData.username);
    const passwordError = validatePassword(formData.password);

    setErrors({
      username: usernameError,
      password: passwordError,
    });

    if(usernameError==="User does not exists"){
      toast.error("Signup first to login");
    }

    if (!usernameError && !passwordError) {
      //   console.log("Login successful:", formData);
      toast.success("Login Successful");
      navigate("/home");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-teal-600 text-white text-center py-8">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-teal-100 mt-2">Sign in to continue</p>
          </div>

          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <InputField
                label="USERNAME"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                error={errors.username}
                placeholder="Enter your username"
              />

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

              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-3 rounded-md hover:bg-teal-700 transition duration-200 font-semibold text-lg"
              >
                LOGIN
              </button>

              <div className="text-center mt-6">
                <span className="text-gray-600">Don't have Account? </span>
                <Link
                  to="/signup"
                  className="text-teal-600 hover:text-teal-700 font-semibold underline"
                >
                  SignUp
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
