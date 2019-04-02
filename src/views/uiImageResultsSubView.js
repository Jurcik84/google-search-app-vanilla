import {
  div,
  ul,
  li,
  image,
  link,
  H2
} from "../ui-generator";


export default function imagesView(state, dispatch) {
  const {
    listResult = []
  } = state;
  const listImagesResults = listResult.map(img => {
    const {
      image: {
        thumbnailLink = ""
      }
    } = img;
    return li({
        className: "col30"
      },
      link({
          href: thumbnailLink
        },
        image({
          src: thumbnailLink
        })
      )
    );
  });

  try {
    // maybe to much ? or error handling ?
    if (listResult === "undefined") {
      throw new Error(
        "listResult must be a array and it is undefined - image view"
      );
    }
    if (!Array.isArray(listResult)) {
      throw new Error(
        "listResult array for images is not array type  - image view"
      );
    }

    if (Array.isArray(listResult) && listResult.length === 0) {
      throw new Error("listResult is array type - but is empty");
    }

    return div({
        className: "col50"
      },
      H2(null, "Image Result"),
      ul({
          className: "row img-list"
        },
        ...listImagesResults
      )
    );
  } catch (e) {
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