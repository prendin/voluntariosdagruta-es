// src/lib/tracking.ts

type Attrs = Record<string, string>;

function addScript(src: string, attrs: Attrs = {}) {
  if (document.querySelector(`script[src="${src}"]`)) return;

  const s = document.createElement("script");
  s.src = src;
  s.async = true;

  Object.entries(attrs).forEach(([k, v]) => s.setAttribute(k, v));
  document.head.appendChild(s);
}

function addHiddenImg(src: string) {
  if (document.querySelector(`img[data-fallback="${src}"]`)) return;

  const img = document.createElement("img");
  img.setAttribute("data-fallback", src);
  img.height = 1;
  img.width = 1;
  img.style.display = "none";
  img.src = src;
  document.body.appendChild(img);
}

//
// 🔵 META PIXEL
//
export function initMetaPixel(pixelId?: string) {
  if (!pixelId) return;
  if ((window as any).fbq) return;

  (function (f: any, b: Document, e: string, v: string, n?: any, t?: any, s?: any) {
    if (f.fbq) return;
    n = (f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    });
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode?.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

  (window as any).fbq("init", pixelId);
  (window as any).fbq("track", "PageView");

  addHiddenImg(`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`);
}

//
// 🟡 UTMIFY
//
export function initUtmifyPixel(utmifyPixelId?: string) {
  if (!utmifyPixelId) return;

  (window as any).pixelId = utmifyPixelId;

  addScript("https://cdn.utmify.com.br/scripts/pixel/pixel.js", {
    async: "",
    defer: "",
  });
}

//
// 🟢 HOTMART (IMPORTANTE PRA VENDAS)
//
export function initHotmart(account?: string) {
  if (!account) return;
  if ((window as any).hot) return;

  (function (l: any, a: Document, u: string, n: string, c: string, h?: any, e?: any) {
    l["HotmartLauncherObject"] = c;
    l[c] =
      l[c] ||
      function () {
        (l[c].q = l[c].q || []).push(arguments);
      };
    l[c].l = 1 * new Date();
    h = a.createElement(u);
    e = a.getElementsByTagName(u)[0];
    h.async = 1;
    h.src = n;
    e.parentNode?.insertBefore(h, e);
  })(window, document, "script", "//launcher.hotmart.com/launcher.js", "hot");

  (window as any).hot("account", account);
}