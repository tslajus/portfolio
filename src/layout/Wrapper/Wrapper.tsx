import { ReactNode } from "react";

import styles from "./Wrapper.module.scss";

type WrapperProps = {
  children: ReactNode;
};

function Wrapper({ children }: WrapperProps) {
  return <main className={styles.wrapper}>{children}</main>;
}

export default Wrapper;
