import data from "./data.AboutPage.json";
import { useScreenSize } from "@/hooks";
import { keyGen } from "@/helpers";
import { TileContainer } from "@/layout";
import { Navigation, Img } from "@/components";
import ProfilePic from "@/assets/tslajus.png";
import styles from "./AboutPage.module.scss";

function elements() {
  const { smallestRange, twoColRange, oneColRange, showNav, noElement } =
    useScreenSize();

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

    {
      element: (
        <TileContainer
          children={<p>{smallestRange ? data.textShort : data.text}</p>}
          fontColor="gray-dark"
          scratches={
            twoColRange || oneColRange ? data.scratchSmall : data.scratch
          }
          className={styles.about}
          key={keyGen()}
        />
      ),
      gridSize: 1,
    },

    {
      element: (
        <Img
          src={ProfilePic}
          alt="profile photo"
          className={styles["profile-pic"]}
          noHover
          key={keyGen()}
        />
      ),
      gridSize: 1,
    },
  ];

  return allElements;
}

export default elements;
