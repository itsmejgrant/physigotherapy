import React from 'react';
import Header from './header';

const Layout = ({ children }) => {
  return <>
    <main>{ children }</main>
  </>;
};

export default Layout;
