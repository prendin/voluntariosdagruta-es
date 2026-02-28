import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { initMetaPixel, initUtmifyPixel } from "./lib/tracking";

// ✅ ATIVA OS PIXELS (somente os que você usa)
initMetaPixel(import.meta.env.VITE_META_PIXEL_ID);
initUtmifyPixel(import.meta.env.VITE_UTMIFY_PIXEL_ID);

// ✅ RENDER NORMAL
createRoot(document.getElementById("root")!).render(<App />);