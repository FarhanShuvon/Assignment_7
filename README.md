# CS — Ticket System

A React-based Customer Support Zone for managing tickets with status tracking and resolution features.

## React Concepts Q&A

### 1. What is JSX, and why is it used?
JSX is a syntax extension for JavaScript that lets you write HTML-like code in React, making it easier to create and visualize UI components.

### 2. What is the difference between State and Props?
State is mutable data managed within a component, while Props are immutable data passed from parent to child components[web:122][web:123].

### 3. What is the useState hook, and how does it work?
useState is a React hook that lets you add state to functional components by returning a state variable and a function to update it[web:123].

### 4. How can you share state between components in React?
Lift state up to a common parent component and pass it down as props, or use state management libraries like Context API or Redux[web:123][web:126].

### 5. How is event handling done in React?
Event handling in React is done by passing event handler functions as props to elements using camelCase syntax like `onClick={handleClick}`[web:129].

## Features
- Ticket management system
- Real-time status tracking (In-Progress/Resolved)
- React-Toastify notifications
- Fully responsive design
- Dynamic ticket counts

## Technologies Used
- React
- Tailwind CSS
- React-Toastify
- React Icons
