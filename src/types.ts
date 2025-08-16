import { conversions } from './conversions';

export type Entries = (typeof conversions)[number];
export type Units = Entries['units'][number];
export type Categories = Entries['category'];

export type EntryByUnit<U extends Units> = Entries extends infer Item
  ? Item extends { units: readonly (infer Us)[] }
    ? U extends Us
      ? Item
      : never
    : never
  : never;

export type CategoryOfUnit<U extends Units> = EntryByUnit<U>['category'];

type FilterByCategory<TCategory extends string> = Entries extends infer Item
  ? Item extends { category: TCategory }
    ? Item
    : never
  : never;

export type ValidToUnits<F extends Units> = Exclude<
  FilterByCategory<CategoryOfUnit<F>>['units'][number],
  EntryByUnit<F>['units'][number]
>;
