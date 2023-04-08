import React from 'react';
import Mainheader from './main-header';
import MainHeader from './main-header';
export default function Layout({ children }) {
  return (
    <div>
      <MainHeader />
      <main>{children}</main>
    </div>
  );
}
