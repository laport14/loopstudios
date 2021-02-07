import React from 'react';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

function Layout(props) {
  return (
    <div>
      <Nav />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;