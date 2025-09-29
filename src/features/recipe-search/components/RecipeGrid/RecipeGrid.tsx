import React from 'react';
import { Text } from '../../../../components/Text';
import { RecipeCard } from '../RecipeCard';
import { Recipe } from '../../types';
import styles from './RecipeGrid.module.css';

interface RecipeGridProps {
  recipes: Recipe[];
  onRecipeClick: (recipe: Recipe) => void;
}

export const RecipeGrid: React.FC<RecipeGridProps> = ({ recipes, onRecipeClick }) => {
  if (recipes.length === 0) {
    return (
      <Text variant="noResults">
        <p>検索条件に一致するレシピが見つかりませんでした。</p>
        <p>別のキーワードやフィルターで試してみてください。</p>
      </Text>
    );
  }

  return (
    <div className={styles.recipeGrid}>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onClick={onRecipeClick}
        />
      ))}
    </div>
  );
};