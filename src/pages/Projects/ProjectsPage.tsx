import data from "./data.ProjectsPage.json";
import elements from "./elements.ProjectsPage";
import { PageTemplate } from "@/pages";

const ProjectsPage = () => (
  <PageTemplate data={data} elements={elements} pageId="projects-page" />
);
export default ProjectsPage;
