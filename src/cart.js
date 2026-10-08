// Implement cartTotal here. See README.md for the specification.
//test checking
export function cartTotal(items, options) {
  if (!Array.isArray(items) || items.length === 0) return 0
  const hasNumber = items.some(
    (it) => it && (typeof it.price === 'number' || typeof it.qty === 'number')
  )
  if (!hasNumber) return 0
  let subtotal = 0
  for (const it of items) {
    if (typeof it.price !== 'number' || !Number.isInteger(it.price) || it.price < 0) {
      throw new RangeError('price must be a non-negative integer number')
    }
    if (typeof it.qty !== 'number' || !Number.isInteger(it.qty) || it.qty <= 0) {
      throw new RangeError('qty must be a positive integer number')
    }
    subtotal += it.price * it.qty
  }
  const vat = options.vatRate * subtotal
  const shipping = subtotal >= options.freeShipFrom ? 0 : options.shipFee
  return Math.round(subtotal + vat + shipping)
}
