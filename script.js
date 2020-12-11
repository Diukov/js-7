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
      else return('Error! You cannot cook the ' + recipe + '. Try to add more ingredients.');
    }
    if (counter == Object.keys(magicBook.recipes[recipe]).length) return('Congrats! You can cook the ' + recipe + '!');
  },
};

kitchen.addIngredientToKettle('lava', 10);
kitchen.addIngredientToKettle('evil', 999);

console.log(kitchen.cook('littleDevil'));

kitchen.addIngredientToKettle('poo', 55);
kitchen.addIngredientToKettle('bone', 10);
kitchen.addIngredientToKettle('stone', 100);
kitchen.addIngredientToKettle('nail', 100);

console.log(kitchen.cook('golem'));