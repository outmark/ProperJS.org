# Sample Typescript-checked JSDoc project

Have a look at the [index.js](index.js), it enables Typescript checking, then declares a function's types with JSDocs and commits various type errors.


## TSC compilation

The (mostly empty) [jsconfig.json](jsconfig.json) tells the Typescript compiler to use this configuration, and to generate an [index.d.ts](index.d.ts) describing the JSDoc within the file.  To generate that declaration file, as well as typecheck, you can run:

```
$ tsc -p jsconfig.json
index.js:13:5 - error TS2345: Argument of type '"a"' is not assignable to parameter of type 'number'.

13 add('a', 2);
       ~~~

index.js:14:5 - error TS2345: Argument of type '{}' is not assignable to parameter of type 'number'.

14 add({}, 3);
       ~~


Found 2 errors.

$
```

Your IDE, if it uses the Typescript language server, will also detect these errors.
