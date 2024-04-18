import React from 'react';
import './Services.css';

const Services = () => {
  // Данные для демонстрации
  const productsData = [
    { id: 1, name: 'Premium Web Hosting', category: 'Hosting', price: 50 },
    { id: 2, name: 'E-commerce Website Development', category: 'Web Development', price: 1000 },
    { id: 3, name: 'Digital Marketing Package', category: 'Marketing', price: 500 },
    { id: 4, name: 'Product Photography', category: 'Photography', price: 200 },
  ];

  // forEach: выводит каждое название продукта в консоли.
  console.log('Using forEach:');
  productsData.forEach((product) => {
    console.log(product.name);
  });

  // map: Создает список названий продуктов.
  const productNames = productsData.map((product) => product.name);

  // filter: Принимает продукты с ценой выше 500
  const premiumProducts = productsData.filter((product) => product.price > 500);

  // reduce: Высчитывают общу
  const totalPrice = productsData.reduce((accumulator, product) => accumulator + product.price, 0);

  return (
    <div className="services-container"> {/* Добавляем класс контейнера */}
      <h1>Our Services</h1>
      <p>Explore the services and products we offer in our online store.</p>

      <div className="product-names"> {/* Добавляем класс контейнера для списка названий продуктов */}
        {/* Display product names using map */}
        <h2>Product Names:</h2>
        <ul>
          {productNames.map((productName) => (
            <li key={productName}>{productName}</li>
          ))}
        </ul>
      </div>

      <div className="premium-products"> {/* Добавляем класс контейнера для списка премиум-продуктов */}
        {/* Display premium products using filter */}
        <h2>Premium Products:</h2>
        <ul>
          {premiumProducts.map((product) => (
            <li key={product.id}>{`${product.name} - $${product.price}`}</li>
          ))}
        </ul>
      </div>

      <div className="total-price"> {/* Добавляем класс контейнера для общей стоимости продуктов */}
        {/* Display total price using reduce */}
        <h2>Total Price of Products:</h2>
        <p>${totalPrice}</p>
      </div>

      <a className="home-link" href="/">Go back to Home Page</a>
    </div>
  );
};

export default Services;
