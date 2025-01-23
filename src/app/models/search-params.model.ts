export interface SearchParams {
  ingredients: Set<string>;
  cuisine: string;
  strictSearch: boolean;
  healthLabels: Set<string>;
}
