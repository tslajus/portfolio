import { useScreenSize } from "@/hooks";

const getTotalGrids = (
  fourCol: number,
  threeCol: number,
  twoCol: number,
  oneCol: number
): number => {
  const { fourColRange, threeColRange, twoColRange, oneColRange } =
    useScreenSize();

  if (fourColRange) {
    return fourCol;
  } else if (threeColRange) {
    return threeCol;
  } else if (twoColRange) {
    return twoCol;
  } else if (oneColRange) {
    return oneCol;
  } else {
    return fourCol;
  }
};

export default getTotalGrids;
