# KenzieHub — React Technology Dashboard

Educational React application originally developed during the Kenzie Academy Brasil Full Stack program, now under an isolated recovery branch to restore persistent, authenticated data.

## Live preview (under validation)

**[Open KenzieHub preview](https://kenziehub-qfwq-l0njj0jow-pedrohenriquebarrosns-projects.vercel.app/)**. This preview is built from the recovery branch, **not** from `main`. The original production deployment remains unchanged.

- **Guest demo:** click `Acessar demonstração` to create/edit/delete sample technologies stored only in this browser.
- **Real-account route:** registration/login through Supabase Auth, protected dashboard, and persisted technologies in PostgreSQL, isolated by RLS policies.
- **Email limitation:** Supabase default SMTP only supports authorized organization-team email addresses. An external-user signup flow needs custom SMTP and configured authentication redirect URLs; delivery is **not verified**.
- **Scope:** educational application, not a production-grade service. Do not submit passwords already used elsewhere.

## Technology

React 18 · JavaScript · Vite · React Router · React Hook Form · Yup · Styled Components · Supabase Auth · PostgreSQL · Row Level Security.

## Code

```bash
git clone https://github.com/pedrohenriquebarrosn/kenzieHubApp.git
cd kenzieHubApp
git checkout fix/recover-auth-and-techs-20261012
npm install
npm run dev
```

Public client configuration in `src/services/supabase.js` supports `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`. Publishable keys are meant for browser use; **never** place service-role keys or database passwords in Vite variables.

## Data security

Table `public.kenziehub_technologies` has RLS enabled with policies requiring `auth.uid() = user_id` for CRUD. Guest demonstration never writes to the server. Access to the table is not granted to the anonymous role.

## Verification

- [Recovery pull request](https://github.com/pedrohenriquebarrosn/kenzieHubApp/pull/1) (draft).
- [Passing browser and API-contract tests](https://github.com/pedrohenriquebarrosn/kenzieHubApp/actions/runs/38288172541) include guest operations and mocked hosted Auth/CRUD interactions through reload.
- Vercel staging preview reached `READY`.
- **Not yet verified:** real confirmation email receipt, live signup/login with distinct accounts, authenticated CRUD persistence and isolation in the hosted browser. API-mocked tests are **not** proof of those live checks.

## Portfolio use

The hosted URL is a **technical preview**, not a completed production release. Keep the recovery branch separate until an actual user can verify signup, login, refresh, technology CRUD, logout, and cross-account isolation.
