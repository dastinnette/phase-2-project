import React from "react";

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
            <p>checkout our gallery and come back</p>
        </main>
    )
}

export default HomePage;