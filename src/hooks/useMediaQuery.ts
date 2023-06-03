import { useEffect, useState } from "react";

type Sizes =
  | "4col-lg"
  | "4col-md"
  | "4col-sm"
  | "3col-lg"
  | "3col-md"
  | "3col-sm"
  | "2col-lg"
  | "2col-md"
  | "2col-sm"
  | "1col-lg"
  | "1col-md"
  | "1col-sm"
  | "1col-xs"
  | "1col-xxs";

const useMediaQuery = (size: Sizes) => {
  const sizes: Record<Sizes, string> = {
    "4col-lg": "(max-width: 1919px)",
    "4col-md": "(max-width: 1699px)",
    "4col-sm": "(max-width: 1499px)",
    "3col-lg": "(max-width: 1399px)",
    "3col-md": "(max-width: 1299px)",
    "3col-sm": "(max-width: 1199px)",
    "2col-lg": "(max-width: 1079px)",
    "2col-md": "(max-width: 859px)",
    "2col-sm": "(max-width: 759px)",
    "1col-lg": "(max-width: 729px)",
    "1col-md": "(max-width: 619px)",
    "1col-sm": "(max-width: 539px)",
    "1col-xs": "(max-width: 479px)",
    "1col-xxs": "(max-width: 399px)",
  };
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(sizes[size]);

    const handleMediaChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    setMatches(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, [size]);

  return matches;
};

export default useMediaQuery;
