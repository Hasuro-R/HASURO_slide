'use client';

import { EndAnimation } from '../parts/animation/EndAnimation';
import { MainSlideTemplate } from '../templates/MainSlideTemplate';
import styles from './slide.module.scss';

export const EndSlide = () => {
  return (
    <MainSlideTemplate>
      <div className={styles['end-container']}>
        <div className={styles['end-animation-box']}>
          <EndAnimation />
        </div>
      </div>
    </MainSlideTemplate>
  );
};
