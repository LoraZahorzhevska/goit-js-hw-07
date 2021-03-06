const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredientsRef = document.querySelector("#ingredients");

const element = ingredients.map(ingredient => {
  const addListEl = document.createElement('li');
  addListEl.textContent = ingredient;

  return addListEl
});

// console.log(element);

ingredientsRef.append(...element);