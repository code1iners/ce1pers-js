import { ArrayValue } from "./paginators";
import { HelperPaginatorProps } from "./paginators";

const paginator = <T>({ array, take }: HelperPaginatorProps<T>) => {
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
    __maxPage__ = array.length / take - 1;
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
    __arrayValues__ = array.slice(__cursor__, __cursor__ + take);
    __cursor__ = __cursor__ + take;
    __currentPage__++;
    return __arrayValues__;
  };

  /**
   * Go Previous page.
   */
  const previous = () => {
    if (!hasPrevious()) return __arrayValues__;
    __arrayValues__ = array.slice(__cursor__ - take * 2, __cursor__ - take);
    __cursor__ = __cursor__ - take;
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
    __cursor__ = page + take;
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
  };
};

export default paginator;
