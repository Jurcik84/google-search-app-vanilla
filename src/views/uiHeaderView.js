import { div, searchInput, button, header } from "./../ui-generator";

import { searchOnGoogle } from "../services/http.service";

const uiHeaderView = (state, dispatch) => {
 
   try {
    const { isLoading, searchQuery } = state;
    const uiLoalState = {
      searchValue: ""
    };
  
    const uiLocalSetState = (obUpdate = {}) => {
      Object.assign(uiLoalState, obUpdate);
    };
  
    const ids = {
      id: "ui-header-view",
      className: "ui-header-view"
    };
  
    return header(
      ids,
      div(
        {
          className: "ui-container row"
        },
     
        searchInput({
          placeholder: searchQuery || "search movies, pics and more",
          className: "col70 search-input",
          onkeyup: ({ target }) => {
            uiLocalSetState &&
              uiLocalSetState({
                searchValue: target.value
              });
          }
        }),
        button(
          {
            className: "col30 search-btn",
            onclick: () => {
              uiLoalState.searchValue &&
                uiLoalState.searchValue.length > 0 &&
                dispatch &&
                dispatch(searchOnGoogle(uiLoalState.searchValue, 1));
            }
          },
          isLoading ? "searching..." : "search"
        )
      )
    );
   }
   catch(err){
    console.log('err in UI', err.message);
    dispatch({
      type: "ERROR_IN_WHEN_RENDERING_UI"
    });
    return div(null, '');
   }
};

export default uiHeaderView;
