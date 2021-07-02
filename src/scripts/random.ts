/**
 * Retrieves a random entry from a given array
 * @param arr: the array to select an item from
 */
export function getRandom(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}
