import '../App.css';
import React, { useState, useEffect } from "react"
import NavBar from './NavBar';
import ItemContainer from './ItemContainer'

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

  return (
    <div className="App">
      <NavBar 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
        onNewSnapshot={onNewSnapshot}
      />
      <ItemContainer
        snapshots={snapshots}
        searchValue={searchValue}
      />
    </div>
  );
}

export default App;
