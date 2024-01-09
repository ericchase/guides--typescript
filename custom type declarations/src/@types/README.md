By default (https://www.typescriptlang.org/tsconfig#typeRoots), Typescript
automatically loads all `@types` subfolders from within all locations provided
to the `include` property of the typescript configuration file
(ie: `tsconfig.json` in this project). This is a tricky configuration option
to set up, so read about it in the docs
(https://www.typescriptlang.org/tsconfig#include).

Since this is a Svelte project, a base tsconfig file is generated within the
`.svelte-kit` folder after running the `dev` script. The `include` option of
this base config designates `./src` as the source directory for the project,
as far as Typescript is concerned. Therefore, simply adding an `@types`
subfolder is enough to set up some custom type declarations for the project.

As an example, I've set up a basic declaration file for the `svelte-icons-pack`
package that is used in `src/routes/Counter.svelte`. Examine the `index.d.ts`
file within the `src/@types/svelte-icons-pack` folder to learn more.
