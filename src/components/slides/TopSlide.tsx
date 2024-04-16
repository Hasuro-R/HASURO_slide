'use client';

import Image from 'next/image';
import { MainSlideTemplate } from '../templates/MainSlideTemplate';
import iconImage from '@/public/hasuro_icon.png';
import QRImage from '@/public/qr.png';
import styles from './slide.module.scss';
import { introductions } from '@/const/introductions';
import { TopListBox } from '../parts/top/TopListBox';
import { TopAlbum } from '../parts/top/TopAlbum';

export const TopSlide = () => {
  return (
    <MainSlideTemplate>
      <div className={styles['top-container']}>
        <div className={styles['top-header']}>
          <div className={styles['top-header-left']}>
            <Image src={iconImage} alt='icon' width={150} className={styles['top-header-icon']} />
            <p className={styles['top-header-name']}>井上 蓮太郎</p>
          </div>
          <Image src={QRImage} alt='icon' width={150} className={styles['top-header-qr']} />
        </div>
        <div className={styles['top-bottom-container']}>
          <div className={styles['top-bottom-left']}>
            <p className={styles['top-bottom-title']}>
              About <span>Me</span>
            </p>
            <div className={styles['top-bottom-list']}>
              {introductions.map((item, index) => (
                <TopListBox text={item} index={index} key={index} />
              ))}
            </div>
          </div>
          <TopAlbum />
        </div>
      </div>
    </MainSlideTemplate>
  )
}
