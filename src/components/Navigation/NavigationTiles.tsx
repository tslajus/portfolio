import { TileContainer } from "@/layout";
import { NavigationLinks } from "./NavigationLinks";

import styles from "./Navigation.module.scss";

type NavTiles = NavLinks & {
  align?: Align;
};

function NavigationTiles({
  links,
  type,
  align = "start",
  isReversed = false,
}: NavTiles) {
  const LinksTile = (
    <TileContainer
      tag="nav"
      className={`${styles["links-container"]} ${
        isReversed && styles["links-container--reversed"]
      }`}
    >
      <ul
        className={`${styles.links} ${isReversed && styles["links--reversed"]}
            
            ${styles[`links--${align}`]}`}
      >
        <NavigationLinks links={links} type="links" isReversed={isReversed} />
      </ul>
    </TileContainer>
  );

  const ArrowsTile = (
    <TileContainer
      className={`${styles.arrows} ${isReversed && styles["arrows--reversed"]}
          
          ${styles[`arrows--${align}`]}`}
    >
      <NavigationLinks links={links} type="arrows" isReversed={isReversed} />
    </TileContainer>
  );

  const ComboTile = (
    <TileContainer className={styles["single-tile"]}>
      <div className={styles.gap} />
      <div className={styles.links}>
        <NavigationLinks links={links} type="combo" isReversed={isReversed} />
      </div>
    </TileContainer>
  );

  if (type === "combo") return ComboTile;
  else if (type === "links") return LinksTile;
  else if (type === "arrows") return ArrowsTile;
  else return null;
}

export { NavigationTiles };
