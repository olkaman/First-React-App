import PageTitle from '../../components/PageTitle/PageTitle';
import styles from './Favorite.module.scss';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsRedux';
import Card from '../../components/Card/Card';

const Favorite = () => {
  const cards = useSelector((state) => getFavoriteCards(state));

  if (cards.length === 0) {
    return <h2 className={styles.noFavoriteCards}>No favorite cards</h2>;
  }
  return (
    <div className={styles.wrapper}>
      <PageTitle>Favorite</PageTitle>
      <article className={styles.column}>
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            favorite={card.isFavorite}
            id={card.id}
          />
        ))}
      </article>
    </div>
  );
};

export default Favorite;
