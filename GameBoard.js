import React, { useState } from "react";
import { motion } from "framer-motion";
import "./GameBoard.css";

const shapes = ["circle", "square", "triangle"];

const GameBoard = () => {
  const [player, setPlayer] = useState({
    shape: "circle",
    x: 50,
    y: 100,
    stars: 50,
  });

  const movePlayer = (dx, dy) => {
    setPlayer((prev) => ({
      ...prev,
      x: prev.x + dx,
      y: prev.y + dy,
    }));
  };

  const changeShape = (newShape) => {
    setPlayer((prev) => ({ ...prev, shape: newShape }));
  };

  return (
    <div className="game-container">
      <motion.div
        className={`player ${player.shape}`}
        animate={{ left: player.x, top: player.y }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <span>{player.stars} ⭐</span>
      </motion.div>

      <div className="controls">
        <button onClick={() => movePlayer(-20, 0)}>⬅ Left</button>
        <button onClick={() => movePlayer(20, 0)}>Right ➡</button>
        <button onClick={() => movePlayer(0, -20)}>⬆ Up</button>
        <button onClick={() => movePlayer(0, 20)}>Down ⬇</button>
      </div>

      <div className="controls">
        {shapes.map((shape) => (
          <button key={shape} onClick={() => changeShape(shape)}>
            Transform to {shape}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
