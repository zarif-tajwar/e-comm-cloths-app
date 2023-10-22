import { SQL, sql } from 'drizzle-orm';
import { clothing } from '../db/schema/clothing';
import { products } from '../db/schema/products';
import { FilterSearchQueryValuesSchema } from '../validation/schemas';
import { dressStyles } from '../db/schema/dressStyles';
import { productEntries } from '../db/schema/productEntries';
import { sizes } from '../db/schema/sizes';
import { db } from '../db';
import { PgDialect } from 'drizzle-orm/pg-core';
import { FILTER_PRODUCTS_PER_PAGE } from '../validation/constants';
import { productRating } from '../db/schema/productRating';
import { productSalesCount } from '../db/schema/productSalesCount';

export const getProductsFromDB = async (inputSearchParams: {
  [key: string]: string | string[] | undefined;
}) => {
  const parsed = FilterSearchQueryValuesSchema.safeParse(inputSearchParams);

  if (!parsed.success) return;

  const { data } = parsed;

  const isConditionalNeeded = [
    data.clothing,
    data.sizes,
    data.styles,
    data.price_range,
  ].some((x) => x !== undefined && x !== undefined);

  const sqlCunks: SQL[] = [];
  let selector: SQL = sql`select distinct ${products.id}, ${products.name}, ${products.price}, ${clothing.name} as category, ${productRating.averageRating}, count(*) over() as total_count`;

  if (data.sort_by === 'most popular') {
    selector.append(sql`, ${productSalesCount.totalSales}`);
  }

  sqlCunks.push(selector);
  sqlCunks.push(sql`from ${products}`);

  sqlCunks.push(
    sql`join ${clothing} on ${products.clothingID} = ${clothing.id}`,
  );

  sqlCunks.push(
    sql`join ${productRating} on ${products.id} = ${productRating.productId}`,
  );

  if (data.sort_by === 'most popular') {
    sqlCunks.push(
      sql`join ${productSalesCount} on ${productSalesCount.productId} = ${products.id}`,
    );
  }

  if (isConditionalNeeded) {
    if (data.styles !== undefined) {
      sqlCunks.push(
        sql`join ${dressStyles} on ${products.styleID} = ${dressStyles.id}`,
      );
    }

    sqlCunks.push(sql`where`);

    const condtionalChunks: SQL[] = [];

    if (data.clothing !== undefined) {
      condtionalChunks.push(sql`${clothing.name} in ${data.clothing}`);
    }

    if (data.styles !== undefined) {
      condtionalChunks.push(sql`${dressStyles.name} in ${data.styles}`);
    }

    if (data.price_range !== undefined) {
      condtionalChunks.push(
        sql`${products.price} between ${data.price_range!.at(
          0,
        )} and ${data.price_range!.at(1)}`,
      );
    }

    if (data.sizes !== undefined) {
      condtionalChunks.push(sql`${products.id} in (SELECT ${productEntries.productID} FROM ${productEntries} WHERE ${productEntries.sizeID} IN (SELECT ${sizes.id} FROM ${sizes}
      WHERE ${sizes.name} IN ${data.sizes}
      ))`);
    }

    if (condtionalChunks.length >= 2)
      sqlCunks.push(sql.join(condtionalChunks, sql.raw(' and ')));
    if (condtionalChunks.length === 1)
      sqlCunks.push(sql.join(condtionalChunks, sql.raw(' ')));
  }

  if (data.sort_by === 'price low to high') {
    sqlCunks.push(sql`order by ${products.price}, ${products.id}`);
  }
  if (data.sort_by === 'price high to low') {
    sqlCunks.push(sql`order by ${products.price} desc, ${products.id}`);
  }
  if (data.sort_by === 'most popular') {
    sqlCunks.push(
      sql`order by ${productSalesCount.totalSales} desc, ${products.id}`,
    );
  }

  sqlCunks.push(sql`LIMIT ${FILTER_PRODUCTS_PER_PAGE}`);

  if (data.page !== undefined) {
    sqlCunks.push(sql`offset ${FILTER_PRODUCTS_PER_PAGE * (data.page - 1)}`);
  }

  const finalSql: SQL = sql.join(sqlCunks, sql.raw(' '));

  // const sqlString = new PgDialect().sqlToQuery(finalSql);

  console.log('\nINPUT SEARCH PARAMS: ', inputSearchParams);
  // console.log('\nPARSED DATA FROM INPUT SEARCH PARAMS: ', data);
  // console.log('\nSQL QUERY: ', sqlString);

  const recievedData = await db.execute(finalSql);

  // console.log('\nRECIEVED DATA: ', recievedData.rows);

  return recievedData;
};
