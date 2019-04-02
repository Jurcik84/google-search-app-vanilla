const doc = document;

export default function view(strType, obProps = {}, ...arrChildren) {
  try {
    const obHTMLObject =
      strType && typeof strType === "string" && strType.length > 0
        ? doc.createElement(strType)
        : null;

    // const obPropsWithStyle = Object.assign({}, obProps.style);
    // const obPropsWithoutStyle = Object.assign({}, obProps);
    // delete obPropsWithoutStyle.style;

    if (
      obProps &&
      typeof obProps === "object" &&
      typeof obProps.length === "undefined" &&
      !Array.isArray(obProps)
    ) {
      Object.assign(obHTMLObject, obProps);
    }

    if (arrChildren && Array.isArray(arrChildren) && arrChildren.length > 0) {
      for (let child of arrChildren) {
        // console.log("chilf", typeof child, child, strType, obProps);
        if (typeof child === "string" || typeof child === "number") {
          obHTMLObject.appendChild(doc.createTextNode(String(child)));
        } else {
          obHTMLObject.appendChild(child);
        }
      }
    }

    return obHTMLObject;
  } catch (error) {
    console.warn("view generator error", error.message, arrChildren);
  }
}

export function rangeInput(obProps) {
  const obInput = doc.createElement("input");
  if (obProps) {
    Object.assign(obProps, {
      ...obProps,
      type: "range"
    });
  }
  return obInput;
}

export function div(obProps, ...listChildren) {
  return view(
    "div",
    {
      ...obProps
    },
    ...listChildren
  );
}

export function button(obProps, ...listChildren) {
  return view(
    "button",
    {
      ...obProps
    },
    ...listChildren
  );
}

export function textInput(obProps) {
  const obInput = doc.createElement("input");
  if (obProps) {
    Object.assign(obProps, {
      ...obProps,
      type: "text"
    });
  }
  return obInput;
}

export function searchInput(obProps) {
  try {
    const obInput = doc.createElement("input");
    if (obProps) {
      Object.assign(obInput, {
        type: "search",
        ...obProps
      });
    }

    return obInput;
  } catch (error) {
    console.log("err search input", error.message);
  }
}

export function image(obProps) {
  const obImg = doc.createElement("img");
  if (obProps) Object.assign(obImg, obProps);
  return obImg;
}

export function link(obProps, ...listChildren) {
  return view(
    "a",
    {
      ...obProps
    },
    ...listChildren
  );
}

export function ul(obProps, ...listChildren) {
  return view(
    "ul",
    {
      ...obProps
    },
    ...listChildren
  );
}

export function li(obProps, ...listChildren) {
  return view(
    "li",
    {
      ...obProps
    },
    ...listChildren
  );
}

export function header(obProps, ...listChildren) {
  return view(
    "header",
    {
      ...obProps
    },
    ...listChildren
  );
}

export function footer(obProps, ...listChildren) {
  return view(
    "footer",
    {
      ...obProps
    },
    ...listChildren
  );
}

export function nav(obProps, ...listChildren) {
  return view(
    "nav",
    {
      ...obProps
    },
    ...listChildren
  );
}

export function section(obProps, ...listChildren) {
  return view(
    "section",
    {
      ...obProps
    },
    ...listChildren
  );
}

export function aside(obProps, ...listChildren) {
  return view(
    "aside",
    {
      ...obProps
    },
    ...listChildren
  );
}

export function main(obProps, ...listChildren) {
  return view(
    "main",
    {
      ...obProps
    },
    ...listChildren
  );
}

export function H1(obProps, ...listChildren) {
  return view(
    "h1",
    {
      ...obProps
    },
    ...listChildren
  );
}

export function H2(obProps, ...listChildren) {
  return view(
    "h2",
    {
      ...obProps
    },
    ...listChildren
  );
}

export function H3(obProps, ...listChildren) {
  return view(
    "h3",
    {
      ...obProps
    },
    ...listChildren
  );
}

export function H4(obProps, ...listChildren) {
  return view(
    "h4",
    {
      ...obProps
    },
    ...listChildren
  );
}
