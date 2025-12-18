

# Hobbie Tracker – Frontend

This repository contains the **frontend implementation** of the **Hobbie Tracker** web application, built as part of an assignment to design, implement, and deploy a complete habit-tracking system.

The objective of the assignment was to demonstrate the ability to independently build a **full-stack product**, focusing on clean UI/UX, correct functionality, proper API integration, and real-world deployment.

---

## Assignment Context

The task required building a **Habit Tracker Web App** where users can:

* Create and manage personal habits
* Track daily or weekly progress
* Follow other users for accountability
* View friends’ activity and streaks

The application also needed to handle edge cases, use a relational database on the backend, and be deployed with a live demo link.

This repository specifically handles the **client-side (frontend)** part of that requirement.

---

## Live Application

* **Frontend (Vercel):** [https://hobbie-tracker.vercel.app](https://hobbie-tracker.vercel.app)
* **Backend API (Render):** [https://hobbie-tracker-backend.onrender.com](https://hobbie-tracker-backend.onrender.com)

> Note: The backend runs on a free hosting tier, so the first request may take a few seconds if the server is idle.

---

## Features Implemented (Frontend)

### Authentication

* User registration and login
* JWT-based authentication handled via API
* Protected routes for authenticated users

### Habit Management

* View list of personal habits on the dashboard
* Daily/weekly check-in actions
* Habit creation and updates via forms

### Social Accountability

* Search users
* Follow and unfollow other users
* Display followers/following data

### Activity Feed

* View recent habit check-ins and streaks of followed users

---

## Tech Stack (Frontend)

* React (Vite)
* Tailwind CSS for UI styling
* React Router for navigation
* Axios for API communication
* Deployed on Vercel

---

## UI / UX Approach

The UI is intentionally kept:

* Clean and minimal
* Fully responsive
* Easy to understand without instructions

The focus was usability and clarity rather than heavy animations or visual effects.

---

## Frontend Architecture & Behavior

* API base URL is managed through environment variables
* Axios instance is used for consistent API calls
* JWT token is stored in `localStorage`
* Unauthorized users are redirected to the login screen
* Form validation is handled on the client before API calls

---

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=https://hobbie-tracker-backend.onrender.com
```

---

## Running the Frontend Locally

```bash
git clone https://github.com/CwPranay/Hobbie-Tracker-Frontend.git
cd Hobbie-Tracker-Frontend
npm install
npm run dev
```

Ensure the backend service is running and the API URL is correctly configured.

---

## Edge Cases Handled (Frontend Side)

* Required field validation on forms
* Preventing duplicate form submissions
* Redirecting unauthenticated users
* Handling API errors gracefully with user feedback

---

## Project Status

This frontend fulfills all **required frontend deliverables** of the assignment and is considered **complete** for evaluation purposes.

Possible future enhancements (not required for the assignment):

* Password reset flow
* Habit analytics and visual insights
* Accessibility improvements

---

## Related Repository

* **Backend Repository:** [https://github.com/CwPranay/Hobbie-Tracker-Backend](https://github.com/CwPranay/Hobbie-Tracker-Backend)

---

## Summary

This frontend was built to meet the assignment’s requirements while following real-world development practices.
It demonstrates the ability to design a usable interface, integrate with a backend API, handle edge cases, and deploy a working application independently.


