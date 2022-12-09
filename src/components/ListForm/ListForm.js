import styles from './ListForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';

const ListForm = ({ id }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ id, title, description }));
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.listFormWrapper}>
      <span>Title:</span>
      <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <span>Description:</span>
      <TextInput
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button>ADD LIST</Button>
    </form>
  );
};

export default ListForm;
