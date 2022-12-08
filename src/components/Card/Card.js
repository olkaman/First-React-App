import styles from './Card.module.scss';
import clsx from 'clsx';

const Card = (props) => {
  return (
    <li className={styles.card}>
      {props.title}
      <span className={clsx(styles.icon, ' fa fa-star-o')}></span>
    </li>
  );
};
export default Card;
