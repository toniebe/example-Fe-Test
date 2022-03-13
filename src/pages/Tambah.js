import React from "react";
import Input from "../components/Input";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Tambah() {
  const [name, setName] = React.useState("");
  const [job, setJob] = React.useState("");
  let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const res = fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: Cookies.get("token"),
      },
      body: JSON.stringify({
        name,
        job,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        navigate("/home");
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 pt-5">
          <h1>Tambah Data</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-6 mt-5">
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              label="Nama"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="text"
              label="Job"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
