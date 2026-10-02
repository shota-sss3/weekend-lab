# 週末ラボ — サポートサイト

絶対音感おとあて（OtoAte）、DripRecipe、勤怠メモの紹介と規約を、`index.html` 1枚にまとめた静的サイトです。サーバプログラムはありません。ホスティングの無料枠で公開できます。

サイト上にメールアドレスは載せていません。

## ストアのリンク

各アプリのカードにあるバナーは、`js/apps.js` の `stores` でリンクを付けます。`href` が空のあいだは、バナーは見えますがクリックしても飛びません。

- 絶対音感おとあて、DripRecipe は App Store だけ
- 勤怠メモは App Store と Google Play

公開されたら、次のように URL を入れます。

```js
stores: [{ kind: "app-store", href: "https://apps.apple.com/..." }],
```

## アプリを足す

1. `js/apps.js` の `APPS` に名前、説明、対応ストア、画像パスを追加する
2. アプリ用フォルダに、プライバシーポリシーと利用規約を1枚にまとめた `index.html` を置く
3. `images/<id>/icon.svg` を、本物のアイコンに差し替える

## ページ

トップは紹介だけです。プライバシーポリシーと利用規約は、アプリごとに1枚のページです。

| 用途 | 場所 |
| --- | --- |
| 作品一覧 | `/` |
| このサイトの扱い | `/privacy.html` |
| おとあて | `/otoate/`（`#privacy` と `#terms`） |
| DripRecipe | `/driprecipe/`（`#privacy` と `#terms`） |
| 勤怠メモ | `/kintai/`（`#privacy` と `#terms`） |

`/otoate/privacy.html` や `/otoate/terms.html` のような以前のアドレスは、同じアプリのページの該当箇所へ移します。`/driprecipe/tokushoho.html` は DripRecipe の利用規約へ移します。

App Store Connect のプライバシーポリシー URL には `/otoate/#privacy`、または `/otoate/privacy.html` を指定できます。DripRecipe はアプリ内課金をせず、広告を表示する無料アプリです。公開名は週末ラボです。規約はアプリの方針に合わせて書いていますが、法的助言ではありません。広告の配信事業者が決まったら、DripRecipe のプライバシーポリシーにその名前を追記してください。

## 無料で公開する

ビルドは不要です。`index.html` をブラウザで開けばローカルでも見られます。

### GitHub Pages

1. このフォルダを GitHub リポジトリにする
2. Settings → Pages → Branch を `main`、フォルダを `/ (root)` にする
3. 公開 URL は `https://<ユーザー名>.github.io/<リポジトリ名>/` です

プロジェクトサイトでは、CSS が相対パスなのでそのまま動きます。

### Cloudflare Pages

1. [Cloudflare Pages](https://pages.cloudflare.com/) にリポジトリをつなぐ
2. ビルドコマンドは空、出力ディレクトリは `/` のまま
3. 独自ドメインを無料で付けられます

どちらも、このサイトからのデータ送信処理はありません。文字の表示に Google Fonts を読み込みます。
