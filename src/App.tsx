import { useEffect } from "react";
import { wakeUpServers } from "./helpers";
import { Wrapper } from "./layout";
import { HomePage, AboutPage, ProjectsPage, ContactPage } from "./pages";
import { Sidebar, HalfGrid } from "./components";

import styles from "./App.module.scss";

function App() {
  useEffect(() => {
    wakeUpServers();
  }, []);

  return (
    <div className={styles.app}>
      <Sidebar />
      <Wrapper>
        <HomePage />
        <AboutPage />
        <ProjectsPage />
        <ContactPage />
        <HalfGrid />
      </Wrapper>
    </div>
  );
}

export default App;
