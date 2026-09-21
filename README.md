# kernel-docs

Documentation site for [`react-native-kernel`](https://www.npmjs.com/package/react-native-kernel), built with [Next.js](https://nextjs.org) and [Nextra](https://nextra.site).

This is a **standalone project**, deployed separately from the
`react-native-kernel` package/app repo.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Deploy

Deploy to [Vercel](https://vercel.com):

```bash
npx vercel
```

Or connect this repository to a Vercel project via the dashboard — no
special build settings are needed, Vercel auto-detects Next.js.

## Notes

- Pins `zod` to `4.1.12` via `dependencies` + `overrides`. Later Zod 4.x
  minor releases (4.6.x confirmed) break Nextra 4.6.1's own schema
  validation with a generic `Invalid input` error on every page. Don't
  remove this pin without re-verifying against whatever Nextra version is
  current at the time.
