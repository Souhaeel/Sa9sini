import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/logIn",
        { email, password }
      );
      console.log(response.data);

      // use email, setEmail :
      // await:

      await localStorage.setItem("token", response.data.token);
      navigate("/");
      console.log("Login successful");
      console.log(localStorage.getItem("token"));
    } catch (error) {
      console.log("Login error:", error);
    }
  };
};
