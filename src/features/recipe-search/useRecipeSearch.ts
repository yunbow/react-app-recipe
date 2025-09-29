import { useState, useMemo } from 'react';
import { Recipe, RecipeFilters } from './types';

export const useRecipeSearch = (recipes: Recipe[]) => {
  const [filters, setFilters] = useState<RecipeFilters>({
    searchTerm: '',
    category: '',
    time: '',
  });

  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      // 検索語句によるフィルタリング
      const matchesSearch =
        recipe.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(filters.searchTerm.toLowerCase())) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(filters.searchTerm.toLowerCase()));

      // カテゴリーによるフィルタリング
      const matchesCategory = filters.category === '' || recipe.category === filters.category;

      // 調理時間によるフィルタリング
      let matchesTime = true;
      if (filters.time !== '') {
        const time = parseInt(filters.time);
        if (filters.time === 'more') {
          matchesTime = recipe.time > 60;
        } else {
          matchesTime = recipe.time <= time;
        }
      }

      return matchesSearch && matchesCategory && matchesTime;
    });
  }, [recipes, filters]);

  const updateSearchTerm = (searchTerm: string) => {
    setFilters(prev => ({ ...prev, searchTerm }));
  };

  const updateCategory = (category: RecipeFilters['category']) => {
    setFilters(prev => ({ ...prev, category }));
  };

  const updateTime = (time: string) => {
    setFilters(prev => ({ ...prev, time }));
  };

  const performSearch = () => {
    // フィルタリングは自動的に行われるため、特別な処理は不要
    // 必要に応じて分析やログなどを追加できる
  };

  return {
    filters,
    filteredRecipes,
    updateSearchTerm,
    updateCategory,
    updateTime,
    performSearch,
  };
};