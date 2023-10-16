import '../App.css';
import React, { useState, useEffect } from "react"
import NavBar from './NavBar';
import ItemContainer from './ItemContainer'

function App() {
  const [snapshots, setSnapshots] = useState([])

  const getSnapshots = () => {
    fetch("http://localhost:6001/snapshots")
      .then((response) => response.json())
      .then((snapshotsArray) => setSnapshots(snapshotsArray))
  }

  useEffect(getSnapshots, [])

  return (
    <div className="App">
      <NavBar/>
      <ItemContainer
        snapshots={snapshots}
      />
    </div>
  );
}

export default App;
