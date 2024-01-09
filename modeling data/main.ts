import { Product, toProduct, toValidatedProduct } from '@/models/Product.js';

import * as productData from '@/data/products.json';
const products: Product[] = productData;

for (const product of products) {
  toProduct(product);
}

for (const product of products) {
  try {
    toValidatedProduct(product);
  } catch (err) {
    // should catch 'category' and 'gender' properties that do not conform
    console.log(err);
  }
}

import * as notProductData from '@/data/notproducts.json';
// error: Property 'uuid' is missing in type
const notProducts: Product[] = notProductData;

for (const product of notProducts) {
  try {
    toProduct(product);
  } catch (err) {
    console.log(err);
  }
}
