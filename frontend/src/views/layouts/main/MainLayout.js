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
    <main className={styles.screen}>
      <div className={cx('container', 'px-140', 'pb-40')}>
        {children}
      </div>
    </main>
  );
}

export default MainLayout;