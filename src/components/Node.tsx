import React from "react";
import "./Node.css";
import { TNode } from "./PathfindingVisualizer";
import { FaCircleMinus } from "react-icons/fa6";
import { FaRegDotCircle } from "react-icons/fa";

const Node: React.FC<TNode> = ({
  col,
  isFinish,
  isStart,
  isWall,
  onMouseDown,
  onMouseEnter,
  onMouseUp,
  row,
}) => {
  const extraClassName = isFinish
    ? "node-finish"
    : isStart
    ? "node-start"
    : isWall
    ? "node-wall"
    : "";

  return (
    <div
      id={`node-${row}-${col}`}
      className={`node ${extraClassName}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={onMouseUp}
    >
      {isStart && isFinish && "S"}
    </div>
  );
};

export default Node;
