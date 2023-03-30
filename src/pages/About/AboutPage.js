import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './AboutPage.css';

const About = () => {
  return (
    <>
      <Header />
      <div className="about-container">
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nibh vel purus vulputate euismod ac id lectus. Praesent a lorem massa. Vestibulum eu hendrerit lectus. Nam quis odio nec magna faucibus dapibus a ut nulla. Vestibulum vestibulum accumsan est in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        <p>Proin posuere lacinia orci, at rutrum urna rhoncus ut. Praesent imperdiet lorem in dapibus facilisis. Nunc ullamcorper ultrices sem, a euismod purus feugiat sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin sit amet dui vel libero ultricies viverra a eu lectus. Vivamus nec massa eget justo mollis placerat. Fusce porttitor felis ac magna sagittis, ac blandit dolor tristique. Nunc quis urna ullamcorper, scelerisque quam id, rutrum mi. Morbi luctus nisl in turpis facilisis interdum. Aliquam imperdiet dictum purus, eu dapibus ipsum pharetra sit amet. Nullam quis nulla vitae mi blandit feugiat.</p>
      </div>
      <Footer />
    </>
  );
};

export default About;
