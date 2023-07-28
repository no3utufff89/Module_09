import PropTypes from 'prop-types';
import style from './Modal.module.css';
import {ReactComponent as IconClose} from './img/close.svg';
import ReactDOM from 'react-dom';
import {useEffect, useRef} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import Markdown from 'markdown-to-jsx';
import {Text} from '../../UI/Text';
import FormComment from '../Main/List/Post/FormComment';
import Comments from '../Main/List/Post/Comments';

export const Modal = ({id, closeModal}) => {
  const overlayRef = useRef(null);

  const [comments, postData] = useCommentsData(id);

  const hadleClick = e => {
    const target = e.target;
    if (target === overlayRef.current) {
      closeModal();
    }
  };
  const keyPress = e => {
    const keyTarget = e.keyCode;
    if (keyTarget === 27) {
      closeModal();
    }
  };
  useEffect(() => {
    document.addEventListener('click', hadleClick);
    document.addEventListener('keydown', keyPress);
    return () => {
      document.removeEventListener('click', hadleClick);
      document.removeEventListener('keydown', keyPress);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        <h2 className={style.title}>{postData.title}</h2>
        <div className={style.content}>
          {postData.selftext ? (
            <Markdown options={{
              overrides: {
                a: {
                  props: {
                    target: 'blank',
                  }
                }
              }
            }}>
              {postData.selftext}
            </Markdown>
          ) : (
            'У этого поста нет текста'
          )}
        </div>
        <Text
          as='p'
          className={style.author}>
          {postData.author}
        </Text>
        <FormComment/>
        {comments.length ? (
          <Comments comments={comments}/>
        ) : (
          `Загрузка...`
        )}
        <button className={style.close} onClick={() => closeModal()}>
          <IconClose/>
        </button>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

Modal.propTypes = {
  id: PropTypes.string,
  closeModal: PropTypes.func,
};
