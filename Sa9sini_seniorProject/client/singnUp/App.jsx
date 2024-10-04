import axios from "axios";
import { useState } from "react";
const SignUp = () => {
  const navigate = useNavigate();
  const [UsertName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/signUp",
        {
          firstName,
          email,
          password,
        }
      );
      localStorage.setItem("token", response.data.token);
      navigate("/");
      console.log(response.data, "signup success");
    } catch (error) {
      console.log(error, "signup error");
    }
  };
};
