import { useRef } from "react";
import { keyGen, scrollToId } from "@/helpers";
import { useNavigation } from "@/contexts/NavigationContext";
import { ArrowBtn, TxtBtn } from "@/components";

import styles from "./Navigation.module.scss";

function NavigationLinks({ links, type, isReversed = false }: NavLinks) {
  const linkButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const arrowButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const { hoveredIndex, setHoveredIndex } = useNavigation();

  const handleNavClick = (id: string) => {
    scrollToId(id);
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = (_: number) => {
    setHoveredIndex(-1);
  };

  const renderLinks = () => (
    <>
      {links.map((item, index) => (
        <li key={keyGen()}>
          <TxtBtn
            isSelected={item.direction === "current"}
            ref={(el) => (linkButtonsRef.current[index] = el)}
            onClick={() => handleNavClick(item.id)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            data-index={index}
            className={`${styles.btn} ${
              index === hoveredIndex ? styles.hover : ""
            }`}
          >
            {item.title}
          </TxtBtn>
        </li>
      ))}
    </>
  );

  const renderArrows = () => (
    <>
      {links.map((arrow, index) => (
        <ArrowBtn
          direction={arrow.direction}
          ref={(el) => (arrowButtonsRef.current[index] = el)}
          key={keyGen()}
          className={`${styles["arrow-btn"]}  ${
            isReversed &&
            arrow.direction === "current" &&
            styles["arrow-btn--reversed"]
          } ${index === hoveredIndex && styles.hover}`}
          onClick={() => handleNavClick(arrow.id)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          data-index={index}
        />
      ))}
    </>
  );

  const renderCombo = () => (
    <>
      {links.map((item, index) => (
        <li key={keyGen()}>
          <ArrowBtn
            direction={item.direction}
            ref={(el) => (arrowButtonsRef.current[index] = el)}
            className={`${styles["arrow-btn"]} ${
              styles[`arrow-btn--${item.direction}`]
            } ${
              isReversed &&
              item.direction === "current" &&
              styles["arrow-btn--reversed"]
            } ${index === hoveredIndex && styles.hover}`}
            onClick={() => handleNavClick(item.id)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            data-index={index}
          />
          <TxtBtn
            isSelected={item.direction === "current"}
            ref={(el) => (linkButtonsRef.current[index] = el)}
            onClick={() => handleNavClick(item.id)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            data-index={index}
            className={` ${styles.btn} ${
              index === hoveredIndex ? styles.hover : ""
            }`}
          >
            {item.title}
          </TxtBtn>
        </li>
      ))}
    </>
  );

  if (type === "links") return renderLinks();
  else if (type === "arrows") return renderArrows();
  else if (type === "combo") return renderCombo();
  else return null;
}

export { NavigationLinks };
