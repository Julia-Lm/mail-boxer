import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { WrapperProviders } from "app/providers/global-providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <WrapperProviders>
    <App />
  </WrapperProviders>,
);
