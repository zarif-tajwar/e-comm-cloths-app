import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const capitalize = (str: string) =>
  str[0].toUpperCase() + str.slice(1).toLowerCase();

export const isValueInArray = <T>(value: T, array: T[]): boolean =>
  array.some((v) => v === value);

export const isSubset = <T>(subsetArray: T[], targetArray: T[]): boolean =>
  subsetArray.every((v) => isValueInArray(v, targetArray));

export const quickSortByReference = <T>(
  values: T[],
  referenceValues: T[],
): T[] => {
  if (values.length <= 1) {
    return values;
  }

  const pivotIndex = Math.floor(values.length / 2);
  const pivot = values[pivotIndex];

  const less = values.filter((value, index) => {
    if (index === pivotIndex) {
      return false;
    }
    return referenceValues.indexOf(value) < referenceValues.indexOf(pivot);
  });

  const greater = values.filter((value, index) => {
    if (index === pivotIndex) {
      return false;
    }
    return referenceValues.indexOf(value) > referenceValues.indexOf(pivot);
  });

  return [
    ...quickSortByReference(less, referenceValues),
    pivot,
    ...quickSortByReference(greater, referenceValues),
  ];
};

export const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
};
