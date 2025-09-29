import React from 'react';
import { Image } from '../../../../components/Image';
import { Text } from '../../../../components/Text';
import { Recipe } from '../../types';
import styles from './RecipeCard.module.css';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: (recipe: Recipe) => void;
}

const getCategoryName = (category: Recipe['category']): string => {
  const categoryNames = {
    main: '主菜',
    side: '副菜',
    soup: 'スープ',
    dessert: 'デザート',
  };
  return categoryNames[category];
};

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick }) => {
  return (
    <div
      className={styles.recipeCard}
      onClick={() => onClick(recipe)}
      data-id={recipe.id}
    >
      <Image
        src={recipe.image}
        alt={recipe.title}
        variant="recipeCard"
      />
      <div className={styles.recipeInfo}>
        <Text variant="title">{recipe.title}</Text>
        <div className={styles.recipeMeta}>
          <Text variant="meta">調理時間: 約{recipe.time}分</Text>
          <Text variant="meta">{getCategoryName(recipe.category)}</Text>
        </div>
        <div className={styles.recipeTags}>
          {recipe.tags.map((tag) => (
            <Text key={tag} variant="tag">{tag}</Text>
          ))}
        </div>
      </div>
    </div>
  );
};