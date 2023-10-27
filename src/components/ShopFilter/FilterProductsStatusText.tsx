import { FILTER_PRODUCTS_PER_PAGE } from '@/lib/validation/constants';

const FilterProductsStatusText = ({
  page,
  totalProducts,
}: {
  page: number;
  totalProducts: number;
}) => {
  if (totalProducts < 1) return null;

  const range = [
    (page - 1) * FILTER_PRODUCTS_PER_PAGE + 1,
    Math.min(page * FILTER_PRODUCTS_PER_PAGE, totalProducts),
  ];

  return (
    <p className="flex-grow pb-2 text-black/60">
      Showing {range.at(0)}-{range.at(1)} of {totalProducts} Products
    </p>
  );
};

export default FilterProductsStatusText;
