import { ReactNode } from "react";
import { useScreenSize } from "@/hooks";
import { TileContainer } from "@/layout";
import { Heading } from "@/components";

import styles from "./InnerTile.module.scss";

type InnerTileProps = {
  children?: ReactNode | ReactNode[] | string;
  heading?: HeadingText;
  scratches?: Scratch[];
  isBottom?: boolean;
  isRight?: boolean;
  isJustified?: boolean;
  padding?: boolean;
  className?: ClassName;
};

function InnerTile({
  children,
  heading = "",
  scratches,
  isBottom = false,
  isRight = false,
  isJustified = false,
  padding = true,
  className,
}: InnerTileProps) {
  const {
    in4ColSm,
    in3ColLg,
    in3ColSm,
    in2ColLg,
    in2ColSm,
    in1ColLg,
    in1ColXs,
  } = useScreenSize();

  let paddingSize;

  switch (true) {
    case in4ColSm:
      paddingSize = "none";
      break;

    case in3ColLg:
      paddingSize = "normal";
      break;

    case in3ColSm:
      paddingSize = "none";
      break;

    case in2ColLg:
      paddingSize = "normal";
      break;

    case in2ColSm:
      paddingSize = "none";
      break;

    case in1ColLg:
      paddingSize = "big";
      break;

    case in1ColXs:
      paddingSize = "normal";
      break;

    default:
      paddingSize = "normal";
      break;
  }

  return (
    <TileContainer
      scratches={scratches}
      className={`${styles.container} ${isBottom && styles.bottom} ${
        isRight && styles.right
      } ${isJustified && styles.justified} ${className}`}
      padding={paddingSize as Padding}
      isSquare
    >
      {heading !== "" && (
        <Heading text={heading} size="small" className={styles.heading} />
      )}

      <div className={`${styles.innerTile}  ${padding && styles.padding}`}>
        {children}
      </div>
    </TileContainer>
  );
}

export default InnerTile;
