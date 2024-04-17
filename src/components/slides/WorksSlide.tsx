'use client';

import { works } from '@/const/works';
import { MainSlideTemplate } from '../templates/MainSlideTemplate';
import styles from './slide.module.scss';
import WorkBox from '../parts/work/WorkBox';
import { skills } from '@/const/skills';
import { SkillListBox } from '../parts/work/SkillListBox';

export const WorksSlide = () => {
  return (
    <MainSlideTemplate>
      <div className={styles['works-container']}>
        <div className={styles['works-left-container']}>
          <p className={styles['works-section-title']}>Works</p>
          <div className={styles['works-index']}>
            {works.map((item, key) => (
              <WorkBox workData={item} key={key} />
            ))}
          </div>
        </div>
        <div className={styles['works-right-container']}>
          <p className={styles['works-section-title']}>Skills</p>
          <div className={styles['skills-index']}>
            {skills.map((item, key) => (
              <SkillListBox title={item.title} color={item.color} key={key} />
            ))}
          </div>
        </div>
      </div>
    </MainSlideTemplate>
  );
};
