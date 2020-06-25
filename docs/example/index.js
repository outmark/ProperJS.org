// @ts-check
// Import the global declaration of harden.
import './harden.js';

/**
 * @param {number} a
 * @param {number} b
 * @returns {number} the sum
 */
export function add(a, b) {
  return a + b;
}

// Create two aliases for add with the same type.
export const add2 = globalThis.harden(add);
export const add3 = harden(add);

/**
 * Declare a value with the same type as global harden.
 * @type {Harden}
 */
export const dontHarden = x => x;
dontHarden(3);

add2(1, 2);
add2('a', 2);
add3({}, 3);
