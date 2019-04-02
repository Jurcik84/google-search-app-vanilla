import {
  initDataModel,
} from "./dataModel";

const update = (obState = initDataModel, obAction = {}) => {
  switch (obAction.type) {
    case "LOADER_ON":
      return {
        ...obState,
        isLoading: true,
        isError: false,
      };

    case "FETCH_SEARCH_RESULTS":
      const {
        data = {}, searcQuery = ""
      } = obAction;
      const {
        items = [], queries = {}
      } = data;
      const {
        request = []
      } = queries;
      const [reqObj] = request;
      const {
        startIndex
      } = reqObj;

      return {
        ...obState,
        searchQuery: searcQuery,
        listResult: items,
        isLoading: false,
        isError: false,
        startIndex
      };

    case "SEARCH_FETCH_ERROR":
    case "ERROR_IN_WHEN_RENDERING_UI":
      const {
        message
      } = obAction;
      return {
        ...obState,
        listResult: [],
        isLoading: false,
        isError: true,
        message: message,
      };
    case "FINALL_AFTER_FETCH":
      return {
        ...obState,
        isLoading: false,
      };
    default:
      return obState;
  }
};

export default update;