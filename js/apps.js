// ストアの URL は stores の href に書く。
const BADGES = {
  "app-store": {
    src: "images/badges/app-store.svg",
    alt: "App Storeからダウンロード",
  },
};

const APPS = [
  {
    id: "drip",
    name: "DripRecipe",
    summary: "ハンドドリップのレシピを、端末の中に残すメモです。",
    icon: "images/driprecipe/icon.png",
    page: "driprecipe/",
    stores: [{ kind: "app-store", href: "https://apps.apple.com/jp/app/driprecipe/id6747379349" }],
  },
  {
    id: "kintai",
    name: "勤怠メモ ウィジェット",
    summary: "出勤と休憩を端末の中だけにメモして、月末に転記するための控えです。",
    icon: "images/kintai/icon.png",
    page: "kintai/",
    stores: [{ kind: "app-store", href: "https://apps.apple.com/jp/app/%E5%8B%A4%E6%80%A0%E3%83%A1%E3%83%A2-%E3%82%A6%E3%82%A3%E3%82%B8%E3%82%A7%E3%83%83%E3%83%88/id6818612597" }],
  },
  {
    id: "oto",
    name: "おとあて - 絶対音感の色旗練習",
    summary: "和音を聴いて旗の色を当てる、絶対音感の練習アプリです。",
    icon: "images/otoate/icon.jpg",
    page: "otoate/",
    stores: [{ kind: "app-store", href: "https://apps.apple.com/jp/app/%E3%81%8A%E3%81%A8%E3%81%82%E3%81%A6-%E7%B5%B6%E5%AF%BE%E9%9F%B3%E6%84%9F%E3%81%AE%E8%89%B2%E6%97%97%E7%B7%B4%E7%BF%92/id6818866951" }],
  },
];

function esc(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
  });
}

function storeBadge(store) {
  const badge = BADGES[store.kind];
  if (!badge) return "";
  const img = `<img src="${esc(badge.src)}" alt="${esc(badge.alt)}" height="40" />`;
  if (store.href) {
    return `<a class="store-badge" href="${esc(store.href)}">${img}</a>`;
  }
  return `<span class="store-badge">${img}</span>`;
}

function renderAppGrid(root) {
  root.innerHTML = APPS.map((app) => {
    const stores = (app.stores || []).map(storeBadge).join("");
    const storeBlock = stores ? `<div class="store-badges">${stores}</div>` : "";
    const jumps = `<a href="${esc(app.page)}">プライバシーポリシー</a>`;
    return `<article class="app-card" id="${esc(app.id)}">
      <img class="app-icon" src="${esc(app.icon)}" alt="" width="56" height="56" />
      <div class="app-card-body">
        <h2>${esc(app.name)}</h2>
        <p>${esc(app.summary)}</p>
        ${storeBlock}
        <p class="app-jumps">${jumps}</p>
      </div>
    </article>`;
  }).join("");
}

document.querySelectorAll("[data-app-grid]").forEach(renderAppGrid);
