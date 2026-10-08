# Brief
## File you may touch
- `src/cart.js` - The only source file you need to implement.
- `test/cart.test.js` - Only add tests, nothing else.
- `.github/workflows/ci.yml` - CI setup and config to run test on every push.
- `package.json` - Only for CI setup.
- Do not add, edit, or delete any other files. Do not touch `README.md`, `rules.md`, `brief.md`, `.gitignore`.

## Order of implement
- Understand and setup CI
- Understand test cases and config the `test/cart.test.js`
- Implements `src/cart.js`
- Do not commit or push after finish

## The contract
Implement `cartTotal(items, options)` as an ES module export:
- `items`: `[{ name, price, qty }]`
- `options`: `{ vatRate, freeShipFrom, shipFee }`
- `subtotal` = sum of `price × qty`
- `vat` = `vatRate × subtotal`
- `shipping` = `0` when `subtotal >= freeShipFrom`, otherwise `shipFee`
- return value: `subtotal + vat + shipping`, a number, rounded to the whole đồng, use `Math.round`, not `toFixed`, never return a string as a result.

## Error cases
- if `items` is empty return `0` (no VAT, no shipping)
- if `items` does not contain any numbers return `0`
- if `price < 0`, or not an interger or a number type throw `RangeError`
- if `qty` not a positive integer, or not a number type (`0`, negative, fractional, non-number) throw `RangeError`
- Add the test cases to `test/cart.test.js`, include the test case for `subtotal < freeShipFrom`

## Constraints
- **No dependencies.** Plain JavaScript only; tests use `node:test`.
- The worked example must return `467400`:
  2 × 180000 + 1 × 45000 = 405000, VAT 32400, shipping 30000.
- Verify with `npm test` and every test must pass.