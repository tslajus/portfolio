import { ReactNode } from "react";
import { generateEmptyTiles } from "@/helpers";

import styles from "./Grid.module.scss";

type GridProps = {
  children?: ReactNode | ReactNode[];
  totalGrids: number;
  filledGrids: number[];
  className?: string;
  id?: string;
};

function Grid({ children, totalGrids, filledGrids, id, className }: GridProps) {
  const emptyTiles = generateEmptyTiles(totalGrids, filledGrids);

  return (
    <div className={`${styles.container} ${className}`} id={id}>
      {children}
      {emptyTiles}
    </div>
  );
}

export default Grid;
