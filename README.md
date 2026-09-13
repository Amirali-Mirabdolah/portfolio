# Amirali Mirabdolah - Portfolio

A personal portfolio built with Next.js, React, Tailwind CSS, and Framer Motion.

## Local development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Production build

```bash
npm run lint
npm run build
npm run start
```

The production server listens on port `3000` by default. Set the `PORT`
environment variable when hosting on a different port.

## Deploy on Vercel

1. Push this repository to GitHub.
2. Import the repository into [Vercel](https://vercel.com/new).
3. Keep the framework preset as **Next.js**.
4. Use `npm run build` as the build command (Vercel detects this automatically).
5. Leave the output directory blank; Next.js manages it.
6. Deploy. This project currently does not require environment variables.

Every route is statically generated, so no database or server configuration is
required for the current site.

## Learn more

- [Next.js documentation](https://nextjs.org/docs)
- [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)
