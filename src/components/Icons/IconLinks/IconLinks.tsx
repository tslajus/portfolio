import { keyGen, linkConverter } from "@/helpers";
import { IconPicker } from "@/components";

import styles from "./IconLinks.module.scss";

type IconLinksProps = {
  links: Link[];
  align?: Align;
  isColumn?: boolean;
  className?: ClassName;
};

const IconLinks = ({
  links,
  align = "start",
  className = "",
  isColumn = false,
}: IconLinksProps) => {
  const icons = linkConverter(links);
  const renderedIcons = icons.map((icon) => {
    return <IconPicker key={keyGen()} {...icon} />;
  });

  return (
    <div
      className={`${styles["icon-box"]} ${styles[align]} ${
        isColumn && styles.column
      } ${className}`}
    >
      {renderedIcons}
    </div>
  );
};

export default IconLinks;
