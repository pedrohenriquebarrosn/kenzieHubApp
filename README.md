# KenzieHub — Technology Management Dashboard

**A bilingual React application for organizing developer profiles, technologies, and proficiency levels.**

[**Launch the live app ↗**](https://kenziehub-qfwq-git-main-pedrohenriquebarrosns-projects.vercel.app/) · [**Professional portfolio ↗**](https://portfolio-pedro-barros-2026-review.vercel.app/en) · [**Test evidence ↗**](https://github.com/pedrohenriquebarrosn/kenzieHubApp/actions/runs/38479524202)

## Overview

KenzieHub brings developer profile and technology management into a responsive dashboard. Users can register, sign in, and organize their technology stack; visitors can explore the interface immediately through an interactive guest experience.

Originally developed during Full Stack training and subsequently expanded, the application now includes an English/Portuguese interface, Supabase-backed authentication and data, and browser-tested core interactions.

## Features

- **Technology dashboard:** add, browse, edit, and delete technologies, including proficiency levels.
- **User accounts:** registration, email confirmation, sign-in, sign-out, and protected routes.
- **Persistent user data:** Supabase Auth and PostgreSQL with row-level security (RLS) scoped to each account.
- **Instant guest experience:** explore technology-management workflows without creating an account.
- **Responsive and bilingual UI:** English/Portuguese switching, form validation, and accessible feedback.

## Stack

| Area | Technologies |
| --- | --- |
| Frontend | React 18, JavaScript, Vite, React Router |
| Interface & forms | Styled Components, React Hook Form, Yup |
| Authentication & data | Supabase Auth, PostgreSQL, Row Level Security |
| Verification | Playwright, automated build/browser checks |

## Explore the project

**[Open KenzieHub ↗](https://kenziehub-qfwq-git-main-pedrohenriquebarrosns-projects.vercel.app/)**

Select the guest experience to try the dashboard immediately. For account-based use, registration and authentication connect to Supabase. Guest data stays in the browser and is separate from account records.

### Run locally

```bash
git clone https://github.com/pedrohenriquebarrosn/kenzieHubApp.git
cd kenzieHubApp
npm install
npm run dev
```

For account features, configure `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` for your Supabase project. Keep privileged server credentials out of client-side configuration.

## Engineering & verification

- Guest technology-management workflows and responsive layouts were exercised with Playwright.
- Automated tests cover login and technology operations using simulated Supabase responses.
- A separate real-account check documented signup, email confirmation, login, and persisted technology data.
- Database RLS policies restrict access to each account's records.

[**View the recorded checks on GitHub Actions ↗**](https://github.com/pedrohenriquebarrosn/kenzieHubApp/actions/runs/38479524202)

## About the developer

**Pedro Henrique Barros Nascimento** — Full Stack Web Development training at Kenzie Academy Brasil; Business Administration coursework completed at UNIFG. Interested in applied AI, software development, and practical business solutions.

[GitHub](https://github.com/pedrohenriquebarrosn) · [LinkedIn](https://www.linkedin.com/in/pedro-henrique-barros-nascimento-2bb684251/) · [Portfolio EN](https://portfolio-pedro-barros-2026-review.vercel.app/en) · [Portfólio PT](https://portfolio-pedro-barros-2026-review.vercel.app/pt)
