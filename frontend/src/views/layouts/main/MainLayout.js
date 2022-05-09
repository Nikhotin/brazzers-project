import React from 'react';
import styles from './MainLayout.module.scss';
import HeaderLayout from './HeaderLayout';
import Popup from '../UI/Popup/Popup';
import WelcomePopup from '../UI/Popup/WelcomePopup/WelcomePopup';
import { closeWelcomePopup } from '../../store/userStore';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function MainLayout(props) {
  const {
    children,
    name,
    py = 120,
    isAuth,
    popups: { popupIsOpen },
    dispatch,
  } = props;
  return (
    <main className={styles.screen}>
      <HeaderLayout userName={name} counter={0} isAuth={isAuth} />
      <Popup
        isOpened={popupIsOpen}
        onClose={() => dispatch(closeWelcomePopup())}
      >
        <WelcomePopup />
      </Popup>
      <div className={cx('container', 'px-140', 'pb-40', `py-${py}`)}>
        {children}
      </div>
    </main>
  );
}

export default MainLayout;
