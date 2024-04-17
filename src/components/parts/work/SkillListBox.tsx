'use client';

import { FaRegCircle } from 'react-icons/fa';
import styles from './skill.module.scss';

export const SkillListBox = ({
  title, color,
}: {
  title: string, color: string,
}) => {
  return (
    <div className={styles['list-box']}>
      <div
        className={styles['list-circle']}
        style={{ color: color }}
      >
        <FaRegCircle />
      </div>
      <p className={styles['text']}>{title}</p>
    </div>
  );
};
