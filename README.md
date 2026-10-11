
# KenzieHub — Technology Management Dashboard

A React application developed during my Full Stack Web Development training at **Kenzie Academy Brasil**, featuring user authentication, protected navigation, and technology management.

**[Hosted UI preview](https://kenziehub-eta-drab.vercel.app/)** — the page was opened in a manual check on 11 October 2026. Registration and sign-in did not work in that check. **This is not a verified functional demo.**

## Overview

KenzieHub is an educational web application designed to help users manage technologies associated with their profiles.

The project demonstrates front-end development concepts, API integration, authentication flows, and component-based architecture.

## Features

- User registration and login interfaces.
- Protected dashboard routes.
- Technology management through an external API.
- Form validation and user feedback.
- Client-side navigation with React Router.
- Notifications for user interactions.

## Technologies

- React 18
- JavaScript
- Vite
- React Router
- Axios
- React Hook Form
- Yup
- Styled Components
- React Toastify

## Getting Started

Clone the repository and install the dependencies:

```bash
npm install
npm run dev
```

Open the local URL displayed by Vite.

## API Integration

The application communicates with an external KenzieHub API using Axios.

The API configuration is located in `src/services/api.js` and currently references:

`https://kenziehub.herokuapp.com`

**Current limitation (11 October 2026):** A manual browser check confirmed the front-end page loads but registration and sign-in fail. The external API endpoint is an unverified possible cause; no backend diagnosis or fix was performed. Authenticated technology-management flows could not be tested.

## Technical Highlights

- Reusable React components.
- Client-side state management.
- Protected routes for authenticated users.
- HTTP requests and API integration with Axios.
- Form handling and validation.
- Conditional rendering and user notifications.

## Project Scope

This project was developed for educational purposes at Kenzie Academy Brasil.

It demonstrates practical front-end development and authentication-related concepts but has not been independently validated as a production-ready application.

## Connect

- [LinkedIn](https://www.linkedin.com/in/pedro-henrique-barros-nascimento-2bb684251/)
- [GitHub Profile](https://github.com/pedrohenriquebarrosn)
