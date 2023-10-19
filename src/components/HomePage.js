import React, { useState, useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import FavoriteItem from "./FavoriteItem";
import { NavLink } from 'react-router-dom';

function HomePage() {
    //start of code for track
    const [mouseDownAt, setMouseDownAt] = useState(0);
    const [prevPercentage, setPrevPercentage] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const handleOnDown = (e) => {
    setMouseDownAt(e.clientX);
    };
    const handleOnUp = () => {
        setMouseDownAt(0);
        setPrevPercentage(percentage);
    };
    const handleOnMove = (e) => {
    if (mouseDownAt === 0) return;
    const mouseDelta = parseFloat(mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;
      const nextPercentageUnconstrained = prevPercentage + (mouseDelta / maxDelta) * -100;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
    setPercentage(nextPercentage);
    };
    useEffect(() => {
        window.addEventListener('mousedown', handleOnDown);
        window.addEventListener('touchstart', (e) => handleOnDown(e.touches[0]));
        window.addEventListener('mouseup', handleOnUp);
        window.addEventListener('touchend', (e) => handleOnUp(e.touches[0]));
        window.addEventListener('mousemove', handleOnMove);
        window.addEventListener('touchmove', (e) => handleOnMove(e.touches[0]));  
    return () => {
        window.removeEventListener('mousedown', handleOnDown);
        window.removeEventListener('touchstart', (e) => handleOnDown(e.touches[0]));
        window.removeEventListener('mouseup', handleOnUp);
        window.removeEventListener('touchend', (e) => handleOnUp(e.touches[0]));
        window.removeEventListener('mousemove', handleOnMove);
        window.removeEventListener('touchmove', (e) => handleOnMove(e.touches[0]));
    };
    }, [prevPercentage, percentage]);
    //end of code for track
    const { favoritesBar } = useOutletContext();

    const renderFavoriteBar = favoritesBar.map((favorite) => (
        <FavoriteItem
            key={favorite.id}
            favorite={favorite}
            draggable={"false"}
            onMouseDown={handleOnDown}
            onMouseUp={handleOnUp}
            onMouseMove={handleOnMove}
            onTouchStart={(e) => handleOnDown(e.touches[0])}
            onTouchEnd={(e) => handleOnUp(e.touches[0])}
            onTouchMove={(e) => handleOnMove(e.touches[0])}
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
            <br></br>
            <h1>Welcome to Starviews</h1>
             <p>checkout our {<NavLink className="home-link" to={"/Gallery"}>Gallery</NavLink>} and come back for a treat 🔭</p>
            <div id="image-track" className="image-track" style={{
          transform: `translate(${percentage}%, -50%)`,
        }}>
                {renderFavoriteBar}
            </div>
        </main>
    )
}

export default HomePage;