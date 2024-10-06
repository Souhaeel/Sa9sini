import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!userName || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/signUp",
        {
          userName,
          email,
          password,
          role,
        }
      );

      localStorage.setItem("token", response.data.token);
      navigate("/");
      console.log(response.data, "signup success");
    } catch (error) {
      console.error(error, "signup error");
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {}
      <div>
        <label>Role:</label>
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </div>
      {error && <div style={{ color: "red" }}>{error}</div>} {error}
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
