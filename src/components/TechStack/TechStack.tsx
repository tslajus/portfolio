import data from "./data.TechStack.json";
import { useScreenSize } from "@/hooks";
import { keyGen } from "@/helpers";
import { TileContainer } from "@/layout";
import { Heading, DraggableBox, IconPicker } from "@/components";

import styles from "./TechStack.module.scss";

type TechStackProps = {
  className?: ClassName;
};

function TechStack({ className = "" }: TechStackProps) {
  const { oneColRange } = useScreenSize();

  const icons = oneColRange ? data.iconsMobile : data.icons;
  const scratch = oneColRange ? data.scratchMobile : data.scratch;

  const renderedIcons = icons.map((icon) => ({
    childNode: (
      <IconPicker
        className={styles.icon}
        icon={icon.name as Icon}
        nameOnSide
        key={keyGen()}
      />
    ),
    top: icon.top,
    left: icon.left,
  }));

  return (
    <TileContainer
      scratches={scratch}
      className={`${styles.container} ${className}`}
    >
      <div className={styles.text}>
        <Heading text={data.heading} color="gray-normal" size="small" />
      </div>

      <DraggableBox className={styles.items} isRandom>
        {renderedIcons}
      </DraggableBox>
    </TileContainer>
  );
}

export default TechStack;
