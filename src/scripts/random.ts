/**
 * Retrieves a random entry from a given array
 * @param arr: the array to select a random entry from
 */
export function getRandom(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Retrieves a specified indexed entry if possible, or a random one otherwise
 * @param arr: the array to select an entry from
 * @param args: message arguments (passed down from command)
 */
export function getIndexOrRandom(arr: any[], args: string[]) {
  if (args.length > 0) {
    const index = parseInt(args[0]);
    if (index >= 0 && index < arr.length) {
      return arr[index];
    }
  }

  return getRandom(arr);
}
