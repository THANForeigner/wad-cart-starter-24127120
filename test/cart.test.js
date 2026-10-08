import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

// This test fails until you implement cartTotal. That is the point:
// run `npm test` first and see it red.
test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

test('free shipping when subtotal reaches freeShipFrom', () => {
  const items = [{ name: 'Laptop', price: 500000, qty: 1 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 540000)
})

test('subtotal below freeShipFrom charges shipFee', () => {
  const items = [{ name: 'Sổ tay', price: 45000, qty: 1 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 78600)
})

test('empty cart returns 0', () => {
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal([], options), 0)
})

test('items without any numbers return 0', () => {
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal([{ name: 'Quà tặng' }], options), 0)
})

test('negative price throws RangeError', () => {
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(
    () => cartTotal([{ name: 'X', price: -1, qty: 1 }], options),
    RangeError
  )
})

test('non-integer or non-number price throws RangeError', () => {
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(
    () => cartTotal([{ name: 'X', price: 100.5, qty: 1 }], options),
    RangeError
  )
  assert.throws(
    () => cartTotal([{ name: 'X', price: '100', qty: 1 }], options),
    RangeError
  )
})

test('qty that is not a positive integer throws RangeError', () => {
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  for (const qty of [0, -2, 1.5, '2', null]) {
    assert.throws(
      () => cartTotal([{ name: 'X', price: 100, qty }], options),
      RangeError
    )
  }
})
