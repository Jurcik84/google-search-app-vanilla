// actions
export const loaderOn = () => ({
    type: "LOADER_ON"
});
export const fetchSearchResults = (data, searcQuery = "") => ({
    type: "FETCH_SEARCH_RESULTS",
    data,
    searcQuery
});
export const fetchSearchError = (code, searcQuery = "") => ({
    type: "SEARCH_FETCH_ERROR",
    message: code,
    searcQuery
});