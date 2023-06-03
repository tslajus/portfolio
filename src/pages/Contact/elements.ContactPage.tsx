import data from "./data.ContactPage.json";
import { useScreenSize } from "@/hooks";
import { keyGen } from "@/helpers";
import { Navigation, ContactCard, HeadingBlock } from "@/components";

import styles from "./ContactPage.module.scss";

function elements() {
  const { oneColRange, showNav, noElement } = useScreenSize();

  const allElements = [
    showNav
      ? {
          element: (
            <Navigation
              links={data.links as NavItem[]}
              align="start"
              className={styles.navigation}
              key={keyGen()}
            />
          ),
          gridSize: 2,
        }
      : noElement(),

    !showNav
      ? {
          element: (
            <HeadingBlock
              type={"double"}
              heading={data.heading}
              headingBig={data.headingBig}
              tag="h2"
              tagBig="span"
              className={styles.heading}
              bigHeadingClass={styles["heading--big"]}
              key={keyGen()}
            />
          ),
          gridSize: oneColRange ? 1 : 2,
        }
      : noElement(),
    {
      element: (
        <ContactCard
          email={data.email}
          icon={data.redirect}
          scratches={data.scratches}
          className={styles.contacts}
          key={keyGen()}
        />
      ),
      gridSize: 1,
    },
  ];

  return allElements;
}

export default elements;
