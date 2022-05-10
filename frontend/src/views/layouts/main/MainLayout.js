import React from 'react';
import styles from './MainLayout.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function MainLayout({
    children,
    name,
    isAuth,
    popupIsOpen,
  }) {
  return (
    <main>
      <div className={styles.backImg}>
        {children}
      </div>
    </main>
  );
}

export default MainLayout;