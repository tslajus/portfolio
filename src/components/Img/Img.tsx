import { useState, useEffect } from "react";
import { TileContainer } from "@/layout";
import { Loader } from "@/components";

import styles from "./Img.module.scss";

type ImgProps = {
  src: string;
  alt: string;
  url?: string;
  noHover?: boolean;
  className: ClassName;
};

function Img({
  src,
  alt = "",
  url,
  noHover = false,
  className = "",
}: ImgProps) {
  const Tag = url ? "a" : "div";

  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (src: string) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
      });
    };

    loadImage(src).then(() => {
      setImgLoaded(true);
    });
  }, [src]);

  return (
    <TileContainer
      padding="none"
      className={`${styles.container} ${className}`}
    >
      {imgLoaded ? (
        <Tag
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.img} ${noHover && styles["no-hover"]}`}
        >
          <img src={src} alt={alt} />
        </Tag>
      ) : (
        <Loader title={alt} />
      )}
      <div className={styles["hover-border"]} />
    </TileContainer>
  );
}

export default Img;
