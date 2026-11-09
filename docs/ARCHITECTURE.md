# Architecture

## Stack

- Next.js 16 App Router, with Cache Components and partial prefetching
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint via `eslint-config-next`

There is no UI kit and no data library. The foundation is small on purpose.

## How a request is rendered

Pages are Server Components. They read the seed through `src/lib/catalog.ts`, call `notFound()` when a slug or client id is unknown, and render one feature component.

Interactive pieces are Client Components. They own the preview role, search boxes, the meditation timer, prompt drafts, and the circle composer. A page file should stay thin enough to read as a table of contents.

Dynamic routes (`[slug]`, `[id]`) export `generateStaticParams` from the seed, so the known library is prerendered. Unknown ids call `notFound()`.

`usePathname` sits inside `NavLinks`, and that component is wrapped in `Suspense` in the practice shell. With Cache Components, a navigation hook in a shared layout can suspend while a dynamic route’s shell is prepared. The rest of the shell does not wait on it.

## The preview role

There is no server session. `useRole` reads a `localStorage` value through `useSyncExternalStore`.

The practice shell waits until the browser has read that value (`ready`). Until then the page says “Opening the practice…”. That keeps the first paint from showing Mara’s roster to someone who last left the app in the client view.

`src/lib/role-store.ts` is the only module that touches `localStorage`. When accounts exist, replace that module and render the shell from the session instead of waiting on the browser. Hooks and components already talk to `useRole`, not to storage.

The client view is pinned to Jonah (`previewClient` in `src/constants/people.ts`). Filtering uses his id. Mara’s view does not filter.

## Libraries

`useViewerItems` applies the role filter. `useMeditations`, `usePrompts`, `useLessons`, and `useGallery` pass their seed array into it. Search text and the selected tag live in `useTextQuery` and `useTagSelection`, and `matchLibrary` is a pure function. A new library should reuse that trio rather than invent another filter.

## Things the browser remembers

| Hook | Memory | Lifetime |
| --- | --- | --- |
| `useRole` | Practice or client view | This browser, until site data is cleared |
| `usePromptDraft` | The textarea for one prompt | This tab (`sessionStorage`) |
| `useCommunity` | Messages added on top of the seed | This mounted session of the page |
| `useMeditationPlayer` | Timer position | While the player is on screen |

Circle messages are component state, not storage. Leaving the circle and coming back shows the seed again. That is intentional: nothing here claims to be a delivered message.

## Shared UI

`components/ui` is the small set of controls. `components/materials` holds the library toolbar and the client-name badges, because every material kind needs them. Feature folders do not import each other. They may import `ui`, `materials`, hooks, constants, and `lib`.

Navigation labels and hrefs live in `src/constants/navigation.ts` and `src/constants/routes.ts`. The shell does not hard-code paths.

## Where a database would attach

Keep these function shapes and change their bodies:

- `filterForViewer`
- `getMeditation`, `getPrompt`, `getLesson`, `getImage`, `getClient`
- `materialsForClient`
- `practiceStats`
- `recentActivity`
- `circleSeed`

Do that on the server. Pass the results into Client Components as props, the way detail pages already pass one meditation or one prompt. Library pages can follow once the fetch is real. Until then they import the seed, and the seed ships to the browser. That is acceptable for a sample practice and wrong for private client material. [ROADMAP.md](ROADMAP.md) puts the database ahead of any real client data.

## Styling

Colour and type are CSS variables in `src/app/globals.css`, mapped into Tailwind with `@theme`. Headlines use Fraunces. Interface text uses Outfit. Both load through `next/font` on the root layout.

There is one light theme. The navigation rail is dark moss so the practice shell has a room, not a second theme. Automatic dark mode is off: a wellness practice should not flip palette with the operating system in this foundation.

## Files that must not be committed later

`.gitignore` already ignores `node_modules`, `.next`, and `.env*`. Do not commit secrets, audio masters, or client uploads.
