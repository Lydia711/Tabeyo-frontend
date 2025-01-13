export interface SearchParams {
  ingredients: string[];
  cuisine: string;
  strictSearch: boolean;
  healthLabels: Set<string>;
}
