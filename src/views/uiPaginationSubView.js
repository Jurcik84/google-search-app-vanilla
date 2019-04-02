import { searchOnGoogle } from "../services/http.service";

import scrollTop from "../utils/scrollTop";

import { div, ul, li, button } from "../ui-generator";

export default function paginationView(state, dispatch) {
   try {
    const { listResult = [], searchQuery, startIndex } = state;

    const listPagi = [...Array(10)]
      .map((_, index) => index + 1)
      .map((item, pagIndex) =>
        li(
          {
            className:
              startIndex - 1 === pagIndex ? "pagi-active pagi-li" : "pagi-li"
          },
          button(
            {
              className: "pagi-btn",
              onclick: () => {
                dispatch(searchOnGoogle(searchQuery, item));
                scrollTop();
              }
            },
            item
          )
        )
      );
  
    if (listResult.length > 0) {
      return div(
        {
          className: "row margB2 margT2"
        },
        ul(
          {
            className: "left-gap50 col50"
          },
          ...listPagi
        )
      );
    } else {
      return div(null, "");
    }
   }
   catch(err){
    console.error("error in UI", e.message);
    dispatch({
      type: "ERROR_IN_WHEN_RENDERING_UI"
    });
    return div(
      null,
      ""
    );
   }
}
