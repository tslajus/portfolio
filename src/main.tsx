import ReactDOM from "react-dom/client";
import { ScreenSizeProvider } from "./contexts/ScreenSizeContext.tsx";
import App from "./App.tsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ScreenSizeProvider>
    <App />
  </ScreenSizeProvider>
);
