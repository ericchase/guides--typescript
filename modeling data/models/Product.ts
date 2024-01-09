import { assert_array, assert_itemof, assert_number, assert_string } from './assertions';
import { toPartial } from './helpers';

export interface Product {
  brand: string;
  category: string;
  color: string;
  condition: string;
  discount: number;
  gender: string;
  images: string[];
  material: string;
  price: number;
  size: string;
  type: string;
  uuid: string;
}

export function generateEmptyProduct(data: any): Product {
  return {
    brand: '',
    category: '',
    color: '',
    condition: '',
    discount: 0,
    gender: '',
    images: [],
    material: '',
    price: 0,
    size: '',
    type: '',
    uuid: '',
  };
}

export function toProduct(data: any): Product {
  assert_string(data, 'brand');
  assert_string(data, 'category');
  assert_string(data, 'color');
  assert_string(data, 'condition');
  assert_number(data, 'discount');
  assert_string(data, 'gender');
  assert_array(data, 'images');
  assert_string(data, 'material');
  assert_number(data, 'price');
  assert_string(data, 'size');
  assert_string(data, 'type');
  assert_string(data, 'uuid');

  const { brand, category, color, condition, discount, gender, images, material, price, size, type, uuid } = data;
  return { brand, category, color, condition, discount, gender, images, material, price, size, type, uuid };
}

export function toPartialProduct(data: any): Partial<Product> {
  return toPartial<Product>(generateEmptyProduct({}), data);
}

export const ProductCategories = ['all', 'accessories', 'clothing', 'shoes'];
export const ProductGenders = ['all', 'men', 'women'];

export function toValidatedProduct(data: any): Product {
  const product = toProduct(data);
  assert_itemof(product, 'category', ProductCategories);
  assert_itemof(product, 'gender', ProductGenders);
  return product;
}
