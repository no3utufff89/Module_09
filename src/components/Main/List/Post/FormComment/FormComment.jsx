import style from './FormComment.module.css';
import {Text} from '../../../../../UI/Text';
import {useRef, useState} from 'react';

export const FormComment = () => {
  const [textArea, setTextArea] = useState(false);
  const inputRef = useRef(null);

  const commentSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = '';
    setTextArea(false);
  };

  const handleClick = () => {
    setTextArea(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 0);
  };

  return (
    <>
      {!textArea ? (
        <button
          className={style.btn}
          onClick={handleClick}
        >
          Написать коммент
        </button>
      ) : (
        <form className={style.form} onSubmit={commentSubmit}>
          <Text
            As='h3'
            size={14}
            tsize={18}>
            Имя авторизованного пользователя
          </Text>
          <textarea className={style.textarea} ref={inputRef}/>
          <button className={style.btn} type='submit'>Отправить</button>
        </form>
      )}
    </>
  );
};

