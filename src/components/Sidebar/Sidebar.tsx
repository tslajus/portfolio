import { useState, useRef } from "react";
import data from "./data.Sidebar.json";
import { useOutsideClick } from "@/hooks";
import { SidebarContent, ArrowBtn } from "@/components";
import styles from "./Sidebar.module.scss";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const handleArrowBtnClick = () => {
    setIsOpen(!isOpen);
  };

  useOutsideClick(sidebarRef, () => setIsOpen(false));

  return (
    <header
      className={`${styles.sidebar} ${isOpen && styles.open}`}
      ref={sidebarRef}
    >
      <div
        className={`${styles["hidden-content"]} ${
          !isOpen && styles["hidden-content--closed"]
        }`}
      >
        <SidebarContent isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <div className={styles["visible-content"]}>
        <span
          className={`${styles.text} ${
            isOpen ? styles["text--open"] : styles["text--closed"]
          }`}
        >
          {data.text}
        </span>
      </div>

      <div className={styles.btn}>
        <ArrowBtn
          onClick={handleArrowBtnClick}
          isActive={isOpen}
          isReversed={!isOpen}
        />
      </div>
    </header>
  );
}

export default Sidebar;
