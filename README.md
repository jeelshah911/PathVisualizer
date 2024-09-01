# Pathvisualizer

Pathvisualizer is a React application designed to visualize search algorithms like Dijkstra's and A* (A-star). This tool provides an interactive way to explore how these algorithms operate and find the shortest path in a grid.

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


## Algorithms Overview

### Dijkstra's Algorithm

Dijkstra's Algorithm is a classic algorithm for finding the shortest path between nodes in a graph. It works by exploring all possible paths from the starting node to all other nodes in the graph, ensuring that the shortest path to each node is found. Dijkstra's algorithm is guaranteed to find the shortest path, but it can be slower in large graphs because it doesn't use any heuristic to guide its search.

### A* (A-star) Algorithm

On the other hand, A* is a search algorithm that improves upon Dijkstra’s Algorithm by using heuristics to guide its search. It combines the cost to reach the current node (like Dijkstra’s) with an estimate (**heuristic) of the cost to reach the goal. This allows A* to find the shortest path more efficiently in many cases, especially when the heuristic is well-chosen. A* is widely used in pathfinding and graph traversal, such as in video game AI.

