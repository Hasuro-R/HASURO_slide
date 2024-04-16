'use client';

import styles from './slide.module.scss';
import containerStyle from '@/components/templates/template.module.scss';

export const FirstSlide = () => {
  return (
    <div className={containerStyle['container']}>
      <div className={styles['first-container']}>
        <video autoPlay loop muted style={{ width: '100%' }}>
          <source src='./hasuro_animation.mp4' type='video/mp4' />
        </video>
      </div>
    </div>
  );
};
