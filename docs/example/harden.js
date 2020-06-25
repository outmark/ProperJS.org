// @ts-check

/**
 * Transitively freeze an object.
 * @template T
 * @param {T} x object to freeze
 * @returns {T} the frozen object
 */
globalThis.harden = x => Object.freeze(x);
// TODO: actually make it transitive.

/**
 * Transitively freeze an object.
 * @typedef {globalThis['harden']} Harden
 */
