import { ReactNode } from "react";
import { keyGen } from "@/helpers";
import { Scratch } from "@/components";

import styles from "./TileContainer.module.scss";

type TileProps = {
  children?: ReactNode | ReactNode[];
  fontColor?: Colors;
  padding?: Padding;
  tag?: "div" | "nav";
  scratches?: Scratch[];
  isSquare?: boolean;
  isColumn?: boolean;
  className?: ClassName;
  id?: string;
};

function TileContainer({
  children,
  fontColor = "gray-normal",
  padding = "normal",
  tag = "div",
  scratches,
  isSquare = false,
  isColumn = false,
  className,
  id,
}: TileProps) {
  const Tag = tag;

  const containerClassNames = [
    styles.container,
    styles[`font--${fontColor}`],
    styles[`padding--${padding}`],
    isSquare && styles.square,
    isColumn && styles.column,
    className,
  ].join(" ");

  return (
    <Tag className={containerClassNames} id={id}>
      {children}
      <div className={styles.hover} />
      {scratches &&
        scratches.map((scratch) => (
          <Scratch key={keyGen()} scratch={scratch} />
        ))}
    </Tag>
  );
}

export default TileContainer;
