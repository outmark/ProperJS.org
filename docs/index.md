> Conventions for modern, secure, tooling-agnostic Javascript

## Use `.js` for Javascript!

Write your code for modern Javascript and Ecmascript Standard Modules (ESM)!

There is no need to migrate to the `.mjs` suffix for ESM, since we consider CommonJS to be the nonstandard Javascript (using `require()` and `module` and `exports` instead of `import` and `export`).  

Use the `.cjs` suffix when you need to write (or transpile) CommonJS format.

## Use Typescript annotations, but write standard Javascript

We don't want to write Typescript, as it requires transpilation.  Instead, we use [https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html#supported-jsdoc](JSDoc annotations) that are validated by Typescript, but don't make the actual code nonstandard.  This has the added benefit of Intellisense, which helps with discoverability of your code.

To have the Typescript compiler validate a `.js` file's JSDocs, add:

```js
// @ts-check
```

near the top of the file.

## Be platform-agnostic

Write ESM and modern Javascript!  Use tooling to generate artifacts for other environments.

TODO: Explain

## Prefer the Agoric bundler

If you need to load code into your running environment, you should use the Agoric bundler because it:

* Has a minimal translation of modules to plain script code.
* Targets environments that don't understand ESM nor CommonJS.
* Doesn't change the meaning of your code, only the linkage.
* Supports CommonJS modules, if you use them.
* Coming soon: enforce containment of individual packages via manifest.

### Create a bundle artifact

After development, use the following to create a bundle:

```js
import bundleSource from '@agoric/bundle-source';

const bundle = bundleSource('path/to/my/entry/module.js');
const jsonBundle = JSON.stringify(bundle);
// Then write jsonBundle to disk or send over the network.
...
```

### Load a bundle artifact

In a new environment, import the bundle:

```js
import importBundle from '@agoric/import-bundle';

// Get jsonBundle from somewhere:
const jsonBundle = ...;
// Decode the bundle.
const bundle = JSON.parse(jsonBundle);
// Import it.  The following is like:
// const ns = await import('path/to/my/entry/module.js');
const ns = await importBundle(bundle);
// Get the value of `export default`.
console.log(ns.default);
```
