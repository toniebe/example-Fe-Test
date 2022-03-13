import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import Edit from '../pages/Edit';
import Login from '../pages/Login';
import Tambah from '../pages/Tambah';

export default function PRouter() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Dashboard />} />
            <Route path="/tambah" element={<Tambah />} />
            <Route path="/edit/:idUser" element={<Edit />} />
        </Routes>
    </Router>
  )
}
