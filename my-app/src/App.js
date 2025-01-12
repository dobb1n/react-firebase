import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import db from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import './App.css';

function App() {
  const [items, setInfo] = useState([]);

  // Fetch data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "frontPageInfo"));
        const pageData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setInfo(pageData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
        {items.map((item) => (
          <li key={item.id}>
            <strong>Name:</strong> {item.title} <br />
            <strong>Email:</strong> {item.body}
          </li>
        ))}
      </ul>
      </header>
    </div>
  );
}

export default App;
