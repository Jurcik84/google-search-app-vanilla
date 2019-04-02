import { div } from "./../ui-generator";

import uiHeaderView from "./uiHeaderView";
import uiContentView from "./uiContentView";

const rootView = (state, dispatch) => {
  const { isError = false, message } = state;
  const ids = {
    id: "ui-root-view",
    className: "ui-root-view row"
  };
  const errMessage = message === 404 ? "no content" : message === 403 ? "Search limit reached" : "unknow error"
  return div(
    ids,
    isError
      ? div(
          {
            className: "error-view red padd1"
          },
          "Sorry app is in trouble ..." + errMessage
        )
      : "",
    uiHeaderView(state, dispatch),
    uiContentView(state, dispatch)
  );
};

export default rootView;
