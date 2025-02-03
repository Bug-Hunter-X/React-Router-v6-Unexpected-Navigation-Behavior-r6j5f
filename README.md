# React Router v6: Unexpected Navigation Behavior

This repository demonstrates a common issue in React Router v6:  how to gracefully handle navigation to routes that don't exist.  The `bug.js` file shows the problem, and `bugSolution.js` demonstrates the solution.

## Problem
The initial implementation lacks a default route or a catch-all route to handle situations where a user navigates to a URL not defined in the `Routes` component. This can lead to unexpected behavior or errors. 

## Solution
The solution adds a `Route` with `path="*"`, which acts as a catch-all route to handle any undefined routes. This enables you to render a 404 page or redirect the user to a default page.