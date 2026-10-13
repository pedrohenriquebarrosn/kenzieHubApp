# KenzieHub — Technology Management Dashboard

A React application developed during my Full Stack Web Development training at **Kenzie Academy Brasil**, featuring user authentication, protected navigation, and technology management.

**[▶ See Project Live ↗](https://kenziehub-qfwq-c74oi26dr-pedrohenriquebarrosns-projects.vercel.app/)** — updated preview with registration, sign-in and a separate guest demo.

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

**Version note:** The live link uses [`review/i18n-pt-en-20261013`](https://github.com/pedrohenriquebarrosn/kenzieHubApp/tree/review/i18n-pt-en-20261013). The default `main` branch documents the original external-API implementation; the updated preview uses Supabase Auth and PostgreSQL. Registration, email confirmation and one technology record were observed with one real account; multi-account isolation and live edit/delete remain unverified.

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
