import React from 'react';
import styles from './SignLayout.module.scss';

function SignLayout({
    children,
  }) {
  return (
    <main className={styles.containerWithImg}>
      <div className={styles.signIn}>
        {children}
      </div>
    </main>
  );
}

export default SignLayout;