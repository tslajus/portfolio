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

  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <TileContainer
      padding="none"
      className={`${styles.container} ${className}`}
      onClick={handleClick}
    >
      {imgLoaded ? (
        <div className={`${styles.img} ${noHover && styles["no-hover"]}`}>
          <img src={src} alt={alt} />
        </div>
      ) : (
        <Loader title={alt} />
      )}
      <div className={styles["hover-border"]} />
    </TileContainer>
  );
}

export default Img;
