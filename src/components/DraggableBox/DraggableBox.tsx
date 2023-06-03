import { useRef } from "react";
import Draggable from "react-draggable";
import { keyGen } from "@/helpers";

import styles from "./DraggableBox.module.scss";

type DraggableBoxProps = {
  children: DraggableItem[];
  isRandom?: boolean;
  className?: ClassName;
};

function DraggableBox({
  children,
  className,
  isRandom = false,
}: DraggableBoxProps) {
  const parentRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`${styles.container} ${className}`} ref={parentRef}>
      {children.map(
        ({
          childNode,
          top = "auto",
          bottom = "auto",
          left = "auto",
          right = "auto",
        }) => {
          const itemPosition = isRandom
            ? {
                position: "absolute" as "absolute",
                top,
                bottom,
                left,
                right,
              }
            : undefined;

          return (
            <Draggable key={keyGen()} bounds="parent">
              <div className={styles.item} style={itemPosition}>
                {childNode}
              </div>
            </Draggable>
          );
        }
      )}
    </div>
  );
}
export default DraggableBox;
