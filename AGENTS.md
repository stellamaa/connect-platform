<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Connect

Wellness practitioners leave between-session materials for clients. The sample studio is Stillroom Practice.

- Routes live in `src/app`. Page files stay thin and render one component.
- Screen UI lives in `src/components/<surface>`.
- Copy, routes, navigation, and seed content live in `src/constants`.
- Browser behaviour lives in `src/hooks`. Lookups live in `src/lib/catalog.ts`.
- Read `docs/` before changing the content model or pretending a seam (accounts, audio, database, realtime) is finished.
- `src/constants/build-status.ts` feeds `/about`. Update it when the boundary changes.
