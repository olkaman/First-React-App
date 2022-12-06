import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchString, getSearchPhrase } from '../../redux/store';
import { useSelector } from 'react-redux';

const SearchForm = () => {
  let searchPhrase = useSelector(getSearchPhrase);
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  console.log('localState', searchValue);
  console.log('redux state', searchPhrase);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(updateSearchString(searchValue));
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSearch}>
      <TextInput
        placeholder='Search...'
        onChange={(e) => setSearchValue(e.target.value)}
        defaultValue={searchPhrase}
      />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;
