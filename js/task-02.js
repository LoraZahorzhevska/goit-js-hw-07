const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredientsRef = document.querySelector("#ingredients");

const element = ingredients.forEach(function (ingredient) {
    const addListEl = document.createElement('li')
    addListEl.textContent = ingredient
    ingredientsRef.append(addListEl)
});

