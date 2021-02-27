const categoriesRef = document.querySelectorAll('.item');
console.log(`В списке ${categoriesRef.length} категории.`);

const categoriesItem = categoriesRef.forEach(item => {
    console.log(`Категория: ${item.querySelector('h2').innerText}`);
    console.log(`Количество элементов: ${item.querySelectorAll('li').length}`);
    })