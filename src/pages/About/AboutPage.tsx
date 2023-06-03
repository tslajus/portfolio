import data from "./data.AboutPage.json";
import elements from "./elements.AboutPage";
import { PageTemplate } from "@/pages";

const AboutPage = () => (
  <PageTemplate data={data} elements={elements} pageId="about-page" />
);

export default AboutPage;
