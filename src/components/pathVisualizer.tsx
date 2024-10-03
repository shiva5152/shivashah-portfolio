"use client";
import React, { useState, useEffect } from "react";

interface Node {
  row: number;
  col: number;
  isStart: boolean;
  isEnd: boolean;
  distance: number;
  isVisited: boolean;
  isPath: boolean;
  previousNode?: Node | null;
}

const initializeGrid = (): Node[][] => {
  const grid: Node[][] = [];
  for (let row = 0; row < 20; row++) {
    const currentRow: Node[] = [];
    for (let col = 0; col < 20; col++) {
      currentRow.push({
        row,
        col,
        isStart: row === 0 && col === 0,
        isEnd: row === 2 && col === 2,
        distance: Infinity,
        isVisited: false,
        isPath: false,
        previousNode: null,
      });
    }
    grid.push(currentRow);
  }
  return grid;
};

const dijkstra = (grid: Node[][], startNode: Node, endNode: Node): void => {
  const unvisitedNodes = getAllNodes(grid);
  startNode.distance = 0;
  while (!!unvisitedNodes.length) {
    sortNodesByDistance(unvisitedNodes);
    const closestNode = unvisitedNodes.shift();
    if (!closestNode || closestNode.distance === Infinity) return;
    closestNode.isVisited = true;
    if (closestNode === endNode) return;
    updateUnvisitedNeighbors(closestNode, grid);
  }
};

const getAllNodes = (grid: Node[][]): Node[] => {
  const nodes: Node[] = [];
  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }
  return nodes;
};

const sortNodesByDistance = (unvisitedNodes: Node[]): void => {
  unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
};

const updateUnvisitedNeighbors = (node: Node, grid: Node[][]): void => {
  const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
  for (const neighbor of unvisitedNeighbors) {
    neighbor.distance = node.distance + 1;
    neighbor.previousNode = node;
  }
};

const getUnvisitedNeighbors = (node: Node, grid: Node[][]): Node[] => {
  const neighbors: Node[] = [];
  const { row, col } = node;
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  return neighbors.filter((neighbor) => !neighbor.isVisited);
};

const getNodesInShortestPathOrder = (endNode: Node): Node[] => {
  const nodesInShortestPathOrder: Node[] = [];
  let currentNode: Node | null = endNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode || null;
  }
  return nodesInShortestPathOrder;
};

const PathVisualizer: React.FC = () => {
  const [grid, setGrid] = useState<Node[][]>(initializeGrid);

  useEffect(() => {
    const startNode = grid[0][0];
    const endNode = grid[19][19];
    dijkstra(grid, startNode, endNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(endNode);
    for (const node of nodesInShortestPathOrder) {
      node.isPath = true;
    }
    setGrid([...grid]);
  }, [grid]);

  const getNodeStyle = (node: Node) => {
    if (node.isStart) return { ...boxStyle, backgroundColor: "green" };
    if (node.isEnd) return { ...boxStyle, backgroundColor: "red" };
    if (node.isPath) return { ...boxStyle, backgroundColor: "white" };
    return { ...boxStyle, backgroundColor: "black" };
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(20, 1fr)",
    gap: "2px",
  };

  const boxStyle = {
    width: "25px",
    height: "25px",
    border: "1px solid white",
  };
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(0);

  const handleStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStart(parseInt(e.target.value));
  };

  const handleEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnd(parseInt(e.target.value));
  };

  return (
    <div className="w-[70%]" style={gridStyle}>
      {grid.map((row, rowIdx) => (
        <React.Fragment key={rowIdx}>
          {row.map((node, nodeIdx) => (
            <div key={nodeIdx} style={getNodeStyle(node)}></div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default PathVisualizer;
