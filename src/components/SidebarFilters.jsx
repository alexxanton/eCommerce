import React, { useState, useEffect } from "react";
import { Box, Slider, Checkbox, FormControlLabel, Typography } from "@mui/material";

const SidebarFilters = ({ products, setFilteredProducts }) => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [...new Set(products.map(product => product.category))];

  useEffect(() => {
    const filtered = products.filter(product => {
      const withinPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      return withinPriceRange && matchesCategory;
    });
    setFilteredProducts(filtered);
  }, [priceRange, selectedCategories, products, setFilteredProducts]);

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h6" gutterBottom>
        Filtres
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        Rang de preus
      </Typography>
      <Slider
        value={priceRange}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        min={0}
        max={1000}
        sx={{ width: '90%' }}
      />

      <Typography variant="subtitle1" gutterBottom>
        Categories
      </Typography>
      {categories.map(category => (
        <FormControlLabel
          key={category}
          control={
            <Checkbox
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
          }
          label={category}
        />
      ))}
    </Box>
  );
};

export default SidebarFilters;