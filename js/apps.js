// ストアの URL ができたら、stores の href に貼る。
// 空のままだとバナーは出るが、リンクにはならない。
const BADGES = {
  "app-store": {
    src: "images/badges/app-store.svg",
    alt: "App Storeからダウンロード",
  },
};

const APPS = [
  {
    id: "oto",
    name: "絶対音感おとあて",
    summary: "和音を聴いて旗の色を当てる、絶対音感の練習アプリです。",
    icon: "images/otoate/icon.jpg",
    page: "otoate/",
    stores: [{ kind: "app-store", href: "" }],
  },
  {
    id: "drip",
    name: "DripRecipe",
    summary: "ハンドドリップのレシピを、端末の中に残すメモです。",
    icon: "images/driprecipe/icon.png",
    page: "driprecipe/",
    stores: [{ kind: "app-store", href: "" }],
  },
  {
    id: "kintai",
    name: "勤怠メモ",
    summary: "出勤と休憩を端末の中だけにメモして、月末に転記するための控えです。",
    icon: "images/kintai/icon.png",
    page: "kintai/",
    stores: [{ kind: "app-store", href: "" }],
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
    const jumps = `<a href="${esc(app.page)}">プライバシーポリシー</a>`;
    return `<article class="app-card" id="${esc(app.id)}">
      <img class="app-icon" src="${esc(app.icon)}" alt="" width="56" height="56" />
      <div class="app-card-body">
        <h2>${esc(app.name)}</h2>
        <p>${esc(app.summary)}</p>
        <div class="store-badges">${stores}</div>
        <p class="app-jumps">${jumps}</p>
      </div>
    </article>`;
  }).join("");
}

document.querySelectorAll("[data-app-grid]").forEach(renderAppGrid);
