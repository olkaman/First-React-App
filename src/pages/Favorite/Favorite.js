import PageTitle from '../../components/PageTitle/PageTitle';
import styles from './Favorite.module.scss';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';
import Card from '../../components/Card/Card';

const Favorite = () => {
  const cards = useSelector((state) => getFavoriteCards(state));

  return (
    <div className={styles.wrapper}>
      <PageTitle>Favorite</PageTitle>
      <article className={styles.column}>
        {cards.map((card) => (
          <Card key={card.id} title={card.title} favorite={card.isFavorite} />
        ))}
      </article>
    </div>
  );
};

export default Favorite;
