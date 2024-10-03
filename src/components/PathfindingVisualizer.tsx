"use client";
import React, { useState, useEffect } from "react";
import Node from "./Node";
import { dijkstra, getNodesInShortestPathOrder } from "@/algorithims/dijkastra";
const START_NODE_ROW = 10;
const START_NODE_COL = 7;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 20;

export type TNode = {
  col: number;
  row: number;
  distance: number;
  isVisited: boolean;
  isWall: boolean;
  isStart: boolean;
  isFinish: boolean;
  previousNode: TNode | null;
  mouseIsPressed: boolean;
  onMouseDown: (row: number, col: number) => void;
  onMouseEnter: (row: number, col: number) => void;
  onMouseUp: () => void;
};

const PathfindingVisualizer: React.FC = () => {
  const [grid, setGrid] = useState<TNode[][]>([]);
  const [mouseIsPressed, setMouseIsPressed] = useState<boolean>(false);

  useEffect(() => {
    const initialGrid = getInitialGrid();
    setGrid(initialGrid);
  }, []);

  const handleMouseDown = (row: number, col: number) => {
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
    setMouseIsPressed(true);
  };

  const handleMouseEnter = (row: number, col: number) => {
    if (!mouseIsPressed) return;
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
  };

  const handleMouseUp = () => {
    setMouseIsPressed(false);
  };

  const animateDijkstra = (
    visitedNodesInOrder: TNode[],
    nodesInShortestPathOrder: TNode[]
  ) => {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`)!.className =
          "node node-visited";
      }, 10 * i);
    }
  };

  const animateShortestPath = (nodesInShortestPathOrder: TNode[]) => {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`)!.className =
          "node node-shortest-path";
      }, 50 * i);
    }
  };

  const visualizeDijkstra = () => {
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  };

  return (
    <div className="flex flex-col gap-2 w-fit mx-auto">
      <div className="flex  flex-col gap-1">
        {grid.map((row, rowIdx) => (
          <div className="flex gap-1">
            {row.map((node, nodeIdx) => {
              const { row, col, isFinish, isStart, isWall } = node;
              return (
                <Node
                  {...node}
                  key={nodeIdx}
                  col={col}
                  isFinish={isFinish}
                  isStart={isStart}
                  isWall={isWall}
                  mouseIsPressed={mouseIsPressed}
                  onMouseDown={(row, col) => handleMouseDown(row, col)}
                  onMouseEnter={(row, col) => handleMouseEnter(row, col)}
                  onMouseUp={handleMouseUp}
                  row={row}
                />
              );
            })}
          </div>
        ))}
      </div>
      <div className="flex justify-between  items-center">
        <p className="max-w-2xl">
          Visualize <strong>Dijkstra's Algorithm</strong>{" "}
          <span className="text-sm text-gray-500">
            (*This algorithm is used to find the shortest path between two nodes
            in a graph, create a wall between the start and finish nodes to make
            it interesting)
          </span>
        </p>
        <button onClick={visualizeDijkstra} className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Find
          </div>
        </button>
      </div>
    </div>
  );
};

const getInitialGrid = (): TNode[][] => {
  const grid: TNode[][] = [];
  for (let row = 0; row < 20; row++) {
    const currentRow: TNode[] = [];
    for (let col = 0; col < 28; col++) {
      currentRow.push(createNode(col, row));
    }
    grid.push(currentRow);
  }
  return grid;
};

const createNode = (col: number, row: number): TNode => {
  return {
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
    mouseIsPressed: false,
    onMouseDown: () => {},
    onMouseEnter: () => {},
    onMouseUp: () => {},
  };
};

const getNewGridWithWallToggled = (
  grid: TNode[][],
  row: number,
  col: number
): TNode[][] => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: !node.isWall,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};

export default PathfindingVisualizer;
