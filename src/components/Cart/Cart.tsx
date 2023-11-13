'use client';

import React, { useEffect, useMemo } from 'react';
import OrderSummary from '@/components/Cart/OrderSummary';
import Divider from '@/components/UI/Divider';
import CartItem from '@/components/Cart/CartItem';
import { trpc } from '@/app/_trpc/client';
import { useCartItemsStore } from '@/lib/store/cart-store';
import { serverClient } from '@/app/_trpc/serverClient';
import { Button } from '../UI/Button';
import { LayoutGroup, motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { getCartItemsServer } from '@/lib/actions/cart';
import { wait } from '@/lib/util';
import * as queryKeys from '@/lib/constants/query-keys';

const staticCartItems = [
  {
    name: 'Oriental Concrete Towels',
    price: '7448.00',
    sizeName: '2xl',
    cartItemId: 123365,
    quantity: 10,
  },
  {
    name: 'Rustic Granite Chair',
    price: '6595.00',
    sizeName: '2xl',
    cartItemId: 123364,
    quantity: 10,
  },
  {
    name: 'Handcrafted Metal Keyboard',
    price: '5590.00',
    sizeName: '2xl',
    cartItemId: 123363,
    quantity: 5,
  },
  {
    name: 'Unbranded Rubber Car',
    price: '8486.00',
    sizeName: 'small',
    cartItemId: 123362,
    quantity: 6,
  },
  {
    name: 'Ergonomic Granite Computer',
    price: '8449.00',
    sizeName: 'large',
    cartItemId: 123361,
    quantity: 6,
  },
  {
    name: 'Oriental Concrete Towels',
    price: '7448.00',
    sizeName: '2xl',
    cartItemId: 123365,
    quantity: 10,
  },
  {
    name: 'Rustic Granite Chair',
    price: '6595.00',
    sizeName: '2xl',
    cartItemId: 123364,
    quantity: 10,
  },
  {
    name: 'Handcrafted Metal Keyboard',
    price: '5590.00',
    sizeName: '2xl',
    cartItemId: 123363,
    quantity: 5,
  },
  {
    name: 'Unbranded Rubber Car',
    price: '8486.00',
    sizeName: 'small',
    cartItemId: 123362,
    quantity: 6,
  },
  {
    name: 'Ergonomic Granite Computer',
    price: '8449.00',
    sizeName: 'large',
    cartItemId: 123361,
    quantity: 6,
  },
];

const Cart = () => {
  const insertCartItemsClient = useCartItemsStore(
    (state) => state.insertCartItems,
  );
  const clearCartClient = useCartItemsStore((state) => state.clearCart);

  const { data, error, isFetched } = useQuery({
    queryKey: queryKeys.CART_ITEM_DATA,
    queryFn: async () => {
      const data = await getCartItemsServer();
      // console.log(data);
      if (!data || data.length < 1) return undefined;
      clearCartClient();
      insertCartItemsClient(data);
      return data;
    },
    refetchOnMount: false,
  });

  console.log(data, 'REACT QUERY');

  const cartItemsData = data;

  console.log('PARENT RENDERED');

  // useEffect(() => {
  //   if (cartItemsData && cartItemsData.length > 0) {
  //     insertCartItems(cartItemsData);
  //   }
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const CartComp = useMemo(() => {
    if (cartItemsData && cartItemsData.length > 0)
      return cartItemsData.map((cartItem, i) => {
        return <CartItem key={cartItem.cartItemId} cartItem={cartItem} />;
      });
    else return null;
  }, [cartItemsData]);

  return (
    <main className="container-main py-20">
      <div className="mx-auto mb-10 grid w-max grid-cols-2 justify-center gap-4 rounded-main p-4 ring-1 ring-primary-100">
        <p className="col-span-2">Temporary Buttons for Testing</p>
        <Button
        // onClick={async () => {
        //   await generateRandomCartItems.mutateAsync(5);
        // }}
        >
          Add 5 Random Products
        </Button>
        <Button
          variant={'outline'}
          // onClick={async () => {
          //   await clearCartServer.mutateAsync();
          // }}
        >
          Clear Cart
        </Button>
      </div>

      {cartItemsData && cartItemsData.length > 0 ? (
        <>
          <h1 className="mb-6 font-integral-cf text-4xl">My Cart</h1>
          <div className="flex grid-cols-5 flex-col gap-5 lg:grid">
            <LayoutGroup>
              <motion.div
                // layout
                // transition={{ duration: 1 }}
                style={{ borderRadius: 20 }}
                className="col-span-3 flex h-max flex-col px-6 ring-1 ring-primary-100"
              >
                {CartComp}
              </motion.div>
            </LayoutGroup>
            <OrderSummary cartItemsData={cartItemsData} />
          </div>
        </>
      ) : (
        <p>Your shopping cart is empty!</p>
      )}
    </main>
  );
};
export default Cart;
