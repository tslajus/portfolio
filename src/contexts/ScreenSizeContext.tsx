import { createContext, ReactNode, Fragment } from "react";
import { useMediaQuery } from "@/hooks";
import { keyGen } from "@/helpers";

type ScreenSizeProviderProps = {
  children: ReactNode | ReactNode[];
};

type ScreenSizeContextProps = {
  is4ColLg: boolean;
  is4ColMd: boolean;
  is4ColSm: boolean;
  is3ColLg: boolean;
  is3ColMd: boolean;
  is3ColSm: boolean;
  is2ColLg: boolean;
  is2ColMd: boolean;
  is2ColSm: boolean;
  is1ColLg: boolean;
  is1ColMd: boolean;
  is1ColSm: boolean;
  is1ColXs: boolean;
  is1ColXxs: boolean;
  fourColRange: boolean;
  threeColRange: boolean;
  twoColRange: boolean;
  oneColRange: boolean;
  smallestRange: boolean;
  in4ColSm: boolean;
  in3ColLg: boolean;
  in3ColSm: boolean;
  in2ColLg: boolean;
  in2ColSm: boolean;
  in1ColLg: boolean;
  in1ColXs: boolean;
  showNav: boolean;
  noElement: () => {
    element: ReactNode;
    gridSize: number;
  };
};

export const ScreenSizeContext = createContext<ScreenSizeContextProps>({
  is4ColLg: false,
  is4ColMd: false,
  is4ColSm: false,
  is3ColLg: false,
  is3ColMd: false,
  is3ColSm: false,
  is2ColLg: false,
  is2ColMd: false,
  is2ColSm: false,
  is1ColLg: false,
  is1ColMd: false,
  is1ColSm: false,
  is1ColXs: false,
  is1ColXxs: false,
  fourColRange: false,
  threeColRange: false,
  twoColRange: false,
  oneColRange: false,
  smallestRange: false,
  in4ColSm: false,
  in3ColLg: false,
  in3ColSm: false,
  in2ColLg: false,
  in2ColSm: false,
  in1ColLg: false,
  in1ColXs: false,
  showNav: false,
  noElement: () => ({ element: <Fragment key={keyGen()} />, gridSize: 0 }),
});

export const ScreenSizeProvider = ({ children }: ScreenSizeProviderProps) => {
  const is4ColLg = useMediaQuery("4col-lg");
  const is4ColMd = useMediaQuery("4col-md");
  const is4ColSm = useMediaQuery("4col-sm");
  const is3ColLg = useMediaQuery("3col-lg");
  const is3ColMd = useMediaQuery("3col-md");
  const is3ColSm = useMediaQuery("3col-sm");
  const is2ColLg = useMediaQuery("2col-lg");
  const is2ColMd = useMediaQuery("2col-md");
  const is2ColSm = useMediaQuery("2col-sm");
  const is1ColLg = useMediaQuery("1col-lg");
  const is1ColMd = useMediaQuery("1col-md");
  const is1ColSm = useMediaQuery("1col-sm");
  const is1ColXs = useMediaQuery("1col-xs");
  const is1ColXxs = useMediaQuery("1col-xxs");

  const fourColRange = !is3ColLg && !is2ColLg;
  const threeColRange = is3ColLg && !is2ColLg;
  const twoColRange = is2ColLg && !is1ColLg;
  const oneColRange = is1ColLg;
  const smallestRange = is1ColXxs;

  const in4ColSm = is4ColSm && !is3ColLg;
  const in3ColLg = is3ColLg && !is3ColSm;
  const in3ColSm = is3ColSm && !is2ColLg;
  const in2ColLg = is2ColLg && !is2ColSm;
  const in2ColSm = is2ColSm && !is1ColLg;
  const in1ColLg = is1ColLg && !is1ColXs;
  const in1ColXs = is1ColXs;

  let showNav;
  switch (true) {
    case fourColRange:
      showNav = true;
      break;

    case threeColRange:
      showNav = true;
      break;

    case twoColRange:
      showNav = false;
      break;

    case oneColRange:
      showNav = false;
      break;

    default:
      showNav = true;
      break;
  }

  const noElement = () => ({
    element: <Fragment key={keyGen()} />,
    gridSize: 0,
  });

  const sharedValues = {
    is4ColLg,
    is4ColMd,
    is4ColSm,
    is3ColLg,
    is3ColMd,
    is3ColSm,
    is2ColLg,
    is2ColMd,
    is2ColSm,
    is1ColLg,
    is1ColMd,
    is1ColSm,
    is1ColXs,
    is1ColXxs,
    fourColRange,
    threeColRange,
    twoColRange,
    oneColRange,
    smallestRange,
    in4ColSm,
    in3ColLg,
    in3ColSm,
    in2ColLg,
    in2ColSm,
    in1ColLg,
    in1ColXs,
    showNav,
    noElement,
  };

  return (
    <ScreenSizeContext.Provider value={sharedValues}>
      {children}
    </ScreenSizeContext.Provider>
  );
};
