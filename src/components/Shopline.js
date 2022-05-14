import React from "react";
import Nav from "./Nav";
import Body from "./Body";
import Login from "./Login";
import Footer from "./Footer";
const Shopline = () => {
  return (
    <section className="section-container">
      <Nav />
      <section className="body-section">
        <h2 className="section-h2">
          Packed with lots of <br /> easy-to-use features
        </h2>
        <Body />
        <Login />
        <footer>
          <Footer />
        </footer>
      </section>
    </section>
  );
};

export default Shopline;
