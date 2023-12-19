# cloudflare-next-prisma

This repository contains multiple branches showcasing how to use Next.js on Cloudflare Pages with Prisma.

- [`planetscale`](https://github.com/janpio/cloudflare-next-prisma/tree/planetscale) - Next.js-based Worker using `@prisma/adapter-planetscale`

It also contains branches showing problems:

- [`plain-pg`](https://github.com/janpio/cloudflare-next-prisma/tree/plain-pg) - Problems using `pg` via `@cloudflare/next-on-pages` (also see [Discord discussion](https://discord.com/channels/595317990191398933/1186500873304686622/1186500873304686622))
- [`neon`](https://github.com/janpio/cloudflare-next-prisma/tree/neon) - Problems using `@neondatabase/serverless` with `@prisma/adapter-neon` via `@cloudflare/next-on-pages` (see [this GitHub issue](https://github.com/cloudflare/next-on-pages/issues/499#issuecomment-1863613990))