import { useRef, useEffect } from "react";

type UseImageAnimationArgs = {
  imgLoaded: boolean;
  animationIn: number;
  animationOut: number;
  delayIn: number;
  delayOut: number;
};

const useImageAnimation = ({
  imgLoaded,
  animationIn,
  animationOut,
  delayIn,
  delayOut,
}: UseImageAnimationArgs) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = imgRef.current?.parentElement?.parentElement;

    const updateImagePosition = () => {
      if (imgRef.current && container) {
        const imgHeight = imgRef.current.clientHeight;
        const containerHeight = container.clientHeight;

        const translateY = Math.min(0, containerHeight - imgHeight);
        imgRef.current.style.transition = `transform ${animationIn}s ${delayIn}s`;
        imgRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    const resetImagePosition = () => {
      if (imgRef.current) {
        imgRef.current.style.transition = `transform ${animationOut}s ${delayOut}s`;
        imgRef.current.style.transform = "translateY(0)";
      }
    };

    if (container && imgLoaded) {
      container.addEventListener("mouseenter", updateImagePosition);
      container.addEventListener("mouseleave", resetImagePosition);
      window.addEventListener("resize", updateImagePosition);

      return () => {
        if (container) {
          container.removeEventListener("mouseenter", updateImagePosition);
          container.removeEventListener("mouseleave", resetImagePosition);
        }
        window.removeEventListener("resize", updateImagePosition);
      };
    }
  }, [imgLoaded, animationIn, animationOut, delayIn, delayOut]);

  return imgRef;
};

export default useImageAnimation;
