This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Supabase

1. Create supabase user and database
2. Install and run docker

```bash
# initialize local
npx supabase init
# login
npx supabase login
# start services
npx supabase start
# run migrations and seed
npx supabase db reset
# after db changes create migration
npx supabase db diff --use-migra -f [migration_name]
# push changes
npx supabase db push

```
