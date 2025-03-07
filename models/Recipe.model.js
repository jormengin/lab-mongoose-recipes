const mongoose = require('mongoose');
const Schema = mongoose.Schema; // lo mismo que-> const { Schema } = mongoose.

const recipeSchema = new Schema({
  title: {
    type: String,
    required: [true,'Title is mandatory'],
    unique: true,
  },
  level: {
    type: String,
    enum: {
      values: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"],
      message: 'Pick a valid level for the recipe'
    }
  },
  ingredients: {
    type: [String],
  },
  cuisine: {
    type: String,
    required: [true, 'Please indicate the type of cuisine'],
  },
  dishType: {
    type: String,
    enum: [
      "breakfast",
      "main_course",
      "soup",
      "snack",
      "drink",
      "dessert",
      "other",
    ],
  },
  image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg",
  },
  duration: {
    type: Number,
    min:0
  },
  creator: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now()
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
