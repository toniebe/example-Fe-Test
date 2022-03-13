import React from "react";
import Input from "../components/Input";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const res = fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        Cookies.set("token", res.token);
        navigate("/home");
      });
  };


  return (
    <div className="container">
      <div className="row justify-content-center mt-5 pt-5">
        <div className="col-4 card p-5 shadow">
          <h3 className="text-center mb-3 text-secondary">Login Admin</h3>
          <form onSubmit={handleSubmit}>
            <Input
              type={"email"}
              label={"Email Address"}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              type={"password"}
              label={"Password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberme"
              />
              <label className="form-check-label" for="rememberme">
                Remember me
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
