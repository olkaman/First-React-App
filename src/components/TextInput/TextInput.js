import styles from './TextInput.module.scss';
import clsx from 'clsx';

const TextInput = (props) => {
  return <input className={styles.input} type='text' {...props} />;
};

export default TextInput;
