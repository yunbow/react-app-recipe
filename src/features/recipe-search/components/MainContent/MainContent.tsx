import React from 'react';
import { Text } from '../../../../components/Text';
import { RecipeGrid } from '../RecipeGrid';
import { Recipe } from '../../types';
import styles from './MainContent.module.css';

interface MainContentProps {
  recipes: Recipe[];
  onRecipeClick: (recipe: Recipe) => void;
  hasSearched: boolean;
}

export const MainContent: React.FC<MainContentProps> = ({
  recipes,
  onRecipeClick,
  hasSearched
}) => {
  return (
    <main className={styles.mainContent}>
      {!hasSearched && recipes.length > 0 ? (
        <Text variant="message">
          <p>検索ワードを入力して、お好みのレシピを探してみましょう！</p>
        </Text>
      ) : (
        <RecipeGrid recipes={recipes} onRecipeClick={onRecipeClick} />
      )}
    </main>
  );
};