export let count = 0

export function increase(val = 1) {
  return count += val
}
export function decrease(val = 1) {
  return count -= val
}