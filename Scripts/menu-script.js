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
        genre: 'Lunch',
        price: '$9'
    },
    {
        image: './Images/home menu 2.webp',
        name: 'Caesar Salad',
        genre: 'Lunch',
        price: '$8'
    },
    {
        image: './Images/home menu 4.webp',
        name: 'Caprese Salad',
        genre: 'Lunch',
        price: '$10'
    },
    {
        image: './Images/home menu 7.webp',
        name: 'Margherita Pizza',
        genre: 'Dinner',
        price: '$16'
    },
    {
        image: './Images/home menu 8.webp',
        name: 'Spaghetti Carbonara',
        genre: 'Dinner',
        price: '$18'
    },
    {
        image: './Images/home menu 1.webp',
        name: 'Chicken Alfredo',
        genre: 'Dinner',
        price: '$20'
    },
    {
        image: './Images/home menu 2.webp',
        name: 'Beef Burger',
        genre: 'Dinner',
        price: '$15'
    },
    {
        image: './Images/home menu 3.webp',
        name: 'Vegetable Stir-Fry',
        genre: 'Dinner',
        price: '$14'
    },
    {
        image: './Images/home menu 4.webp',
        name: 'Sushi Platter',
        genre: 'Dinner',
        price: '$22'
    },
    {
        image: './Images/home menu 2.webp',
        name: 'Fish and Chips',
        genre: 'Dinner',
        price: '$17'
    },
    {
        image: './Images/home menu 4.webp',
        name: 'Chicken Caesar Wrap',
        genre: 'Lunch',
        price: '$13'
    },
    {
        image: './Images/home menu 7.webp',
        name: 'Fruit Smoothie Bowl',
        genre: 'Drink',
        price: '$9'
    },
    {
        image: './Images/home menu 8.webp',
        name: 'Chocolate Milkshake',
        genre: 'Drink',
        price: '$7'
    },
    {
        image: './Images/home menu 1.webp',
        name: 'Iced Caramel Latte',
        genre: 'Coffee',
        price: '$6'
    },
    {
        image: './Images/home menu 2.webp',
        name: 'Matcha Latte',
        genre: 'Coffee',
        price: '$5'
    },
    {
        image: './Images/home menu 3.webp',
        name: 'Margarita',
        genre: 'Party',
        price: '$10'
    },
    {
        image: './Images/home menu 2.webp',
        name: 'Mojito',
        genre: 'Party',
        price: '$12'
    },
    {
        image: './Images/home menu 1.webp',
        name: 'Gin and Tonic',
        genre: 'Party',
        price: '$11'
    },
    {
        image: './Images/home menu 2.webp',
        name: 'Chocolate Brownie',
        genre: 'Dessert',
        price: '$8'
    },
    {
        image: './Images/home menu 3.webp',
        name: 'New York Cheesecake',
        genre: 'Dessert',
        price: '$9'
    },
    {
        image: './Images/home menu 4.webp',
        name: 'Apple Pie',
        genre: 'Dessert',
        price: '$7'
    },
    {
        image: './Images/home menu 7.webp',
        name: 'Tiramisu',
        genre: 'Dessert',
        price: '$10'
    },
    {
        image: './Images/home menu 8.webp',
        name: 'Fruit Tart',
        genre: 'Dessert',
        price: '$9'
    },
    {
        image: './Images/home menu 1.webp',
        name: 'Lemon Sorbet',
        genre: 'Dessert',
        price: '$6'
    },
    {
        image: './Images/home menu 2.webp',
        name: 'Cheese Platter',
        genre: 'Appetizer',
        price: '$18'
    },
    {
        image: './Images/home menu 4.webp',
        name: 'Vegetarian Sushi Roll',
        genre: 'Dinner',
        price: '$18'
    },
    {
        image: './Images/home menu 3.webp',
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
            <div class="menu-item ${menuItem.genre.toLowerCase()}">
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

    const menuPageItems = document.querySelectorAll('.menu-page-item');

    menuPageItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            menuPageItems.forEach(item => item.classList.remove('active'));
            // Add active class to the clicked item
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            filterMenuItems(filter);
        });
    });

    function filterMenuItems(filter) {
        const items = document.querySelectorAll('.menu-box .menu-item');
        items.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'flex'; // Show the menu item
            } else {
                item.style.display = 'none'; // Hide the menu item
            }
        });
    }
});