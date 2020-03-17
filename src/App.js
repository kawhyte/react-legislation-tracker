import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import BillsList from "./BillsList";
import axios from "axios";

function App() {
  const [bill, setBill] = useState([]);

  useEffect(() => {
    axios.get("https://paidleavetracker.herokuapp.com/track").then(res => {
      setBill(res.data.map(bill => bill.title));
    });
  }, []);

  return (
    <div>
      <BillsList bill={bill} />
    </div>
  );
}

export default App;
