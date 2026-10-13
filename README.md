# KenzieHub — Technology Management Dashboard

**React dashboard for managing a developer's technologies, proficiency levels, and profile.**

[**↗ See live preview**](https://kenziehub-qfwq-13de0g0ty-pedrohenriquebarrosns-projects.vercel.app/) · [**↗ Code on GitHub**](https://github.com/pedrohenriquebarrosn/kenzieHubApp)

## Overview

KenzieHub is a responsive, bilingual (English/Portuguese) web application created during Full Stack training and subsequently enhanced for professional portfolio demonstrations. Visitors can explore an interactive guest mode; registered users have an authenticated dashboard connected to Supabase.

## Key features

- Account registration, email-confirmation flow, sign-in, sign-out, and protected navigation.
- Create, view, edit, and remove technologies with proficiency levels.
- Supabase Auth and PostgreSQL integration with user-scoped Row Level Security (RLS).
- Separate guest experience with browser-local demonstration data.
- Responsive interface, validated forms, accessible input feedback, and English/Portuguese language selection.

## Technology stack

React 18 · JavaScript · Vite · React Router · React Hook Form · Yup · Styled Components · Supabase Auth · PostgreSQL · RLS · Playwright

## Explore and run locally

The default `main` branch includes the reviewed implementation and the reproducible npm lockfile. The live preview is a separate deployment and should be checked against the latest release commit.

```bash
git clone https://github.com/pedrohenriquebarrosn/kenzieHubApp.git
cd kenzieHubApp
npm install
npm run dev
```

Supabase client configuration supports `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`. Never place private service-role or database credentials in client-side environment variables.

## Engineering and verification

- Guest-mode technology CRUD and responsive flows were exercised with Playwright.
- Login and technology CRUD flows have automated tests with simulated Supabase HTTP responses.
- A real signup, email confirmation, sign-in, and persisted technology were observed with one account.
- PostgreSQL tables use owner-restricted RLS policies for read/write operations.

This is a portfolio application, not a commercial service. The guest demonstration does not create server accounts or write to the shared database.

---

## Author

**Pedro Henrique Barros Nascimento** — Business Administration graduate and Full Stack development alumnus of Kenzie Academy Brasil.

[GitHub profile](https://github.com/pedrohenriquebarrosn) · [LinkedIn](https://www.linkedin.com/in/pedro-henrique-barros-nascimento-2bb684251/)
