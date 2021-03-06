import faker from "faker";

import {CartItem} from "./types";

import productMock from "~/product/mock";

export default {
  get item(): CartItem {
    return {
      id: faker.random.uuid(),
      count: 2,
      product: productMock.full,
      variants: [productMock.variant, productMock.variant],
    };
  },
  get items(): CartItem[] {
    return [this.item, this.item];
  },
};
