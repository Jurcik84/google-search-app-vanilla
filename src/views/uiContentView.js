import { div } from "../ui-generator";

import linksView from "./uiWebResultsSubView";
import imagesView from "./uiImageResultsSubView";
import paginationView from "./uiPaginationSubView";

export default function(state, dispatch) {
 
  try {

    const { listResult = [] } = state;
    if (listResult.length > 0) {
      return init(state, dispatch);
    } else {
      return div(null, "No Result from Google Search Api");
    }
  
    function init(state, dispatch) {
      return div(
        {
          id: "anim-fade-in",
          className: "row ui-container bg-dark-gray"
        },
        imagesView(state, dispatch),
        linksView(state, dispatch),
        paginationView(state, dispatch)
      );
    }
  }
  catch(err){
    console.log('err in UI', err.message);
    dispatch({
      type: "ERROR_IN_WHEN_RENDERING_UI"
    })
    return div(null, '');
  }
}
