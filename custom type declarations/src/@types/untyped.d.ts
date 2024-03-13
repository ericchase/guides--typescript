// declaring json files as modules doesn't seem to actually work

// declare module '$lib/data/product.json' {
//   import { ProductGroup } from '$lib/model/product';
//   const Products: ProductGroup[];
//   export = Products;
// }

// Add new attributes to HTMLElement via Typescript Declaration Merging.
// Easier said than done, of course.
// https://www.typescriptlang.org/docs/handbook/declaration-merging.html
declare namespace svelteHTML {
  interface HTMLAttributes<T extends EventTarget> extends AriaAttributes, DOMAttributes<T> {
    'animation-range-end'?: string | undefined | null;
  }
}
