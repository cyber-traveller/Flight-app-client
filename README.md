# Flight App: Client

React front end for a flight booking app. Travellers search flights, book and pay, and view their bookings and tickets. Admins manage flights from a dashboard with charts.

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwindcss&logoColor=white)

## Features

**Travellers**
- Sign up and log in (Google sign-in supported), with a forgot-password page
- Search and browse flights
- Pay for a booking and get a ticket
- View all bookings on a "My bookings" page

**Admins**
- Separate admin login
- Dashboard with charts
- Add, edit and delete flights

## Routes

| Path | Page |
| --- | --- |
| `/`, `/home` | Home |
| `/login`, `/signup`, `/forgetpassword` | Authentication |
| `/flights`, `/flights/:id` | Search results and flight details |
| `/payment/:id`, `/payment/getTicket/:id` | Payment and ticket |
| `/MyBookings/:id` | User bookings |
| `/admin/login`, `/admin/dashboard`, `/admin/flights` | Admin area |

## Tech stack

React, Vite, Tailwind CSS, shadcn/ui (Radix UI), Material UI (including the data grid), React Hook Form, `@react-oauth/google`, Axios.

## Getting started

```bash
git clone https://github.com/cyber-traveller/Flight-app-client.git
cd Flight-app-client
npm install
npm run dev
```

The API base URL is hard-coded in the source as the deployed [Flight-app-server](https://github.com/cyber-traveller/Flight-app-server). To use a local server, search for `flight-app-server.onrender.com` in `src/` and replace it.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview the build |
| `npm run lint` | Run ESLint |
