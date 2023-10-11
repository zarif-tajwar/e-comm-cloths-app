import { FilterSidebar } from '@/components/UI/FilterSidebar';
import ShopFilterPagination from '@/components/UI/ShopFilterPagination';
import SortBySelect from '@/components/UI/SortBySelect';
import React, { Suspense } from 'react';

const ShopLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="mt-16">
      <div className="container-main">
        <div className="flex gap-8">
          <FilterSidebar />
          <div className="relative">
            <div className="mb-4 flex items-end justify-end">
              <SortBySelect />
            </div>
            {/* <div className="pb-4">
              <ShopFilterPagination />
            </div> */}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ShopLayout;
