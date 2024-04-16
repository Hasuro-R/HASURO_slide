import { motion } from 'framer-motion';
import { FaRegCircle } from 'react-icons/fa';
import styles from './top.module.scss';

export const TopListBox = ({
  text,index
}:{
  text: string, index: number
}) => {
  return (
    <motion.div
      className={styles['list-box']}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
    >
      <div className={styles['list-box-circle']}>
        <FaRegCircle />
      </div>
      <p className={styles['list-box-text']}>
        {text}
      </p>
    </motion.div>
  );
};
