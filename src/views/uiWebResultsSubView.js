import { div, ul, li, image, link, H2, H3, H4, button } from "../ui-generator";

export default function linksView(state, dispatch) {
  try {
    const { listResult = [], message, isError } = state;
    if (isError === false && listResult.length > 0) {
      const listLinkView = listResult.map(item =>
        li(
          {},
          H3(null, item.title),
          link(
            {
              href: item.link
            },
            item.displayLink
          ),
          H4(null, item.snippet)
        )
      );

      return div(
        {
          className: "col50"
        },
        H2(null, "Web Result"),
        ul(
          {
            className: "row link-list"
          },
          ...listLinkView
        )
      );
    } else {
      return div(
        {
          className: "col100"
        },
        isError === true && message === 403
          ? "Limit reached"
          : "no search results"
      );
    }
  } catch (err) {
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
