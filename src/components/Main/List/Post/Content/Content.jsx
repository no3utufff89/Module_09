import PropTypes from 'prop-types';
import style from './Content.module.css';

export const Content = ({title, author}) => {
  console.log(style);
  return (
    <div className={style.content}>
      <h2 className={style.title}>
        <a href="#post" className={style.linkPost}>
          {title}
        </a>
      </h2>
      <a className={style.linkAuthor} href="#author">
        {author}
      </a>
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};
