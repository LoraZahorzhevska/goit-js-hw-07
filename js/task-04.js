// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;
const spanRef = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

function decrement() { 
    counterValue += 1
    spanRef.textContent = counterValue
};

function increment() { 
    counterValue -= 1
    spanRef.textContent = counterValue
};

decrementBtn.addEventListener('click', increment);
incrementBtn.addEventListener('click', decrement);