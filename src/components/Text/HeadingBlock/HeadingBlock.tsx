import { useScreenSize } from "@/hooks";
import { TileContainer } from "@/layout";
import { Heading } from "@/components";

import styles from "./HeadingBlock.module.scss";

type HeadingBlockProps = {
  heading: HeadingText;
  tag?: TextTag;
  type?: "single" | "double" | "double-reverse";
  size?: "small" | "normal" | "big";
  align?: Align;
  headingBig?: HeadingText;
  tagBig?: TextTag;
  className?: ClassName;
  bigHeadingClass?: ClassName;
  id?: string;
};

function HeadingBlock({
  heading,
  tag = "h2",
  type = "single",
  size = "normal",
  align = "start",
  headingBig = "",
  tagBig = "h2",
  className,
  bigHeadingClass,
  id,
}: HeadingBlockProps) {
  const { oneColRange, is1ColXs } = useScreenSize();

  const SingleHeading = (
    <TileContainer
      className={`${styles.container}  ${className}`}
      id={id}
      isSquare
    >
      <Heading text={heading} size={size} align={align} tag={tag} />
    </TileContainer>
  );

  const DoubleHeading = (
    <div className={`${styles["container-double"]}  ${className}`} id={id}>
      <TileContainer
        className={`${styles.container} ${styles["position-first"]}  ${className}`}
      >
        <Heading
          text={headingBig}
          tag={tagBig}
          color="white"
          size="big"
          align={align}
          className={`${styles["heading-big"]} ${bigHeadingClass}`}
        />
      </TileContainer>
      {SingleHeading}
    </div>
  );

  const DoubleHeadingReverse = (
    <div className={`${styles["container-double"]}  ${className}`} id={id}>
      <TileContainer
        className={`${styles.container} ${styles["position-first"]}  ${className}`}
      >
        <Heading text={heading} size={size} align={align} tag={tag} />
        <Heading
          text={headingBig}
          tag={tagBig}
          color="white"
          size="big"
          className={`${styles["heading-big"]} ${bigHeadingClass}`}
        />
      </TileContainer>
      <TileContainer />
    </div>
  );

  const DoebleHeadingSmall = (
    <div className={`${styles["container"]}  ${className}`} id={id}>
      <TileContainer
        padding={oneColRange && !is1ColXs ? "big" : "normal"}
        className={`${styles.container} ${styles["position-first"]}  ${className}`}
      >
        <Heading text={heading} size={size} align={align} tag={tag} />
        <Heading
          text={headingBig}
          tag={tagBig}
          color="white"
          size="big"
          className={`${styles["heading-big"]} ${bigHeadingClass}`}
        />
      </TileContainer>
    </div>
  );

  if (type === "single") return SingleHeading;
  else if (type === "double" && !oneColRange) return DoubleHeading;
  else if (type === "double-reverse" && !oneColRange)
    return DoubleHeadingReverse;
  else if (oneColRange) return DoebleHeadingSmall;
  else return SingleHeading;
}

export default HeadingBlock;
