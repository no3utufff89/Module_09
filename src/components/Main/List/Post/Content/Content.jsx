import PropTypes from 'prop-types';
import style from './Content.module.css';
import {Text} from '../../../../../UI/Text';
import {useState} from 'react';
import Modal from '../../../../Modal';

export const Content = ({title, author, markdown, id}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Text
          onClick={() => {
            setIsModalOpen(true);
          }}
          As='a'
          size={18}
          tsize={24}
          href="#post"
          className={style.linkPost}
        >
          {title}
        </Text>
      </Text>
      <Text
        As='a'
        color='orange'
        size={12}
        tsize={14}
        className={style.linkAuthor}
        href="#author">
        {author}
      </Text>
      {isModalOpen && <Modal
        id={id}
        closeModal={() => {
          setIsModalOpen(false);
        }
        }/>}
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  id: PropTypes.string,
};
