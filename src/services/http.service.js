import { CONSTANTS } from "./http.constants";
import {loaderOn, fetchSearchResults, fetchSearchError} from './http.actions'


// Search api - get
export function searchOnGoogle(searcQuery="", index = 1) {
  return function(dispatch) {
    dispatch(loaderOn());
    fetch(
      CONSTANTS.urlBase +
        CONSTANTS.apiName +
        "v1?q=" +
        encodeURIComponent(searcQuery) +
        "&start=" +
        index +
        CONSTANTS.cx +
        CONSTANTS.key +
        CONSTANTS.searchType
    )
      .then(response => {
        if (response.ok === true && response.status === 200) {
          return response;
        } else {
           return Promise.reject((response));
        }
      })
      .then(res => res.json())
      .then(data => {
        dispatch(fetchSearchResults(data, searcQuery));
      })
      .catch(errorStatus => {

        console.error("http.service:ERROR",errorStatus.status, errorStatus )

        const {status} = errorStatus;

        if (status && status === 403) {
          dispatch(fetchSearchError(403,searcQuery));
        } else if (status && status === 400) {
          dispatch(fetchSearchError(400, searcQuery));
        } else {
          dispatch(fetchSearchError('unknow', searcQuery));
        }
      }).finally(()=> dispatch({
        type: "FINALL_AFTER_FETCH"
      }))
  };
}
