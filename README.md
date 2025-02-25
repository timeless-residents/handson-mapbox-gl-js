# handson-mapbox-gl-js

このリポジトリは、Mapbox GL JSを使用したハンズオンのプロジェクトです。

## 目次
- [handson-mapbox-gl-js](#handson-mapbox-gl-js)
  - [目次](#目次)
  - [インストール](#インストール)
  - [使い方](#使い方)
  - [プロジェクト構成](#プロジェクト構成)
  - [GitHub Actions ワークフロー](#github-actions-ワークフロー)
    - [GitHub Pagesへのデプロイ](#github-pagesへのデプロイ)
    - [設定方法](#設定方法)
    - [環境変数の設定](#環境変数の設定)
    - [リポジトリメタデータの更新](#リポジトリメタデータの更新)
      - [使用方法](#使用方法)
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

## GitHub Actions ワークフロー

このプロジェクトは以下のGitHub Actionsワークフローを使用しています：

### GitHub Pagesへのデプロイ

GitHub Actionsを使用して、プロジェクトをGitHub Pagesに自動的にデプロイすることができます。

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

### リポジトリメタデータの更新

英語でのリポジトリの説明とトピックを更新するためのワークフローも用意されています。

#### 使用方法

1. リポジトリの「Actions」タブを開きます
2. 左側のワークフローリストから「Update Repository Metadata」を選択します
3. 「Run workflow」ボタンをクリックします
4. 必要に応じて説明文とトピックを入力します（デフォルト値が設定されています）
5. 「Run workflow」ボタンをクリックして実行します

このワークフローは以下の操作を行います：
- リポジトリの説明を英語で設定します（デフォルト: "Hands-on project using Mapbox GL JS"）
- リポジトリのトピックを設定します（デフォルト: mapbox-gl-js, javascript, webgl, maps, geospatial）

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は[LICENSE](LICENSE)ファイルを参照してください。
