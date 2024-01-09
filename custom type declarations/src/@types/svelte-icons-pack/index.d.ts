// The svelte-icons-pack package is missing a d.ts file for the generic Icon
// component defined in its Icon.svelte file. This declaration gives us some
// basic type hinting within our project for the Icon component.
declare module 'svelte-icons-pack/Icon.svelte' {
  import { SvelteComponent } from 'svelte';
  declare class Icon extends SvelteComponent<{
    src: any;
    size: string;
    color?: string;
    title?: string;
    className?: string;
  }> {}
  export default Icon;
}
