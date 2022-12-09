import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';

const Card = ({ id, title, favorite }) => {
  const dispatch = useDispatch();

  const handleClick = (cardId) => {
    dispatch(toggleCardFavorite(cardId));
  };

  return (
    <li className={styles.card}>
      {title}
      <span
        onClick={() => handleClick(id)}
        className={clsx(
          styles.icon,
          favorite && styles.active,
          ' fa fa-star-o'
        )}
      ></span>
    </li>
  );
};
export default Card;
