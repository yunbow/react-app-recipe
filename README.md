# レシピ検索アプリ (TypeScript + React + Storybook)

React 18とTypeScript、Atomic Designパターンで構築されたレシピ検索アプリケーションです。

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
├── components/
│   ├── atoms/              # 基本コンポーネント
│   │   ├── Button/         # ボタンコンポーネント
│   │   ├── Input/          # 入力フィールド
│   │   ├── Select/         # セレクトボックス
│   │   ├── Text/           # テキスト表示
│   │   └── Image/          # 画像表示
│   ├── molecules/          # 機能単位コンポーネント
│   │   ├── SearchBox/      # 検索ボックス
│   │   ├── FilterControls/ # フィルター操作
│   │   ├── RecipeCard/     # レシピカード
│   │   ├── RecipeDetails/  # レシピ詳細
│   │   └── Modal/          # モーダルウィンドウ
│   └── organisms/          # 画面領域コンポーネント
│       ├── Header/         # ヘッダー領域
│       ├── MainContent/    # メインコンテンツ
│       ├── RecipeGrid/     # レシピグリッド
│       ├── Footer/         # フッター領域
│       └── RecipeSearchApp/ # アプリケーション全体
├── stories/                # Storybook用ストーリー
├── types/                  # TypeScript型定義
├── hooks/                  # カスタムフック
├── data/                   # レシピデータ
├── App.tsx                 # メインアプリ
└── main.tsx                # エントリーポイント
```

## Atomic Design構成

### Atoms（基本コンポーネント）
- `Button` - 操作ボタン（検索、閉じる）
- `Input` - テキスト入力フィールド
- `Select` - セレクトボックス
- `Text` - テキスト表示（見出し、本文、タグ）
- `Image` - 画像表示

### Molecules（機能単位）
- `SearchBox` - 検索入力とボタン
- `FilterControls` - カテゴリー・時間フィルター
- `RecipeCard` - 個別レシピカード
- `RecipeDetails` - レシピ詳細情報
- `Modal` - モーダルウィンドウ

### Organisms（画面領域）
- `Header` - ヘッダー（検索・フィルター）
- `MainContent` - メインコンテンツ領域
- `RecipeGrid` - レシピ一覧グリッド
- `Footer` - フッター
- `RecipeSearchApp` - アプリケーション全体

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