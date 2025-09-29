import React from 'react';
import { Image } from '../../../../components/Image';
import { Text } from '../../../../components/Text';
import { Recipe } from '../../types';
import styles from './RecipeDetails.module.css';

interface RecipeDetailsProps {
  recipe: Recipe;
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

export const RecipeDetails: React.FC<RecipeDetailsProps> = ({ recipe }) => {
  return (
    <div className={styles.recipeDetails}>
      <Image
        src={recipe.image}
        alt={recipe.title}
        variant="recipeDetails"
      />
      <Text variant="heading2">{recipe.title}</Text>
      <div className={styles.recipeDetailsMeta}>
        <Text variant="meta">調理時間: 約{recipe.time}分</Text>
        <Text variant="meta">{getCategoryName(recipe.category)}</Text>
        <div>
          {recipe.tags.map((tag) => (
            <Text key={tag} variant="tag">{tag}</Text>
          ))}
        </div>
      </div>
      <Text variant="description">{recipe.description}</Text>

      <div className={styles.ingredientList}>
        <Text variant="heading3">材料</Text>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className={styles.instructionList}>
        <Text variant="heading3">作り方</Text>
        <ol>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};