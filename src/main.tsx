import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { initMetaPixel, initUtmifyPixel, initHotmart } from "./lib/tracking";

// ✅ ATIVA OS PIXELS E TRACKINGS
initMetaPixel(import.meta.env.VITE_META_PIXEL_ID);
initUtmifyPixel(import.meta.env.VITE_UTMIFY_PIXEL_ID);
initHotmart(import.meta.env.VITE_HOTMART_ACCOUNT);

// ✅ RENDER NORMAL
createRoot(document.getElementById("root")!).render(<App />);