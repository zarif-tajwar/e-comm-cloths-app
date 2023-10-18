import { SQL, and, eq, inArray, sql } from 'drizzle-orm';
import {
  PgDialect,
  PgTableWithColumns,
  QueryBuilder,
} from 'drizzle-orm/pg-core';
import { db } from './index';
import { clothing } from './schema/clothing';
import { dressStyles } from './schema/dressStyles';
import { products } from './schema/products';
import { sizes } from './schema/sizes';
import { faker } from '@faker-js/faker';
import crypto from 'crypto';
import { ProductEntry, productEntries } from './schema/productEntries';
import { FilterSearchQueryValuesSchema } from '../validation/schemas';
import { genRandomInt, wait } from '../util';

async function populateSizes() {
  await db
    .insert(sizes)
    .values(
      ['Small', 'Medium', 'Large', 'XL', '2XL'].map((name) => ({ name })),
    );
}

async function populateClothing() {
  await db.insert(clothing).values(
    ['t-shirts', 'shorts', 'shirts', 'hoodies', 'jeans'].map((name) => ({
      name,
    })),
  );
}

async function populateStyles() {
  await db.insert(dressStyles).values(
    ['casual', 'formal', 'party', 'gym'].map((name) => ({
      name,
    })),
  );
}

async function populateProducts(n: number) {
  await db.insert(products).values(
    [...Array(n).keys()].map((_) => ({
      name: faker.commerce.productName(),
      price: faker.commerce.price({ min: 100, max: 10000 }),
      clothingID: faker.number.int({ min: 1, max: 5 }),
      styleID: faker.number.int({ min: 1, max: 4 }),
      color: faker.color.human(),
      description: faker.commerce.productDescription(),
    })),
  );
}

function range(start: number, end: number) {
  return [...Array(end - start + 1).keys()].map((_, i) => i + start);
}

async function populateProductEntries(n: number) {
  let entryProductAndSizeID: [number, number][] = [];

  const existingEntryProductAndSizeID = (
    await db
      .select({
        productId: productEntries.productID,
        sizeId: productEntries.sizeID,
      })
      .from(productEntries)
  ).map((combination) => [combination.productId, combination.sizeId]) as [
    number,
    number,
  ][];

  while (entryProductAndSizeID.length < n) {
    const pickedCombination = [genRandomInt(1, 32000), genRandomInt(1, 5)] as [
      number,
      number,
    ];

    if (
      !entryProductAndSizeID.some(
        (arr: [number, number]) =>
          arr.at(0) === pickedCombination.at(0) &&
          arr.at(1) === pickedCombination.at(1),
      ) &&
      !existingEntryProductAndSizeID.some(
        (arr: [number, number]) =>
          arr.at(0) === pickedCombination.at(0) &&
          arr.at(1) === pickedCombination.at(1),
      )
    ) {
      entryProductAndSizeID.push(pickedCombination);
    }
  }

  const sizeTags = ['sm', 'md', 'lg', 'xl', '2xl'];
  const clothingTags = ['tsh', 'sho', 'sh', 'ho', 'je'];

  const productNames = await db.query.products.findMany({
    columns: {
      id: true,
      name: true,
    },
    with: {
      clothing: {
        columns: {
          id: true,
          name: true,
        },
      },
    },
  });

  const skus = entryProductAndSizeID.map(([productID, sizeID]) => {
    const product = productNames.find((x) => x.id === productID);

    const productName = product?.name.split(' ')[0];

    const clothing = clothingTags[product?.clothing?.id! - 1];
    const sizeName = sizeTags.at(sizeID - 1);

    const uuid = crypto.randomUUID().slice(0, 4);

    return `${clothing}-${productName}-${sizeName}-${uuid}`.toLocaleLowerCase();
  });

  const inputProductEntries: ProductEntry[] = entryProductAndSizeID.map(
    ([productID, sizeID], i) => ({
      productID: productID,
      sizeID: sizeID,
      quantity: genRandomInt(800, 1200),
      sku: skus.at(i)!,
    }),
  );

  await db.insert(productEntries).values(inputProductEntries);

  console.log(
    `${inputProductEntries.length} product entries have been populated!`,
  );
}

const updateProductEntryQuantity = async () => {
  const productEntriesId = await db
    .select({ id: productEntries.id })
    .from(productEntries);

  const length = productEntriesId.length;

  const promises = [];

  for (let i = 0; i < length; i++) {
    const promise = new Promise((res) =>
      res(
        db
          .update(productEntries)
          .set({
            quantity: genRandomInt(800, 1200),
          })
          .where(eq(productEntries.id, productEntriesId[i].id)),
      ),
    );
    promises.push(promise);
  }

  await Promise.all(promises);
};

async function execute() {
  console.log('⏳ Running ...');

  const start = performance.now();

  const end = performance.now();

  console.log(`✅ Completed in ${end - start}ms`);

  process.exit(0);
}

execute().catch((err) => {
  console.error('❌ Task failed');
  console.error(err);
  process.exit(1);
});
