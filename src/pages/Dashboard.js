import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";


export default function Dashboard() {
  const [data, setData] = React.useState([]);
  let navigation = useNavigate();
  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2", {
      method: "GET",
      headers: {
        token: Cookies.get("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      });
  });

  const handleDelete =  (id) => {
    const res = fetch(`https://reqres.in/api/users/${id}`, {
      method: "DELETE",
        headers: {
            token: Cookies.get("token"),
        },
    })
      .then((res) =>  res.json())
      .then((res) => {
        console.log(res);
        setData(data.filter((item) => item.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(res);
  };

  const handleEdit = (id) => {
    navigation(`/edit/${id}`);
    };

  return (
    <div>
      <h1 className="container mt-5">Dashboard</h1>
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table">
              <tr>
                <th>No.</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.first_name}</td>
                  <td>{item.email}</td>
                  <td>
                    <button className="btn btn-primary" onClick={() => handleEdit(item.id)}>Edit</button>
                    <button
                      className="btn btn-danger"
                      value={item.id}
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </table>
            <br />
            <a href="#">&larr;</a>
            <a href="#">1</a>
            <a href="#">&rarr;</a>
            <br />
            <br />
            <Link to={"/tambah"}>
              <a className="btn btn-primary">Tambah Data</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
