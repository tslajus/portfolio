import { useState, useEffect } from "react";
import { useImageAnimation } from "@/hooks";
import { TileContainer } from "@/layout";
import { Loader } from "@/components";

import styles from "./ProjectPreview.module.scss";

type ProjectPreviewProps = {
  url?: string;
  img?: string;
  hoverImg?: string;
  alt?: string;
  animationIn?: number;
  animationOut?: number;
  delayIn?: number;
  delayOut?: number;
  direction?: "horizontal" | "vertical";
  title?: string;
  isStatic?: boolean;
  className?: ClassName;
};

function ProjectPreview({
  url,
  img = "",
  hoverImg = "",
  alt = "",
  animationIn = 20,
  animationOut = 5,
  delayIn = 0,
  delayOut = 0,
  title = "",
  direction = "horizontal",
  isStatic = false,
  className = "",
}: ProjectPreviewProps) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [hoverImgLoaded, setHoverImgLoaded] = useState(false);
  const imgRef = useImageAnimation({
    imgLoaded,
    animationIn,
    animationOut,
    delayIn,
    delayOut,
  });

  useEffect(() => {
    const loadImage = (src: string) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
      });
    };

    loadImage(img).then(() => {
      setImgLoaded(true);
    });

    loadImage(hoverImg).then(() => {
      setHoverImgLoaded(true);
    });
  }, [img, hoverImg]);

  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  const staticImg =
    imgLoaded && hoverImgLoaded ? (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={img} alt={alt} className={styles["static-img"]} />
        <img src={hoverImg} alt={alt} className={styles["hover-img"]} />
      </a>
    ) : (
      <Loader title={title} />
    );

  const dynamicImg = imgLoaded ? (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img ref={imgRef} src={img} alt={alt} className={styles["dynamic-img"]} />
    </a>
  ) : (
    <Loader title={title} />
  );

  return (
    <TileContainer
      padding="none"
      className={`${styles.container} ${
        styles[`container--${direction}`]
      } ${className}`}
      onClick={handleClick}
    >
      {isStatic ? staticImg : dynamicImg}
      <div className={styles["hover-border"]} />
    </TileContainer>
  );
}

export default ProjectPreview;
