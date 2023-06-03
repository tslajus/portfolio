import data from "./data.ContactPage.json";
import elements from "./elements.ContactPage";
import { PageTemplate } from "@/pages";

const ContactPage = () => (
  <PageTemplate data={data} elements={elements} pageId="contact-page" />
);

export default ContactPage;
