import React from 'react';
import './AboutUs.css'; // Подключаем файл стилей

const AboutUs = () => {
  return (
    <div className="about-us-container"> {/* Добавляем класс контейнера */}
      <h1>About Us</h1>
      <p>Welcome to our online store!</p>
      <p>At our company, we strive to provide you with an exceptional online shopping experience. Our mission is to offer a wide selection of high-quality products, paired with excellent customer service and a seamless purchasing process.</p>
      <p>From the latest fashion trends to must-have gadgets, we carefully curate our product offerings to ensure that you find exactly what you're looking for. Whether you're shopping for yourself or searching for the perfect gift, we're here to make your shopping experience enjoyable and convenient.</p>
      <h2>Our Team</h2>
      <p>Behind our successful online store is a dedicated team of professionals who are passionate about what they do. From product sourcing and inventory management to website design and customer support, each member of our team plays a vital role in ensuring that your shopping experience exceeds your expectations.</p>
      <p>We believe in building lasting relationships with our customers, and we are committed to providing personalized assistance whenever you need it. If you have any questions, feedback, or concerns, don't hesitate to reach out to our friendly customer support team.</p>
      <p>Thank you for choosing our online store. We look forward to serving you and providing you with an exceptional shopping experience!</p>
    </div>
  );
};

export default AboutUs;
