# handson-mapbox-gl-js

このリポジトリは、Mapbox GL JSを使用したハンズオンのプロジェクトです。

## 目次
- [handson-mapbox-gl-js](#handson-mapbox-gl-js)
  - [目次](#目次)
  - [インストール](#インストール)
  - [使い方](#使い方)
  - [プロジェクト構成](#プロジェクト構成)
  - [GitHub Pagesへのデプロイ](#github-pagesへのデプロイ)
    - [設定方法](#設定方法)
    - [環境変数の設定](#環境変数の設定)
  - [ライセンス](#ライセンス)

## インストール

このプロジェクトをクローンし、依存関係をインストールします。

```bash
git clone https://github.com/timeless-residents/handson-mapbox-gl-js.git
cd handson-mapbox-gl-js
npm install
```

## 使い方

開発サーバーを起動し、ブラウザでプロジェクトを確認します。

```bash
npm start
```

ブラウザで `http://localhost:9000` を開きます。

## プロジェクト構成

```
handson-mapbox-gl-js/
├── src/
│   ├── index.html
│   ├── styles.css
│   └── main.js
├── package.json
└── README.md
```

- `src/`：プロジェクトのソースコードが含まれています。
- `index.html`：メインのHTMLファイルです。
- `styles.css`：スタイルシートです。
- `main.js`：JavaScriptのエントリーポイントです。

## GitHub Pagesへのデプロイ

このプロジェクトはGitHub Actionsを使用して、GitHub Pagesに自動的にデプロイすることができます。

### 設定方法

1. リポジトリの「Settings」タブを開きます
2. 左側のメニューから「Pages」を選択します
3. 「Source」セクションで「GitHub Actions」を選択します

プッシュするたびに、GitHub Actionsワークフローが実行され、`main`ブランチのコードが自動的にビルドされ、`gh-pages`ブランチにデプロイされます。

### 環境変数の設定

Mapbox APIキーなどの環境変数を使用する場合は、以下の手順で設定します：

1. リポジトリの「Settings」タブを開きます
2. 左側のメニューから「Secrets and variables」→「Actions」を選択します
3. 「New repository secret」ボタンをクリックします
4. 名前（例：`MAPBOX_ACCESS_TOKEN`）と値を入力して保存します
5. `.github/workflows/deploy.yml`ファイルの環境変数セクションのコメントを解除して使用します

```yaml
env:
  MAPBOX_ACCESS_TOKEN: ${{ secrets.MAPBOX_ACCESS_TOKEN }}
```

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は[LICENSE](LICENSE)ファイルを参照してください。
