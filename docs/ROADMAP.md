# Roadmap

The order is the order of dependency. Each item names the files that should change and the behaviour that must stay true.

## 1. Accounts

Replace `src/lib/role-store.ts` with a server session. `useRole` should return the same shape: `role`, `name`, `clientId`, `setRole` (or a sign-out).

Sign-in must check credentials and stop accepting any email. The practice view and the client view must come from the account, not from a header switch. Keep the switch only in local development if it is still useful, and say so on the screen.

A client account sees only their assignments. A practitioner account sees the roster. This rule already exists in `filterForViewer` and `useClientRecord`. Do not reimplement it in each page.

## 2. Persistence

Move the seed behind the functions in `src/lib/catalog.ts`. Pages that today import a Client Component which imports the seed should fetch on the server and pass props, as the detail routes already do.

Prompt drafts, once they are real, belong to the signed-in client and the prompt id. They must not stay in `sessionStorage` after this step.

Do this before any real person’s writing is typed into the product.

## 3. Files

Meditations gain an audio source. `useMeditationPlayer` should drive a media element and keep the same controls: begin, pause, resume, start again, and a progress bar. The guidance text stays.

Images gain a file. `ImageCard` and `ImageDetail` should keep the caption and fall back to `wash` / `field` only when a file is missing.

Lessons may later hold a downloadable note. The reader should still render `sections` on the page.

## 4. Realtime circle

Replace the in-memory list inside `useCommunity` with a subscription scoped to the practice. `MessageThread` and `MessageComposer` can stay. A message that fails to send must stay in the composer and say so.

The support boundary in `brand.supportNote` stays visible on the circle. This is not a crisis channel.

## 5. Assignment as an action

Today, assignment is data. Next, a practitioner can add or remove a client from a material without editing source. That action writes the relationship `materialsForClient` already reads.

## 6. More than one practice

Only after one practice is real. Scope every query by practice id. Do not add a second sample studio in the seed as a shortcut.

## 7. Calendar

`nextSession` is a label. A calendar is a separate model. Do not overload the client record with date logic before assignments and accounts are trustworthy.

## Checking a change against this list

A change is in the right place if a reviewer can still:

- Open `/about` and trust the “later” list.
- Find the content shape in `src/types/platform.ts`.
- Find the screen in one component folder.
- Find browser behaviour in one hook, not scattered through pages.
