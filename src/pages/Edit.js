import React,{useEffect}from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Edit() {
  const { idUser } = useParams();
  let navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [job, setJob] = React.useState("");
  useEffect(() => {
    fetch(`https://reqres.in/api/users/${idUser}`, {
      method: "GET",
      headers: {
        token: Cookies.get("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setName(res.data.first_name);
        setJob(res.data.last_name);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const res = fetch(`https://reqres.in/api/users/${idUser}`, {
        method: "PUT",
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
    <>
      <div class="container">
        <div class="row">
          <div class="col-12 pt-5">
            <h1>Update Data</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-6 mt-5">
            <form onSubmit={handleSubmit}>
              <div class="mb-3 row">
                <label for="name" class="col-sm-2 col-form-label">
                  Name
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="email" class="col-sm-2 col-form-label">
                  Job
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    required
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                  />
                </div>
              </div>
              <button type="submit" class="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
