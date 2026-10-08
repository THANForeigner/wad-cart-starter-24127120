# AI-LOG.md — IA#1 (CSC13008)

## 2026-10-08 — CI setup
Tool: OpenCode.
Asked for: Understand the guideline and set up CI so the check runs on every push.
Kept: `.github/workflows/ci.yml` as given (checkout, setup-node 20, `npm run check`).
Changed: `package.json` — added `lint` (`node --check` on src and test) and
`check` (lint + tests) scripts, because `ci.yml` already calls `npm run check`
and the script did not exist.
Rejected: Adding a separate lint dependency — rules require zero dependencies.
By hand: none.

## 2026-10-08 — cartTotal tests
Tool: OpenCode.
Asked for: Config the test cases in `test/cart.test.js`.
Kept: the existing "example from the slides" test, untouched.
Changed: added tests for free shipping at the threshold, `subtotal < freeShipFrom`,
empty cart, items with no numbers, and `RangeError` for bad `price`/`qty`.
Rejected: none.
By hand: none.

## 2026-10-08 — cartTotal implementation
Tool: OpenCode.
Asked for: Implements `cartTotal` in `src/cart.js` per the README contract.
Kept: the validation order and the `Math.round` return from the draft it produced.
Changed: rewrote the "no numbers" guard as an explicit `some()` check so a cart
with no numeric entries returns `0`, while a mixed cart still throws `RangeError`.
Rejected: using `toFixed` — must return a rounded `number`, not a string.
By hand: reviewed the contract, ran `npm run check` until it was green.
