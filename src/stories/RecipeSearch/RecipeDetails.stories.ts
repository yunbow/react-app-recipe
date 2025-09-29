import type { Meta, StoryObj } from '@storybook/react';
import { RecipeDetails } from '../../features/recipe-search/components/RecipeDetails';

const meta: Meta<typeof RecipeDetails> = {
  title: 'Features/RecipeSearch/Components/RecipeDetails',
  component: RecipeDetails,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleRecipe = {
  id: 1,
  title: '簡単トマトパスタ',
  category: 'main' as const,
  time: 20,
  image: 'https://via.placeholder.com/300x200?text=トマトパスタ',
  tags: ['パスタ', '簡単', 'イタリアン'],
  ingredients: [
    'スパゲッティ 100g', 'トマト 2個', 'ニンニク 1片', 'オリーブオイル 大さじ2',
    'バジル 適量', '塩・こしょう 少々', 'パルメザンチーズ お好みで'
  ],
  instructions: [
    '鍋に湯を沸かし、塩を入れてスパゲッティを表示時間通りに茹でる。',
    'トマトは一口大に切り、ニンニクはみじん切りにする。',
    'フライパンにオリーブオイルとニンニクを入れ、弱火で香りが出るまで炒める。',
    'トマトを加え、中火で3分ほど炒める。',
    '茹で上がったパスタを加え、塩・こしょうで味を調える。',
    '器に盛り、バジルとお好みでパルメザンチーズをかけて完成。'
  ],
  description: '20分で作れる簡単でおいしいトマトパスタのレシピです。トマトの酸味とバジルの香りが食欲をそそります。'
};

export const Default: Story = {
  args: {
    recipe: sampleRecipe,
  },
};