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
            <h1>Welcome to StarViewer</h1>
            <p>checkout our {<NavLink className="nav-links" to={"/Gallery"}>Gallery</NavLink>}and come back for a treat 🔭</p>
        </main>
    )
}

export default HomePage;