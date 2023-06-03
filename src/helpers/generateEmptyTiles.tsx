import { keyGen } from "@/helpers";
import { TileContainer } from "@/layout";

function generateEmptyTiles(totalGridCount: number, gridSizes: number[]) {
  const totalFilledGrids = gridSizes.reduce((acc, cur) => acc + cur, 0);

  const emptyCount = totalGridCount - totalFilledGrids;

  const emptyTiles = [];
  for (let i = 0; i < emptyCount; i++) {
    emptyTiles.push(<TileContainer isSquare doesChangeColor key={keyGen()} />);
  }
  return emptyTiles;
}

export default generateEmptyTiles;
