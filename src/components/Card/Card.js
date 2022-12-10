import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';

const Card = ({ id, title, favorite }) => {
  const dispatch = useDispatch();

  const toggleFavorite = (cardId) => {
    dispatch(toggleCardFavorite(cardId));
  };

  const removeThisCard = (cardId) => {
    console.log(cardId);
    dispatch(removeCard(cardId));
  };

  return (
    <li className={styles.card}>
      {title}
      <div>
        <span
          onClick={() => toggleFavorite(id)}
          className={clsx(
            styles.icon,
            favorite && styles.active,
            ' fa fa-star-o'
          )}
        ></span>
        <span
          onClick={() => removeThisCard(id)}
          className={clsx(styles.icon, ' fa fa-trash')}
        ></span>
      </div>
    </li>
  );
};
export default Card;
