import React from "react";
import { NavLink } from 'react-router-dom';
function HomePage() {
    return(
        <main className="background" style={{
            height: "100vh",
            backgroundImage:'url(../AppBackground.jpg)',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            color: "#00B8A9",
        }}> 
            <br></br>
            <h1>Welcome to Starviews</h1>
            <p>checkout our {<NavLink className="home-link" to={"/Gallery"}>Gallery</NavLink>} and come back for a treat 🔭</p>
        </main>
    )
}

export default HomePage;