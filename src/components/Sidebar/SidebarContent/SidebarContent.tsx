import { Dispatch, SetStateAction } from "react";
import data from "./data.SidebarContent.json";
import { scrollToId } from "@/helpers";
import { TxtBtn, IconLinks, Scratch } from "@/components";
import ProfilePic from "@/assets/tslajus2.jpg";

import styles from "./SidebarContent.module.scss";

type SidebarContentProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
};

function SidebarContent({ isOpen, setIsOpen }: SidebarContentProps) {
  const handleClickProjects = () => {
    scrollToId("projects-page");
    setIsOpen(false);
  };

  const header = (
    <div className={styles.header}>
      <div className={styles["header-profile"]}>
        <div className={styles["header-img"]}>
          <img src={ProfilePic} alt="profile photo" />
        </div>
        <IconLinks
          className={styles["header-icons"]}
          isColumn
          links={data.headerLinks}
        />
      </div>

      <span>{data.headerText}</span>
    </div>
  );

  const projects = (
    <div className={styles.projects}>
      <span>{data.projectsText}</span>
      <TxtBtn
        onClick={handleClickProjects}
        className={styles["projects-heading"]}
      >
        {data.projectsLink}
      </TxtBtn>
      <Scratch
        className={styles["projects-scratch"]}
        scratch={data.projectsScratch}
      />
    </div>
  );

  const contacts = (
    <div className={styles.contacts}>
      <span>{data.contactsText}</span>
      <a href={`mailto:tadas@slajus.dev`} className={styles.email}>
        {data.email}
      </a>
      <Scratch
        className={styles["contacts-scratch"]}
        scratch={data.contactsScratch}
      />
    </div>
  );

  return (
    <div
      className={`${styles.container} ${
        isOpen ? styles["container--open"] : styles["container--closed"]
      } `}
    >
      {header}
      {projects}
      {contacts}
    </div>
  );
}

export default SidebarContent;
