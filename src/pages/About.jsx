import React from "react";
import MultiplePizzas from "../assets/images/place.jpg";
import "../styles/about.css";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Our pizza menu is carefully crafted, using fresh and high-quality ingredients. You can choose from various types of dough,
          ranging from traditional to gluten-free, according to your preferences and needs. Abundant toppings such as delicious cheese,
          beef, chicken, fresh vegetables, and signature sauces will provide delightful flavors in every bite.<br></br><br></br>

          In addition to pizza, our shop also offers a variety of tasty side dishes, such as garlic bread, chicken wings, and freshly
          made salads using quality ingredients. We also provide refreshing beverage options, including a variety of sodas, fresh fruit juices,
          and our special coffee.
          Our knowledgeable and friendly staff will serve you with smiles and hospitality. We are always ready to provide recommendations
          and assist you in selecting the perfect pizza combinations according to your taste.<br></br><br></br>

          "Gilang's" Pizza Shop also provides delivery service, allowing you to enjoy our pizzas in the comfort of your own home.
          Additionally, we have a comfortable dining area inside the shop, perfect for family gatherings, friend meetings, or business
          get-togethers.<br></br><br></br>

          "Gilang's" Pizza Shop is committed to delivering an exceptional culinary experience to our customers. We take pride in being a part of this community and strive to create unforgettable memories with every dish we serve. So, visit "Delizioso" Pizza Shop now and indulge in unmatched pizza deliciousness!
          <br></br>        
          <br></br>        
          <br></br>        
          <br></br>        
          <br></br>        
        </p>
      </div>
    </motion.div>
  );
}

export default About;