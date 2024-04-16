import styles from './template.module.scss';

export const MainSlideTemplate = ({
  children,
}: {
  children: React.ReactNode,
}) => {

  return (
    <div className={styles['container']}>
      <div className={styles['main-content']}>
        {children}
      </div>
    </div>
  );
}
