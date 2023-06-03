/// <reference types="vite/client" />

type Colors =
  | "white"
  | "gray-light"
  | "gray-normal"
  | "gray-dark"
  | "primary"
  | "secondary"
  | "transparent";

type TextTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

type ClassName = string;

type Icon =
  | "github"
  | "linkedin"
  | "preview"
  | "js"
  | "ts"
  | "react"
  | "html"
  | "css"
  | "sass"
  | "node"
  | "mongo"
  | "openai"
  | "arrow";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type Link = {
  icon?: string;
  linkUrl?: string;
  linkComment?: string;
  nameOnSide?: boolean;
  className?: ClassName;
};

type Fonts = "primary" | "secondary";

type Align = "start" | "end" | "center";

type Padding = "normal" | "big" | "none";

type ProjectData = {
  title: string;
  description: string;
  descriptionShort: string;
  links: Link[];
  icons: string[];
};

type NavItem = {
  title: string;
  direction: "up" | "down" | "current";
  id: string;
};

type NavLinks = {
  links: NavItem[];
  type: "links" | "arrows" | "combo";
  isReversed: boolean;
};

type HeadingText = string | Array<string | JSX.Element>;

type Scratch = {
  variation: number;
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    width?: string;
    height?: string;
  };
};

type DraggableItem = {
  childNode: React.ReactNode;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  isDraggable?: boolean;
};

type NoElementFunction = () => {
  element: React.ReactNode;
  gridSize: number;
};
