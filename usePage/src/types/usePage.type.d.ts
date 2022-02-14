export interface IGenerateProps {
  skip: number;
  take: number;
  data: any[];
}

export interface IGeneratePageData {
  index: number;
  page: number;
  data: any[];
}

export interface IGenerateResult {
  count: number;
  pages: IGeneratePagesResult[];
  currentPage: IGeneratePageData;
  firstPage: IGeneratePageData | null;
  lastPage: IGeneratePageData | null;
  hasNext: boolean;
  hasPrevious: boolean;
  next: () => IGenerateResult;
  previous: () => IGenerateResult;
}

export interface IMember {
  name: string;
  age: number;
}
