import React, { useMemo } from 'react';
import styles from './HeaderLayout.module.scss';
import { useNavigate, useLocation } from "react-router";

function HeaderButton({ item, onClickHandler }) {
  return (
<>
  <div
    className={!item.isActive ? styles.headerButton : styles.activeButton}
    onClick={
      () => onClickHandler(item)
    }
  >
    <p>{item.label}</p>
    {
      item.isActive ? <span className={styles.span} /> : <></>
    }
  </div>
</>
  );
}

function HeaderLayout(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const buttons = useMemo(() => [
      {
        label: 'Главная',
        route: '/main',
        isActive: location.pathname === '/main'
      },
      {
        label: 'Мои Записи',
        route: '/appointments',
        isActive: location.pathname === '/appointments'
      },
      {
        label: 'Наши Врачи',
        route: '/doctors',
        isActive: location.pathname === '/doctors'
      }
    ], [location])

  return (
    <div className={styles.headerContainer}>
      <div className={styles.buttonContainer}>
          {
            buttons.map((button) => (
              <HeaderButton
                item={button}
                onClickHandler={
                  (button) => {
                    navigate(button.route)
                  }
                }
                key={button.route}
              />
            ))
          }
      </div>

      <div
        className={styles.userInfo}
        onClick={() => navigate('/userinfo')}
      >
        <p>Профиль</p>
      </div>
    </div>
  );
}

export default HeaderLayout;