function createmenudishes(arr, prices, parent) {
  for (let i = 0; i < arr.length; i += 1) {
    const item = document.createElement('div');
    item.className = 'item';
    const foodname = document.createElement('p');
    foodname.textContent = arr[i];
    item.appendChild(foodname);
    const foodprice = document.createElement('p');
    foodprice.textContent = `USD: ${prices[i]}`;
    item.appendChild(foodprice);
    parent.appendChild(item);
  }
}

export default function menuPage() {
  const restaurantName = document.createElement('h1');
  restaurantName.textContent = 'Eatery Menu';

  const menuItems = document.createElement('div');
  menuItems.className = 'row';
  const leftSide = document.createElement('div');
  leftSide.className = 'column';

  const foods = [['Expresso', 'Americano', 'Machiato', 'Cappuccino'], ['French Fries', 'Italian Pizza', 'Spaghetti', 'Burger'], ['Olong', 'English BreakFast', 'Jasmine Green', 'Emerald Spring', 'King Crimson', 'Blue Crane'], ['Soft Drink', 'Banana Berry', 'Tropical Passion', 'Hawaian Breeze', 'Sunset', 'Apple Crush']];
  // eslint-disable-next-line max-len
  const prices = [[3.00, 4.00, 3.50, 5.00], [5.00, 17.00, 12.00, 8.00], [3.00, 4.00, 3.00, 3.00, 5.00, 5.50], [3.00, 2.00, 4.00, 2.00, 3.00, 3.00]];

  const menugroup1 = document.createElement('div');
  menugroup1.className = 'menu-group';
  menugroup1.textContent = 'Coffee';

  createmenudishes(foods[0], prices[0], menugroup1);

  const menugroup2 = document.createElement('div');
  menugroup2.className = 'menu-group';
  menugroup2.textContent = 'Food';

  createmenudishes(foods[1], prices[1], menugroup2);
  leftSide.appendChild(menugroup1);
  leftSide.appendChild(menugroup2);

  const rightSide = document.createElement('div');
  rightSide.className = 'column';
  const menugroup3 = document.createElement('div');
  menugroup3.className = 'menu-group';
  menugroup3.textContent = 'Tea';

  createmenudishes(foods[2], prices[2], menugroup3);
  const menugroup4 = document.createElement('div');
  menugroup4.className = 'menu-group';
  menugroup4.textContent = 'Drinks';

  createmenudishes(foods[3], prices[3], menugroup4);
  rightSide.appendChild(menugroup3);
  rightSide.appendChild(menugroup4);
  menuItems.appendChild(leftSide);
  menuItems.appendChild(rightSide);
  const content = document.getElementById('content');
  content.appendChild(restaurantName);
  content.appendChild(menuItems);
}
