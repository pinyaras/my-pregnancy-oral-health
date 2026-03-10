# AGENTS.md
Guidance for coding agents operating in this repository.
Derived from the current checked-in state under `app/`.

## 1) Repository Scope
- Primary codebase is `app/`.
- `books/` stores screenshots/media assets, not app source.
- No backend service exists in this repository.
- No Go source files exist in this repository.

## 2) Tech Stack
- React 19 + React DOM 19
- TypeScript (strict mode)
- Vite 7
- Tailwind CSS 3 + CSS variables
- Radix UI + shadcn-style component patterns
- ESLint 9 flat config + typescript-eslint

## 3) Working Directory
Run application commands from:
`/home/pinyarash/dev/web/app`

## 4) Install Commands
Prefer lockfile-safe install:
```bash
npm ci
```
Use `npm install` only when dependency updates are intended.

## 5) Build / Lint / Dev Commands
Defined scripts in `app/package.json`:
```bash
npm run dev      # Start Vite dev server
npm run build    # Type-check and build production bundle
npm run lint     # Run ESLint on project
npm run preview  # Preview production build
```
Equivalent direct commands:
```bash
npx vite
npx tsc -b && npx vite build
npx eslint .
npx vite preview
```

## 6) Test Commands (Current Status)
- No `test` script exists in `app/package.json`.
- No test runner config found (Vitest/Jest/Cypress/Playwright).
- No test suite files are present.

### Single Test Command
Currently unavailable because no test framework is configured.
If Vitest is added later:
```bash
npm run test -- src/path/to/file.test.tsx
```
If Jest is added later:
```bash
npm run test -- src/path/to/file.test.tsx -t "test name"
```

## 7) Required Verification Workflow
For code changes in `app/`, run:
```bash
npm run lint
npm run build
```
These are mandatory quality gates until tests are introduced.

## 8) Project Structure Conventions
- Entry point: `src/main.tsx`
- Root composition: `src/App.tsx`
- Page/section components: `src/sections/*.tsx`
- Reusable primitives: `src/components/ui/*.tsx`
- Hooks: `src/hooks/*.ts`
- Utilities: `src/lib/*.ts`
- Global theme/styles: `src/index.css`

## 9) Import Conventions
- Prefer `@/` alias imports (`@/*` configured in TS config).
- Avoid deep relative imports when alias can be used.
- Keep groups stable: external -> internal utils -> internal components.
- Use `import type` for type-only imports when practical.
Examples:
```ts
import { cn } from "@/lib/utils"
import type { ClassValue } from "clsx"
```

## 10) Formatting Conventions
- Preserve existing style in the file you edit.
- Do not mass-reformat unrelated files.
- Many `src/components/ui/*` files use double quotes + no semicolons.
- Some top-level files use semicolons/single quotes.
- Rule: prioritize local consistency over global restyling.

## 11) TypeScript Conventions
- Keep strict typing; do not weaken type checks.
- Avoid `any`; prefer exact types, unions, and generics.
- Reuse framework utility types where possible.
Typical patterns seen in this repo:
```ts
React.ComponentProps<"button">
VariantProps<typeof buttonVariants>
```
Respect `tsconfig.app.json` checks:
- `strict`
- `noUnusedLocals`
- `noUnusedParameters`

## 12) Naming Conventions
- Components: PascalCase (`Hero`, `FormField`).
- Hooks: `useX` naming (`useIsMobile`).
- Variables/functions: camelCase.
- Constants: UPPER_SNAKE_CASE for true constants.
- Section files are PascalCase; many utility/UI files are kebab-case.

## 13) Component Authoring Patterns
- Existing primitives follow shadcn-style architecture:
  - `cn()` helper for class merging
  - `cva()` for variants
  - `data-slot` attributes for structure hooks
- When extending primitives, match existing variant names and prop shape.
- Prefer composition and shared utilities over copy/paste divergence.

## 14) Styling Rules
- Use Tailwind utility classes first.
- Reuse CSS variables/tokens from `src/index.css`.
- Keep responsive behavior explicit (`sm:`, `md:`, `lg:`).
- Avoid one-off hardcoded values when tokenized options exist.
- Preserve focus/invalid/disabled states and contrast.

## 15) Error Handling Rules
- Follow existing fail-fast hook/context pattern (`throw new Error(...)`).
- Never swallow errors with empty catch blocks.
- Ensure side effects in `useEffect` are cleaned up.
- Keep validation and user-facing error messaging explicit.

## 16) Accessibility Rules
- Preserve semantic HTML for controls and forms.
- Keep/add `aria-*` attributes where needed.
- Preserve keyboard/focus interactions.
- Prefer accessible Radix primitives for interactive UI.

## 17) Agent Guardrails
- Check scripts in `package.json` before assuming command names.
- Do not introduce new frameworks/tooling unless explicitly requested.
- Do not edit generated files in `app/dist/` unless explicitly asked.
- Keep changes scoped, minimal, and reviewable.

## 18) Cursor / Copilot Instruction Files
At this time, the following do not exist in this repository:
- `.cursor/rules/`
- `.cursorrules`
- `.github/copilot-instructions.md`
If any are added later, treat them as higher-priority local instructions and
update this `AGENTS.md` accordingly.
