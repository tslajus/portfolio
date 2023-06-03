import { useState, useEffect } from "react";

import { BiLinkExternal as External } from "react-icons/bi";
import {
  SiGithub as GitHub,
  SiLinkedin as LinkedIn,
  SiTypescript as TS,
  SiJavascript as JS,
  SiSass as Sass,
  SiHtml5 as Html,
  SiCss3 as Css,
  SiReact as React,
  SiNodedotjs as Node,
  SiMongodb as Mongo,
  SiOpenai as OpenAi,
} from "react-icons/si";

import styles from "./IconPicker.module.scss";

type IconPickerProps = Link & React.HTMLAttributes<HTMLElement>;

const IconPicker = ({
  icon,
  linkUrl = "#",
  linkComment,
  nameOnSide = false,
  className = "",
}: IconPickerProps) => {
  const [mouseDown, setMouseDown] = useState(false);

  let renderedIcon;
  let renderedName;
  let url;
  let type;

  switch (icon) {
    case "github":
      type = "active";
      renderedIcon = <GitHub />;
      url = linkUrl;
      break;

    case "linkedin":
      type = "active";
      renderedIcon = <LinkedIn />;
      url = linkUrl;
      break;

    case "preview":
      type = "active";
      renderedIcon = (
        <div className={styles["external-link"]}>
          <External />
        </div>
      );
      url = linkUrl;
      break;

    case "js":
      type = "passive";
      renderedIcon = <JS />;
      renderedName = "JavaScript";
      break;

    case "ts":
      type = "passive";
      renderedIcon = <TS />;
      renderedName = "TypeScript";
      break;

    case "react":
      type = "passive";
      renderedIcon = <React />;
      renderedName = "React";
      break;

    case "css":
      type = "passive";
      renderedIcon = <Css />;
      renderedName = "CSS";
      break;

    case "html":
      type = "passive";
      renderedIcon = <Html />;
      renderedName = "HTML";
      break;

    case "sass":
      type = "passive";
      renderedIcon = <Sass />;
      renderedName = "Sass";
      break;

    case "node":
      type = "passive";
      renderedIcon = <Node />;
      renderedName = "Node.js";
      break;

    case "mongo":
      type = "passive";
      renderedIcon = <Mongo />;
      renderedName = "MongoDB";
      break;

    case "openai":
      type = "Open AI";
      renderedIcon = <OpenAi />;
      renderedName = "Open AI";
      break;
  }

  if (type === "active")
    return (
      <a
        className={`${styles["icon-link"]}  ${className}`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {renderedIcon}
        {linkComment && <div className={styles.name}>{linkComment}</div>}
      </a>
    );

  const handleMouseDown = () => {
    setMouseDown(true);
  };

  useEffect(() => {
    const handleMouseUp = () => {
      setMouseDown(false);
    };

    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      className={`${styles["icon-static"]}  ${className}`}
      onMouseDown={handleMouseDown}
    >
      {renderedIcon}

      <div
        className={`${styles.name} ${nameOnSide && styles.side} ${
          mouseDown && styles.hidden
        }`}
      >
        {renderedName}
      </div>
    </div>
  );
};

export default IconPicker;
