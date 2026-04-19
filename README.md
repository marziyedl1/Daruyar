# DaruYar

DaruYar is a Nuxt 3 medication reminder and adherence tracker. Ticket 1 sets up the application shell, design tokens, shared UI components, and the feature-oriented folder structure defined in [CODEX_CONTEXT.md](/e:/Marzieh/Projects/DaruYar/CODEX_CONTEXT.md).

## Stack

- Nuxt 3
- TypeScript
- Nuxt UI
- Tailwind CSS v4 via Nuxt UI
- Pinia
- Firebase SDK
- VeeValidate + Zod
- VueUse

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Environment

Copy `.env.example` to `.env` and fill in Firebase values before Ticket 2 work:

```bash
NUXT_PUBLIC_FIREBASE_API_KEY=
NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NUXT_PUBLIC_FIREBASE_PROJECT_ID=
NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NUXT_PUBLIC_FIREBASE_APP_ID=
NUXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
```

## Ticket 1 Deliverables

- Nuxt 3 app scaffolded and verified with a production build
- `components/ui` and `components/shared` foundation added
- base layout, theme tokens, and landing/demo page created
- feature-based folders prepared for auth, medications, dashboard, history, billing, and notifications

## Ticket 2.1 Deliverables

- Firebase client plugin added in [plugins/firebase.client.ts](/e:/Marzieh/Projects/DaruYar/plugins/firebase.client.ts)
- typed Firebase accessors added for app, auth, and Firestore
- runtime config already wired through `NUXT_PUBLIC_FIREBASE_*` environment variables
