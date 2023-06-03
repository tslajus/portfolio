import data from "./data.HomePage.json";
import { useScreenSize } from "@/hooks";
import { keyGen } from "@/helpers";
import { InnerTile } from "@/layout";
import { Navigation, HeadingBlock, TechStack, IconLinks } from "@/components";

import styles from "./HomePage.module.scss";

function elements() {
  const {
    fourColRange,
    threeColRange,
    twoColRange,
    oneColRange,
    showNav,
    noElement,
  } = useScreenSize();

  const allElements = [
    showNav
      ? {
          element: (
            <Navigation
              links={data.links as NavItem[]}
              isSingleTile={threeColRange}
              className={styles.navigation}
              key={keyGen()}
            />
          ),
          gridSize: fourColRange ? 2 : 1,
        }
      : noElement(),

    {
      element: (
        <HeadingBlock
          type={twoColRange ? "double-reverse" : "double"}
          heading={data["heading-small"]}
          headingBig={data["heading-big"]}
          tag="h2"
          tagBig="h1"
          align={twoColRange ? "end" : "start"}
          className={styles["heading-big"]}
          key={keyGen()}
        />
      ),
      gridSize: oneColRange ? 1 : 2,
    },

    {
      element: (
        <InnerTile
          isRight={twoColRange}
          children={
            <div className={styles["about-info"]}>
              <p>{data.paragraph}</p>
              <IconLinks links={data.redirects} />
            </div>
          }
          className={styles.about}
          key={keyGen()}
        />
      ),
      gridSize: 1,
    },

    {
      element: <TechStack className={styles["tech-stack"]} key={keyGen()} />,
      gridSize: 1,
    },
  ];

  return allElements;
}

export default elements;
