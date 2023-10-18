import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import React, { useState, useEffect } from "react"
import NavBar from './NavBar';
//import ItemContainer from './ItemContainer'

function App() {
  const [snapshots, setSnapshots] = useState([])
  const [searchValue,setSearchValue]=useState("")
  const getSnapshots = () => {
    fetch("http://localhost:6001/snapshots")
      .then((response) => response.json())
      .then((snapshotsArray) => setSnapshots(snapshotsArray))
  }

  useEffect(getSnapshots, [])

  function onNewSnapshot(newSnapshot) {
    setSnapshots((currentStateSnapshots) => [
      newSnapshot, 
      ...currentStateSnapshots,
    ])
  }
  const context = {
    snapshots,
    searchValue,
    onNewSnapshot,
    searchValue,
    setSearchValue,
  }
  return (
    <div className="App">
      <NavBar />
      <Outlet context={context}/>
    </div>
  );
}

export default App;
