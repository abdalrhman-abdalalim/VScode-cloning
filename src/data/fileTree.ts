import { IFile } from "../interfaces";
import { v4 as uuid } from "uuid";

export const FileTree: IFile = {
  id: uuid(),
  name: "Vs code Clone",
  isFolder: true,
  children: [
    {
      id: uuid(),
      name: "node_modules",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: ".vite",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "react.tsx",
              isFolder: false,
              content: `
function createStyleObject(classNames, style) {
  return classNames.reduce((styleObject, className) => {
    return {...styleObject, ...style[className]};
  }, {});
}

function createClassNameString(classNames) {
  return classNames.join(' ');
}

// this comment is here to demonstrate an extremely long line length, well

function createChildren(style, useInlineStyles) {
  let childrenCount = 0;
  return children => {
    childrenCount += 1;
    return children.map((child, i) => createElement({
      node: child,
      style,
      useInlineStyles,
    }));
  }
}

function createElement({ node, style, useInlineStyles, key }) {
  const { properties, type, tagName, value } = node;
  if (type === "text") {
    return value;
  } else if (tagName) {
    const TagName = tagName;
    const childrenCreator = createChildren(style, useInlineStyles);
    const props = (
      useInlineStyles
      ? { style: createStyleObject(properties.className, style) }
      : { className: createClassNameString(properties.className) }
    );
    const children = childrenCreator(node.children);
    return <TagName key={key} {...props}>{children}</TagName>;
  }
}`,
            },
          ],
        },
      ],
    },
    {
      id: uuid(),
      name: "styles",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "index.txt",
          isFolder: false,
        },
      ],
    },
  ],
};

export const fileName: Record<string,string> = {
  tsx:"public\\icons\\tsx.svg",
  js: "public\\icons\\html.svg",
  html: "public\\icons\\css.svg",
  css: "public\\icons\\js.svg",
  ts :  "public\\icons\\ts.svg"
}