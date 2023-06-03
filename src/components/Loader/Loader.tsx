import { TileContainer } from "@/layout";

import styles from "./Loader.module.scss";

type LoaderProps = {
  title?: string;
};

function Loader({ title = "" }: LoaderProps) {
  return (
    <TileContainer fontColor="white" className={styles.container}>
      <span className={styles.loader}>Loading {title}</span>
    </TileContainer>
  );
}

export default Loader;
