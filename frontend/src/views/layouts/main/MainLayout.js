import React from 'react';
import styles from './MainLayout.module.scss';
import HeaderLayout from "../header/HeaderLayout";

function MainLayout({
    children,
  }) {
  return (
    <main>
      <div className={styles.backImg}>
        <HeaderLayout />
        <div className={styles.appContainer}>
          {children}
        </div>
      </div>
    </main>
  );
}

export default MainLayout;