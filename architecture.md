# TeamFlow Architecture

## Overview

TeamFlow follows a client-server architecture.

## Frontend

Technology:
- React.js

Responsibilities:
- User interface
- Page navigation
- Display project and task information
- Communicate with backend APIs


## Backend

Technology:
- Node.js
- Express.js

Responsibilities:
- Provide REST APIs
- Handle application requests
- Send task data to frontend


## Application Flow

User
|
React Frontend
|
Express Backend API
|
Data Response


## Design Decisions

- React component structure is used for better maintainability.
- React Router is used for navigation between pages.
- Backend APIs are separated from frontend code.
- Client and server are maintained as separate folders.