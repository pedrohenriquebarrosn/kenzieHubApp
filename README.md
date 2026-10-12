
# KenzieHub — Technology Management Dashboard

A React application developed during my Full Stack Web Development training at **Kenzie Academy Brasil**, featuring user authentication, protected navigation, and technology management.

**[Existing hosted UI](https://kenziehub-eta-drab.vercel.app/)** — registration and sign-in failed in a manual check on 11 October 2026. This URL still serves an older version, **not the tested recovery-branch demonstration**.

**[Recovery PR](https://github.com/pedrohenriquebarrosn/kenzieHubApp/pull/1)** — this separate branch adds an explicitly labeled browser-only guest demonstration. Build and **2/2 Playwright browser tests passed** in Chromium (desktop flow and mobile viewport): [test evidence](https://github.com/pedrohenriquebarrosn/kenzieHubApp/actions/runs/38264677945). Real account creation and server authentication are **not yet restored**.

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

**Current limitation (12 October 2026):** This recovery branch fixes session-loading and form error handling, and enables local guest technology creation, editing, removal and persistence through browser storage. The old API availability is unverified; real registration, sign-in and backend data persistence have **not** been restored or independently tested. The Vercel site has not been updated to this branch.

To try the guest demo locally, check out `fix/recover-auth-and-techs-20261012`, run `npm install` then `npm run dev`, and choose **Acessar demonstração**. No real credentials are needed. The demo does not perform real authentication.

See [recovery notes](docs/RECOVERY_2026-10-12.md) for dependencies, scope and remaining tests.

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
