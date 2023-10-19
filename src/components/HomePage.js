import React from "react";
import { useOutletContext } from "react-router-dom";
import FavoriteItem from "./FavoriteItem";
function HomePage() {
    const { favoritesBar } = useOutletContext();

    const renderSnapShots = favoritesBar.map((favorite) => (
        <FavoriteItem
            key={favorite.id}
            favorite={favorite}
        />
    ))
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
            <div id="image-track" className="image-track">
                {renderSnapShots}
            </div>
        </main>
    )
}

export default HomePage;