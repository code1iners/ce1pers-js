export interface HelperPaginatorProps<T> {
  array: T[];
  take: number;
}

export type ArrayValue<T> = T[];

/**
 * Paginator helpers.
 */
export const paginator = <T>({ array, take }: HelperPaginatorProps<T>) => {
  let __currentPage__: number = 0;
  let __arrayValues__: ArrayValue<T> = [];
  let __cursor__: number = 0;
  let __maxPage__: number = 0;

  /**
   * Paginator initialize.
   */
  const initialize = () => {
    __arrayValues__ = [...array.slice(0, take)];
    __cursor__ = take;
    __maxPage__ = Math.floor(array.length / take);
  };

  /**
   * Getting values of current page.
   */
  const getValues = () => __arrayValues__;

  /**
   * Getting current page value.
   */
  const getCurrentPage = () => __currentPage__;

  /**
   * Go next page.
   */
  const next = () => {
    if (!hasNext()) return __arrayValues__;
    const newCursor = __cursor__ + take;
    __arrayValues__ = array.slice(__cursor__, newCursor);
    __cursor__ = newCursor;
    __currentPage__++;
    return __arrayValues__;
  };

  /**
   * Go Previous page.
   */
  const previous = () => {
    if (!hasPrevious()) return __arrayValues__;
    const newCursor = __cursor__ - take;
    __arrayValues__ = array.slice(__cursor__ - take * 2, newCursor);
    __cursor__ = newCursor;
    __currentPage__--;
    return __arrayValues__;
  };

  /**
   * Go to specific page.
   */
  const goTo = (page: number) => {
    // is unavailable?
    if (page < 0 || page > __maxPage__) return __arrayValues__;
    __arrayValues__ = array.slice(page * take, page * take + take);
    __cursor__ = page * take + take;
    __currentPage__ = page;
    return __arrayValues__;
  };

  /**
   * Go to first page.
   */
  const goFirst = () => goTo(0);

  /**
   * Go to last page.
   */
  const goLast = () => goTo(__maxPage__);

  /**
   * Check has next page.
   */
  const hasNext = () => array.length > __cursor__;

  /**
   * Check has previous page.
   */
  const hasPrevious = () => __cursor__ - take > 0;

  /**
   * Get page list.
   */
  const getPageList = () => [...Array(__maxPage__ + 1).keys()];

  initialize();

  return {
    getValues,
    getCurrentPage,
    next,
    previous,
    hasNext,
    hasPrevious,
    goTo,
    goFirst,
    goLast,
    getPageList,
  };
};
