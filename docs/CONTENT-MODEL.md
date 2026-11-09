# Content model

The sample is one practice. Multi-practice tenancy is a later seam. Ids are stable strings so routes and assignments can refer to them before a database does.

## People

**Practitioner** (`src/constants/people.ts`)

| Field | Purpose |
| --- | --- |
| `id` | Stable id. Mara is `prac_mara`. |
| `name`, `credentials` | How she is named in the product |
| `practiceName`, `city` | The studio |
| `focus`, `bio` | The sentence the practice is organised around |

**Client**

| Field | Purpose |
| --- | --- |
| `id` | Used in `/clients/[id]` and in assignments |
| `name` | Display name |
| `focus` | What the current work is about, in ordinary language |
| `nextSession` | A label, not a calendar object |
| `since` | When they joined the sample practice |
| `note` | A private-to-the-practice line on the record |

`previewClient` is the person the client view represents. It is Jonah.

## Assignable materials

Meditations, prompts, lessons, and images share this base (`Assignable` in `src/types/platform.ts`):

| Field | Purpose |
| --- | --- |
| `id` | Stable id inside the kind |
| `slug` | URL segment |
| `title`, `summary` | Library card |
| `tags` | Filter chips |
| `assignedClientIds` | Who has this in their tray |
| `updatedLabel` | A fixed display date, so rendering does not depend on the server clock |

Assignment is a list of client ids on the material. A material can be with more than one client. “A cup left to cool” is with all three. The client view keeps an item when `assignedClientIds` contains Jonah. The practice view shows every item and prints the names.

There is no separate assignment table yet. When there is a database, this list becomes that table, and the field can stay as the shape returned to the UI.

### Meditation

`kind: "meditation"`. Adds `durationMinutes`, `intention`, and `guidance` (short paragraphs a person can read while the timer runs). The timer uses `durationMinutes`. It does not play audio.

### Writing prompt

`kind: "prompt"`. Adds `invitation` and `questions`. The draft is not part of the model. It lives in the browser under `usePromptDraft`, keyed by `id`.

### Lesson

`kind: "learning"`. Adds `readingMinutes` and `sections`, each with a heading and paragraphs. Lessons carry the support boundary from `brand.supportNote` above the text.

### Image

`kind: "image"`. Adds `caption`, `wash`, and `field`. `wash` and `field` are colours for a still, because this build has no image files. The caption is the instruction that should survive once a file replaces the colour.

## Circle

**Channel**: `id`, `name`, `description`.

**Message**: `id`, `channelId`, `authorName`, `authorRole`, `body`, `sentAtLabel`.

`sentAtLabel` is display text (“Sun · 21:05”, “Just now”). It is not a timestamp, so the thread does not format dates differently on the server and the browser.

Messages you send in the composer are appended in memory. They are not written back to `src/constants/community.ts`.

## Activity

`ActivityItem` is a fixed list for the practice overview: a label, a detail line, and a display time. It is not derived from the other collections. When events are real, this list should be built from them, and the component `ActivityList` can stay.

## Routes

| URL | Model |
| --- | --- |
| `/meditations`, `/meditations/[slug]` | Meditation |
| `/prompts`, `/prompts/[slug]` | Writing prompt |
| `/learn`, `/learn/[slug]` | Lesson |
| `/gallery`, `/gallery/[slug]` | Image |
| `/community` | Channels and messages |
| `/clients`, `/clients/[id]` | Client, plus the four material lists filtered by id |
| `/today` | The preview client’s tray |
| `/dashboard` | Counts and activity for the practice |
| `/settings` | The stored view |

`src/constants/content-types.ts` is the product language for the five kinds, including the circle. The landing page and the in-app eyebrows use it so the words do not fork.

## What a new field has to survive

If you add a field, update the type, the seed, and the component that shows it. Do not add a field that only one page invents inline. The content model is the contract between the seed (later, the database) and the screens.
