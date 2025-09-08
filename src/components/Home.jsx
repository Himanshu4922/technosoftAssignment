import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));

  useEffect(() => {
    if (!userCredentials) {
      navigate("/signup");
    }
  }, [userCredentials, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userCredentials");
    toast.success("Log Out Successful");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {userCredentials && (
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
          <h1 className="text-3xl font-bold text-teal-600 mb-4">Welcome!</h1>
          <p className="text-gray-600 mb-8">You have successfully logged in.</p>

          <button
            onClick={handleLogout}
            className="flex items-center justify-center space-x-2 w-full bg-teal-600 text-white py-3 px-4 rounded-md hover:bg-teal-700 transition duration-200 font-semibold"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
