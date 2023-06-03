import styles from "./Heading.module.scss";

type HeadingProps = {
  text: HeadingText;
  color?: Colors;
  tag?: TextTag;
  size?: "small" | "normal" | "big";
  align?: Align;
  className?: string;
};

function Heading({
  text,
  color = "primary",
  tag = "h2",
  size = "normal",
  align = "start",
  className = "",
}: HeadingProps) {
  const Tag = tag;

  return (
    <Tag
      className={`${styles.heading} ${styles[color]} ${
        styles[`heading--${size}`]
      } 
      } ${styles[`${align}`]} ${className}`}
    >
      {text}
    </Tag>
  );
}

export default Heading;
