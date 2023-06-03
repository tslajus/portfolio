import data from "./data.HomePage.json";
import elements from "./elements.HomePage";
import { PageTemplate } from "@/pages";

const HomePage = () => (
  <PageTemplate data={data} elements={elements} pageId="home-page" />
);

export default HomePage;
