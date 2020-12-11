const magicBook = {
  recipes: {
      golem: {
          bone: 10,
          stone: 100,
          nail: 100,
          poo: 53
      },
      littleDevil: {
          lava: 10,
          evil: 999
      },
  },
};

const kitchen = {
  bone: 999,
  stone: 999,
  nail: 999,
  poo: 999,
  lava: 999,
  evil: 999,
  kettle: { 
      material: 'metal',
      ingredients: {

      },
  },

  addIngredientToKettle(nameOfIngredient, amount) {
    for (const key in this) {
      if (nameOfIngredient === key && amount <= this[key]) {
        this[key] -= amount;
        this.kettle.ingredients[nameOfIngredient] = amount;
      }
    }
  },

  cook(recipe) {
    let counter = 0;
    for (const key in magicBook.recipes[recipe]) {
      if (Object.keys(magicBook.recipes[recipe]).includes(key) && this.kettle.ingredients[key] >= magicBook.recipes[recipe][key]) counter++;
    }
    if (counter == Object.keys(magicBook.recipes[recipe]).length) return recipe;
  },
};

kitchen.addIngredientToKettle('lava', 10);
kitchen.addIngredientToKettle('evil', 999);

kitchen.cook('littleDevil') ? console.log('Congrats! You can cook your monster!') : console.log('Try to add more ingredients, bro!');

kitchen.addIngredientToKettle('poo', 1);
kitchen.addIngredientToKettle('bone', 10);
kitchen.addIngredientToKettle('stone', 100);
kitchen.addIngredientToKettle('nail', 100);

kitchen.cook('golem') ? console.log('Congrats! You can cook your monster!') : console.log('Try to add more ingredients, bro!');