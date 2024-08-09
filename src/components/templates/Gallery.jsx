// src/Gallery.js
import React, { useState } from "react";
import gsap from "gsap";
import "./Gallery.css"; // Import the CSS for styling

const Gallery = () => {
  const images = [
    "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjYwODExNzUwMV5BMl5BanBnXkFtZTgwNTgwNjUyOTE@._V1_SX300.jpg",
    "https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_SX300.jpg",
    "https://m.media-amazon.com/images/M/MV5BNjk4MzVlM2UtZGM0ZC00M2M1LThkMWEtZjUyN2U2ZTc0NmM5XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg",
    "https://m.media-amazon.com/images/M/MV5BOWExYjI5MzktNTRhNi00Nzg2LThkZmQtYWVkYjRlYWI2MDQ4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTg2MTc0ODEwOV5BMl5BanBnXkFtZTgwNDAyOTY1MDI@._V1_SX300.jpg",
  ];

  const [clickedIndex, setClickedIndex] = useState(null);

  const expand = (index) => {
     
    setClickedIndex((prevIndex) => (prevIndex === index ? null : index));

    // GSAP animation for all items
    gsap.to(".item", {
      width: (i) => (i === index ? "30vw" : "7.5vw"), // Double size for clicked and smaller for others
      duration: 1,
      ease: "power2.out",
    });
  }

  return (
    <div className="group">
    {images.map((src, i) => (
      <div
        key={i}
        className={`item ${clickedIndex === i ? "expanded" : ""}`}
        style={{
          backgroundImage: `url(${src})`,
        }}
        onClick={() => expand(i)}
      ></div>
    ))}
  </div>
  );
};

export default Gallery;
