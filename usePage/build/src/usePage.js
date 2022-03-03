"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generator = void 0;
/**
 * ### Pagination hook.
 */
var generator = function (_a) {
    var _b = _a.take, take = _b === void 0 ? 5 : _b, data = _a.data;
    var pages = [];
    var currentIndex = 0;
    // Getters start.
    /**
     * ### Getting current page as index.
     */
    var getCurrentPageAsIndex = function () { return currentIndex; };
    /**
     * ### Getting current page as number.
     */
    var getCurrentPageAsNumber = function () { return currentIndex + 1; };
    /**
     * ### Getting current page as object.
     */
    var getCurrentPage = function () { return getCurrentpageData(); };
    /**
     * ### Getting current page data.
     */
    var getCurrentpageData = function () {
        return pages[getCurrentPageAsIndex()];
    };
    /**
     * ### Getting first page as index.
     */
    var getFirstPageAsIndex = function () {
        if (pages.length)
            return 0;
        else
            return null;
    };
    /**
     * ### Getting first page as number.
     */
    var getFirstPageAsNumber = function () {
        var firstPageIndex = getFirstPageAsIndex();
        if (firstPageIndex !== null)
            return firstPageIndex + 1;
        return firstPageIndex;
    };
    /**
     * ### Getting first page as object.
     */
    var getFirstPage = function () {
        var firstPageIndex = getFirstPageAsIndex();
        if (firstPageIndex === null)
            return null;
        return pages[firstPageIndex];
    };
    /**
     * ### Getting last page as index.
     */
    var getLastPageAsIndex = function () {
        var count = getPagesCount();
        if (count)
            return count - 1;
        return null;
    };
    /**
     * ### Getting last page as number.
     */
    var getLastPageAsNumber = function () {
        var lastPageIndex = getLastPageAsIndex();
        if (lastPageIndex !== null)
            return lastPageIndex + 1;
        return null;
    };
    /**
     * ### Getting last page as object.
     */
    var getLastPage = function () {
        var lastPageIndex = getLastPageAsIndex();
        if (lastPageIndex === null)
            return null;
        return pages[lastPageIndex];
    };
    /**
     * ### Getting page count.
     * @returns Pages total count.
     */
    var getPagesCount = function () { return Math.ceil(data.length / take); };
    /**
     * ### Getting has next page.
     */
    var getHasNext = function () {
        var currentPage = getCurrentPageAsIndex();
        var lastPage = getLastPageAsIndex();
        if (lastPage === null)
            return false;
        return currentPage < lastPage;
    };
    /**
     * ### Getting has previous page.
     */
    var getHasPrevious = function () {
        var currentPage = getCurrentPageAsIndex();
        var firstPage = getFirstPageAsIndex();
        if (firstPage === null)
            return false;
        return currentPage > firstPage;
    };
    // Getters end.
    // Actions start.
    var goNext = function () {
        ++currentIndex;
        return generate();
    };
    var goPrevious = function () {
        --currentIndex;
        return generate();
    };
    /**
     * ### Make pages.
     */
    var makePages = function () {
        pages = [];
        for (var i = 0; i < getPagesCount(); i++) {
            pages.push({
                index: i,
                page: i + 1,
                data: data.slice(take * i, take * (i + 1)),
            });
        }
    };
    var generate = function () {
        // Data is array?
        var isArray = Array.isArray(data);
        if (!isArray)
            throw new Error("Data is must be array type.");
        // Divide pages.
        makePages();
        // Create result.
        var result = {
            count: getPagesCount(),
            pages: pages,
            currentPage: getCurrentPage(),
            firstPage: getFirstPage(),
            lastPage: getLastPage(),
            hasNext: getHasNext(),
            hasPrevious: getHasPrevious(),
            next: goNext,
            previous: goPrevious,
        };
        return result;
    };
    // Actions end.
    return {
        generate: generate,
    };
};
exports.generator = generator;
