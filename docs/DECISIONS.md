# Decisions

Short records of choices that would be expensive to rediscover.

## 1. One sample practice, fully filled in

The foundation could have been empty screens and a diagram. Empty screens do not show whether a tray, a roster, and a circle can share one model.

Stillroom is specific: one practitioner, three clients, materials that belong to their actual focus. Copy is part of the structure. A reviewer can click from Jonah’s Sunday anxiety to the eight-minute practice and back to his record.

Rejected: lorem ipsum, and a generic “Wellness App” with feature cards and no contents.

## 2. Preview role in the browser, no fake accounts

Sign-in collects an email so the form has validation, then stores only `practitioner` or `client`. Passwords are not asked for, because a password field that discards input looks like security.

The role uses `useSyncExternalStore`. The practice shell does not render a tray until the browser has read the stored view, so a returning client does not first see the whole roster.

When accounts arrive, replace `src/lib/role-store.ts`. Do not thread a session through components that already call `useRole`.

## 3. Seed data behind `lib/catalog.ts`

Constants hold the Stillroom contents. `catalog.ts` is the only lookup layer. Hooks filter. Pages do not reach into several constant files for the same question.

The cost is that library Client Components currently import the seed, so it is in the browser bundle. That is acceptable while the only data is a public sample. It is not acceptable for real client writing. The roadmap puts persistence on the server before any private content.

## 4. A timer instead of a silent audio player

A play button with no file pretends the product works. The player says the timer follows the intended length and that audio is not attached. The guidance text is readable without the recording, so the screen is still a meditation.

## 5. Colour fields instead of stock photographs

Images are part of the product. Stock photos would imply a media library we do not have, and they date quickly. Each still has a wash, a field, and a caption. Replacing a still with an uploaded file should not require a new page.

## 6. Circle chat that does not claim delivery

The composer works. Messages live in React state for the visit. The page says they are not delivered. A realtime seam can keep `ChannelList`, `MessageThread`, and `MessageComposer`, and replace `useCommunity`’s state with a subscription.

## 7. Fixed display dates

Activity times and “updated” labels are strings written in the seed. Formatting `Date` on the server and again on the client shifts with time zones and breaks hydration. Real timestamps can be formatted in Client Components later, or formatted once on the server and passed down as text.

## 8. App Router route groups, thin pages

`(marketing)`, `(auth)`, and `(platform)` each have the layout they need. URLs stay short: `/meditations`, not `/app/meditations`.

A page file exports metadata, and sometimes `generateStaticParams`, then renders one component. The component folder is where that screen is allowed to grow.

## 9. Cache Components stay on

`cacheComponents` and `partialPrefetching` came with the Next.js 16 scaffold and match the next default. The practice is a static shell plus small client islands. Turning the flag off to avoid learning the suspense rules would make the next upgrade harder. Navigation that reads the pathname is wrapped in `Suspense` for that reason.

## 10. Stone, black, and cream

The visual reference is an editorial marketplace: a stone hero, lowercase navigation, rectangular buttons, and a black footer with a giant wordmark. Titles use a plain grotesque. An italic serif is reserved for asides. No automatic dark mode. The earlier moss-and-serif palette read as a spa, and it fought the product’s plainness.

## 11. Documentation lives with the code

Product, architecture, content model, these decisions, and the roadmap are in `docs/`. The running app has a shorter version at `/about`, fed by `src/constants/build-status.ts`. If the boundary changes, update both the constant and the docs. The docs remain the longer explanation.
