import { NavigationProvider } from "@/contexts/NavigationContext";
import { NavigationTiles } from "./NavigationTiles";

import styles from "./Navigation.module.scss";

type NavigationProps = {
  links: NavItem[];
  isReversed?: boolean;
  isSingleTile?: boolean;
  align?: Align;
  className?: ClassName;
};

function Navigation({
  links,
  isReversed = false,
  isSingleTile = false,
  align = "start",
  className = "",
}: NavigationProps) {
  const renderedNavigation = isSingleTile ? (
    <NavigationTiles
      type="combo"
      links={links}
      align={align}
      isReversed={isReversed}
    />
  ) : (
    <>
      <NavigationTiles
        type="arrows"
        links={links}
        align={align}
        isReversed={isReversed}
      />
      <NavigationTiles
        type="links"
        links={links}
        align={align}
        isReversed={isReversed}
      />
    </>
  );

  return (
    <NavigationProvider>
      <div
        className={`${styles.navigation} ${
          isReversed && styles["navigation--reversed"]
        } ${className}`}
      >
        {renderedNavigation}
      </div>
    </NavigationProvider>
  );
}

export default Navigation;
