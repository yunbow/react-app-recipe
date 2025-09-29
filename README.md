# レシピ検索アプリ (TypeScript + React + Storybook)

React 18とTypeScriptで構築されたレシピ検索アプリケーションです。機能別のモジュラーアーキテクチャを採用しています。

### デモプレイ
https://yunbow.github.io/react-app-recipe/demo/

## 主要機能

### レシピ検索・表示
- レシピの検索（料理名、食材、タグ）
- カテゴリー別フィルタリング（主菜、副菜、スープ、デザート）
- 調理時間によるフィルタリング
- レシピ詳細表示（モーダルウィンドウ）

### 操作方法
- **Enterキー**: 検索実行
- **カテゴリー選択**: レシピをカテゴリーで絞り込み
- **調理時間選択**: 時間で絞り込み
- **レシピカードクリック**: 詳細表示

## 技術スタック

- **React 18** - UIライブラリ
- **TypeScript** - プログラミング言語
- **Storybook 7** - コンポーネント開発・ドキュメント
- **CSS Modules** - スタイリング
- **Vite** - ビルドツール

## プロジェクト構造

```
src/
├── features/                    # 機能別モジュール
│   └── recipe-search/           # レシピ検索機能
│       ├── components/          # 機能専用コンポーネント
│       │   ├── SearchBox/       # 検索ボックス
│       │   ├── FilterControls/  # フィルター操作
│       │   ├── RecipeCard/      # レシピカード
│       │   ├── RecipeDetails/   # レシピ詳細
│       │   ├── Header/          # ヘッダー領域
│       │   ├── MainContent/     # メインコンテンツ
│       │   ├── RecipeGrid/      # レシピグリッド
│       │   └── Footer/          # フッター領域
│       ├── RecipeSearchApp/     # 機能ルートコンポーネント
│       ├── useRecipeSearch.ts   # レシピ検索フック
│       ├── types.ts             # 機能固有の型定義
│       └── data/                # レシピデータ
│           └── recipes.ts       # レシピ一覧データ
├── components/                  # 共通UIコンポーネント
│   ├── Button/                  # 操作ボタン
│   ├── Input/                   # テキスト入力
│   ├── Select/                  # セレクトボックス
│   ├── Text/                    # テキスト表示
│   ├── Image/                   # 画像表示
│   └── Modal/                   # モーダルウィンドウ
├── stories/                     # Storybook用ストーリー
├── App.tsx                      # メインアプリ
└── main.tsx                     # エントリーポイント
```

## スクリプト

```bash
# セットアップ
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# Storybook起動
npm run storybook

# Storybook ビルド
npm run build-storybook
```

## ライセンス

MIT License