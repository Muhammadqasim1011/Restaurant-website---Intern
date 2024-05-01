// document.addEventListener('DOMContentLoaded', function() {
//     const allItems = document.querySelectorAll('.itemlist ul li');
//     const menuItems = document.querySelectorAll('.menu-item');

//     allItems.forEach(item => {
//         item.addEventListener('click', () => {
//             const type = item.textContent.toLowerCase();

//             menuItems.forEach(menuItem => {
//                 const menuItemType = menuItem.querySelector('p').textContent.toLowerCase();
                
//                 if (type === 'all items' || menuItemType.includes(type)) {
//                     menuItem.style.display = 'block';
//                 } else {
//                     menuItem.style.display = 'none';
//                 }
//             });
//         });
//     });
// });


const menuItems = [
    {
        image: './Images/home menu 1.webp',
        name: 'Classic Pancakes',
        genre: 'Breakfast',
        price: '$10'
    },
    {
        image: './Images/home menu 2.webp',
        name: 'Avocado Toast',
        genre: 'Breakfast',
        price: '$12'
    },
    {
        image: './Images/home menu 3.webp',
        name: 'Eggs Benedict',
        genre: 'Breakfast',
        price: '$14'
    },
    {
        image: './Images/home menu 4.webp',
        name: 'Greek Salad',
        genre: 'Appetizer',
        price: '$9'
    },
    {
        image: './Images/home menu 5.webp',
        name: 'Caesar Salad',
        genre: 'Appetizer',
        price: '$8'
    },
    {
        image: './Images/home menu 6.webp',
        name: 'Caprese Salad',
        genre: 'Appetizer',
        price: '$10'
    },
    {
        image: './Images/home menu 7.webp',
        name: 'Margherita Pizza',
        genre: 'Main Course',
        price: '$16'
    },
    {
        image: './Images/home menu 8.webp',
        name: 'Spaghetti Carbonara',
        genre: 'Main Course',
        price: '$18'
    },
    {
        image: './Images/home menu 9.webp',
        name: 'Chicken Alfredo',
        genre: 'Main Course',
        price: '$20'
    },
    {
        image: './Images/home menu 10.webp',
        name: 'Beef Burger',
        genre: 'Main Course',
        price: '$15'
    },
    {
        image: './Images/home menu 11.webp',
        name: 'Vegetable Stir-Fry',
        genre: 'Main Course',
        price: '$14'
    },
    {
        image: './Images/home menu 12.webp',
        name: 'Sushi Platter',
        genre: 'Main Course',
        price: '$22'
    },
    {
        image: './Images/home menu 13.webp',
        name: 'Fish and Chips',
        genre: 'Main Course',
        price: '$17'
    },
    {
        image: './Images/home menu 14.webp',
        name: 'Chicken Caesar Wrap',
        genre: 'Main Course',
        price: '$13'
    },
    {
        image: './Images/home menu 15.webp',
        name: 'Fruit Smoothie Bowl',
        genre: 'Smoothie',
        price: '$9'
    },
    {
        image: './Images/home menu 16.webp',
        name: 'Chocolate Milkshake',
        genre: 'Smoothie',
        price: '$7'
    },
    {
        image: './Images/home menu 17.webp',
        name: 'Iced Caramel Latte',
        genre: 'Coffee',
        price: '$6'
    },
    {
        image: './Images/home menu 18.webp',
        name: 'Matcha Latte',
        genre: 'Tea',
        price: '$5'
    },
    {
        image: './Images/home menu 19.webp',
        name: 'Margarita',
        genre: 'Cocktail',
        price: '$10'
    },
    {
        image: './Images/home menu 20.webp',
        name: 'Mojito',
        genre: 'Cocktail',
        price: '$12'
    },
    {
        image: './Images/home menu 21.webp',
        name: 'Gin and Tonic',
        genre: 'Cocktail',
        price: '$11'
    },
    {
        image: './Images/home menu 22.webp',
        name: 'Chocolate Brownie',
        genre: 'Dessert',
        price: '$8'
    },
    {
        image: './Images/home menu 23.webp',
        name: 'New York Cheesecake',
        genre: 'Dessert',
        price: '$9'
    },
    {
        image: './Images/home menu 24.webp',
        name: 'Apple Pie',
        genre: 'Dessert',
        price: '$7'
    },
    {
        image: './Images/home menu 25.webp',
        name: 'Tiramisu',
        genre: 'Dessert',
        price: '$10'
    },
    {
        image: './Images/home menu 26.webp',
        name: 'Fruit Tart',
        genre: 'Dessert',
        price: '$9'
    },
    {
        image: './Images/home menu 27.webp',
        name: 'Lemon Sorbet',
        genre: 'Dessert',
        price: '$6'
    },
    {
        image: './Images/home menu 28.webp',
        name: 'Cheese Platter',
        genre: 'Appetizer',
        price: '$18'
    },
    {
        image: './Images/home menu 29.webp',
        name: 'Vegetarian Sushi Roll',
        genre: 'Main Course',
        price: '$18'
    },
    {
        image: './Images/home menu 30.webp',
        name: 'Tiramisu',
        genre: 'Dessert',
        price: '$8'
    }
];



document.addEventListener('DOMContentLoaded', function() {
    const leftMenu = document.querySelector('.menu-box .left');
    const rightMenu = document.querySelector('.menu-box .right');

    menuItems.forEach((menuItem, index) => {
        const menuItemHtml = `
            <div class="menu-item">
                <img src="${menuItem.image}" alt="${menuItem.name}">
                <div>
                    <h3>${menuItem.name}</h3>
                    <p>${menuItem.genre}</p>
                </div>
                <span>${menuItem.price}</span>
            </div>
        `;

        if (index % 2 === 0) {
            leftMenu.innerHTML += menuItemHtml;
        } else {
            rightMenu.innerHTML += menuItemHtml;
        }
    });
});

