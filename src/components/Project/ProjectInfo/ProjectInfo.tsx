import { keyGen } from "@/helpers";
import { InnerTile } from "@/layout";
import { IconLinks, DraggableBox, IconPicker } from "@/components";

import styles from "./ProjectInfo.module.scss";

type ProjectInfoProps = {
  data: ProjectData;
  scratches?: Scratch[];
  withHeading?: boolean;
  isBottom?: boolean;
  isRight?: boolean;
  isJustified?: boolean;
  className?: ClassName;
};

function ProjectInfo({
  data,
  scratches,
  withHeading = false,
  isBottom = false,
  isRight = false,
  isJustified = false,
  className,
}: ProjectInfoProps) {
  const renderedIcons = data.icons.map((icon) => ({
    childNode: <IconPicker icon={icon as Icon} key={keyGen()} />,
  }));

  return (
    <InnerTile
      scratches={scratches}
      heading={withHeading ? data.title : ""}
      isBottom={isBottom}
      isRight={isRight}
      isJustified={isJustified}
      className={className}
    >
      <IconLinks className={styles.links} links={data.links} />
      <p>{data.description}</p>
      <DraggableBox children={renderedIcons} />
    </InnerTile>
  );
}

export default ProjectInfo;
