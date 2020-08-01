> Conventions for modern, secure, tooling-agnostic Javascript

## Use `.js` for Javascript!

Write your code for modern Javascript and Ecmascript Standard Modules (ESM)!

There is no need to migrate to the `.mjs` suffix for ESM, since we consider CommonJS to be the nonstandard Javascript (using `require()` and `module` and `exports` instead of `import` and `export`).  

Use the `.cjs` suffix when you need to write (or transpile) CommonJS format.

## Use Typescript annotations, but write standard Javascript

We don't want to write Typescript, as it requires transpilation.  Instead, we use [JSDoc annotations](https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html#supported-jsdoc) that are validated by Typescript, but don't make the actual code nonstandard.  This has the added benefit of Intellisense, which helps with discoverability of your code.

To have the Typescript language server (in your IDE) validate a `.js` file's JSDocs, add:

```js
// @ts-check
```

near the top of the file.  See the [example/README.md](example/README.md) to learn more.

## Be platform-agnostic

Write ESM and modern Javascript!  Use tooling to generate artifacts for other environments.
