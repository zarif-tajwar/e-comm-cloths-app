import {
  integer,
  pgTable,
  timestamp,
  serial,
  varchar,
} from 'drizzle-orm/pg-core';
import { orders } from './orders';
import { relations } from 'drizzle-orm';

export const orderStatus = pgTable('order_status', {
  id: serial('id').primaryKey(),
  text: varchar('text'),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const orderStatusRelations = relations(orderStatus, ({ many }) => ({
  orderDetails: many(orderDetails),
}));

export const orderDetails = pgTable('order_details', {
  orderId: integer('order_id')
    .primaryKey()
    .references(() => orders.id),
  placedAt: timestamp('placed_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
  statusId: integer('status_id').references(() => orderStatus.id),
});

export const orderDetailsRelations = relations(orderDetails, ({ one }) => ({
  order: one(orderStatus, {
    fields: [orderDetails.statusId],
    references: [orderStatus.id],
  }),
}));
