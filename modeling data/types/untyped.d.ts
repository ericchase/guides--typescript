import { Product } from '@/models/Product.ts';

declare module '@/data/products.json' {
  const Products: Product[];
  export default Products;
}
