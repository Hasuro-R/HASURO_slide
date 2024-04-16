'use client';

import Lottie from 'lottie-react';
import thanks from '@/public/animation/thanks.json';
import styles from './animation.module.scss';

export const EndAnimation = () => {
  return (
    <div className={styles['container']}>
      <Lottie
        animationData={thanks}
        autoplay={true}
      />
    </div>
  )
}
