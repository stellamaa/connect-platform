# Connect

Connect is a workspace for wellness practitioners. It holds the materials a client needs on the days between sessions: guided meditations, writing prompts, learning notes, images, and a small circle chat.

The sample studio in this repository is **Stillroom Practice** in Bristol, led by Mara Ellison. Three clients — Jonah Adeyemi, Priya Shah, and Luis Ortega — already have materials in their trays. You can walk the product as Mara or as Jonah without creating an account.

This repository is the documented foundation of that product. It is structured so a reviewer can follow the intent, the code map, and the next seams without a walkthrough.

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | What it does |
| --- | --- |
| `npm run dev` | Next.js development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

Requires Node.js 20 or newer. This project was scaffolded with Node 22.

## Walk the sample practice

1. From the home page, choose **Enter the practice**.
2. Pick **Practice** or **Client**, enter any name and email, and continue. Nothing is stored except the view you picked.
3. Inside the app, the **View** switch in the header moves between Mara’s practice and Jonah’s tray. That choice is kept in `localStorage` on this browser.
4. Open a meditation, write into a prompt, send a note in the circle, and open a client record.

Sign-in does not check a password. The forms exist so the door into the product has a real shape. See [Decisions](docs/DECISIONS.md).

## What you can do in this build

- Read the landing page and the account of what the build includes.
- Browse meditations, prompts, lessons, and images.
- Filter a library by words and tags. An empty search shows an empty state.
- Run a meditation timer for the intended length. Audio files are not attached.
- Write into a prompt. The draft stays in this browser tab.
- Send a circle message. It stays in this browser session and is not delivered to anyone else.
- Open each client and see the materials assigned to them.
- Switch between the practice view and the client view. The client view only lists what is in Jonah’s tray.

## What is deliberately not connected

- Accounts, passwords, and sessions on a server
- Audio uploads and image files
- A database shared across devices
- Realtime messages
- More than one practice on the same installation

The in-app page **About this build** lists the same boundary. The repository docs explain it in full.

## Repository map

```text
src/
  app/                  Routes. Each page file stays thin.
    (marketing)/        Home and about
    (auth)/             Sign in and sign up
    (platform)/         The signed-in practice
  components/           UI for one surface each
    brand/              Mark and wordmark
    layout/             Marketing header, practice shell, navigation
    landing/            Home page sections
    auth/               Sign-in and sign-up forms
    meditations/        Library and player
    prompts/            Library and writing page
    learn/              Library and reader
    gallery/            Library and still
    community/          Channels, thread, composer
    clients/            Roster and record
    dashboard/          Practice overview
    today/              Client tray
    settings/           Preview preferences
    materials/          Search and assignment labels shared by libraries
    ui/                 Button, card, field, empty state
  constants/            Copy, routes, navigation, and the Stillroom seed
  hooks/                Browser behaviour: role, filters, timer, drafts, chat
  lib/                  Pure lookups and small helpers
  types/                Shared TypeScript shapes
docs/                   Product, architecture, content model, decisions, roadmap
```

Route groups (`(marketing)`, `(auth)`, `(platform)`) organise layouts. They do not appear in the URL.

## Where to read next

| Document | What it answers |
| --- | --- |
| [docs/PRODUCT.md](docs/PRODUCT.md) | Who it is for, and the jobs it does |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | How a page, a hook, and the seed library fit together |
| [docs/CONTENT-MODEL.md](docs/CONTENT-MODEL.md) | The entities and how assignment works |
| [docs/DECISIONS.md](docs/DECISIONS.md) | Why the foundation is shaped this way |
| [docs/ROADMAP.md](docs/ROADMAP.md) | The order of the seams still to build |

## Add a material

1. Add the type fields in `src/types/platform.ts` if the kind is new.
2. Add the seed in `src/constants/`.
3. Add a lookup in `src/lib/catalog.ts`.
4. Add a hook in `src/hooks/` if the browser needs to filter or remember something.
5. Add a component folder and a thin route under `src/app/(platform)/`.
6. Add the route to `src/constants/routes.ts` and `src/constants/navigation.ts`.
7. Assign it to one or more client ids so it shows up in a tray and on a client record.

## Support boundary

Connect holds between-session materials for people already working with a practitioner. It is not a crisis service, a diagnosis, or a treatment plan. That sentence is also in the product, in `src/constants/brand.ts`.
