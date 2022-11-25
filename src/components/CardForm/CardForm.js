import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';

const CardForm = (props) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_CARD',
      payload: { id: shortid(), columnId: props.columnId, title: title },
    });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.CardForm}>
      <TextInput
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Button>Add card</Button>
    </form>
  );
};

export default CardForm;
