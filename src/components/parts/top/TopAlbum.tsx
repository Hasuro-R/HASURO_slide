'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { albumImages } from '@/const/albumImages';
import styles from './top.module.scss';

export const TopAlbum = () => {
  const [page, setPage] = useState(0);

  const animateImage = {
    enter: {
      display: 'none',
      opacity: 0,
      blur: 10,
    },
    center: {
      display: 'block',
      opacity: 1,
      blur: 0,
    },
    exit: {
      display: 'none',
      opacity: 0,
      blur: 10,
    },
  };


  useEffect(() => {
    const changePage = setInterval(() => {
      if (page === albumImages.length - 1) {
        setPage(0);
      } else {
        setPage(page + 1);
      }
    }, 4000);

    return () => {
      clearInterval(changePage);
    };
  }, [page]);

  return (
    <div className={styles['album-container']}>
      <div className={styles['album-box']}>
        <AnimatePresence>
          <motion.div
            className={styles['album-cushion']}
            key={page}
            initial='enter'
            animate='center'
            exit='exit'
            variants={animateImage}
            transition={{ duration: 0.5 }}
          >
            <Image src={albumImages[page]} alt='album' width={200} className={styles['album-img']} />
          </motion.div>
        </AnimatePresence>
        <div className={styles['album-bg-1']} />
        <div className={styles['album-bg-2']} />
      </div>
    </div>
  );
};
