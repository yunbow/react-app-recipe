import React, { useState } from 'react';
import { Header } from '../components/Header';
import { MainContent } from '../components/MainContent';
import { Footer } from '../components/Footer';
import { Modal } from '../../../components/Modal';
import { RecipeDetails } from '../components/RecipeDetails';
import { useRecipeSearch } from '../useRecipeSearch';
import { recipes } from '../data/recipes';
import { Recipe } from '../types';
import styles from './RecipeSearchApp.module.css';

export const RecipeSearchApp: React.FC = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const {
    filters,
    filteredRecipes,
    updateSearchTerm,
    updateCategory,
    updateTime,
    performSearch,
  } = useRecipeSearch(recipes);

  const handleSearch = () => {
    setHasSearched(true);
    performSearch();
  };

  const handleCategoryChange = (category: string) => {
    setHasSearched(true);
    updateCategory(category as '' | 'main' | 'side' | 'soup' | 'dessert');
  };

  const handleTimeChange = (time: string) => {
    setHasSearched(true);
    updateTime(time);
  };

  const handleRecipeClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  const displayRecipes = hasSearched ? filteredRecipes : recipes;

  return (
    <div className={styles.app}>
      <Header
        searchValue={filters.searchTerm}
        categoryValue={filters.category}
        timeValue={filters.time}
        onSearchChange={updateSearchTerm}
        onCategoryChange={handleCategoryChange}
        onTimeChange={handleTimeChange}
        onSearch={handleSearch}
      />

      <MainContent
        recipes={displayRecipes}
        onRecipeClick={handleRecipeClick}
        hasSearched={hasSearched}
      />

      <Footer />

      <Modal
        isOpen={selectedRecipe !== null}
        onClose={handleCloseModal}
      >
        {selectedRecipe && (
          <RecipeDetails recipe={selectedRecipe} />
        )}
      </Modal>
    </div>
  );
};