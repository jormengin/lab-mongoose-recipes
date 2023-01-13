const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
const Recipe = require('./models/Recipe.model');
const data = require('./data');

const MONGODB_URI = "mongodb://127.0.0.1:27017/recipe-app";


mongoose
  .connect(MONGODB_URI)
  .then((x) => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    return Recipe.deleteMany();
  })
  //ITERATION 2
  .then(() => {
    return Recipe.create({
      title: "Arepa Reina Pepiada",
      level: "Amateur Chef",
      ingredients: [
        "2 Cups of Water",
        "1 cup P.A.N White Corn Meal",
        "2 HASH Avocados",
        "2 Tbls Mayonese",
        "1 Tbs of Salt",
        "2 Cooked and Shreded Chicken Breast",
        "2 tbs Olive Oil",
      ],
      cuisine: "Venezuelan",
      dishType: "breakfast",
      image:
        "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2015_18/515696/arepa_reina_pepiada-today-tease-vr-150429.jpg",
      duration: 20,
      creator: "My Grandma",
    });
  })
  .then((recipe) => {
    console.log(recipe.title);
  })
  //ITERATION 3
  .then(() => {
    return Recipe.insertMany(data);
  })
  //ITERATION 4
  .then(() => {
    return Recipe.findOneAndUpdate(
      { title: "Rigatoni alla Genovese" },
      { $set: { duration: 100 } }
    );
  })
  //ITERATION 5
  .then(() => {
    return Recipe.deleteOne({ title: "Carrot Cake" });
  })
  .then(() => {
    //ITERATION 6
    mongoose.connection.close(() => {
      console.log("CONNECTION WAS CLOSED SUCCESSFULLY");
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
