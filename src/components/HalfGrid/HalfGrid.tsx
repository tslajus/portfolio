import { useScreenSize } from "@/hooks";
import { keyGen } from "@/helpers";
import { TileContainer, Grid } from "@/layout";

import styles from "./HalfGrid.module.scss";

function HalfGrid() {
  const { threeColRange, twoColRange, oneColRange } = useScreenSize();

  let columnCount: number;

  switch (true) {
    case threeColRange:
      columnCount = 3;
      break;

    case twoColRange:
      columnCount = 2;
      break;

    case oneColRange:
      columnCount = 1;
      break;

    default:
      columnCount = 4;
      break;
  }

  const renderedHalfTiles = () => {
    const halfTiles = [];

    for (let i = 0; i < columnCount; i++) {
      halfTiles.push(
        <TileContainer className={styles["half-tile"]} key={keyGen()} />
      );
    }

    return halfTiles;
  };

  return (
    <Grid
      className={styles.container}
      totalGrids={columnCount}
      filledGrids={[columnCount]}
    >
      {renderedHalfTiles()}
    </Grid>
  );
}

export default HalfGrid;
