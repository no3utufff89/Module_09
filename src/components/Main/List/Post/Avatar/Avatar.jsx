import PropTypes from 'prop-types';
import noPhoto from './img/notphoto.jpg';
import style from './Avatar.module.css';

export const Avatar = ({title}) => {
  console.log(style);
  return (
    <img className={style.img} src={noPhoto} alt={title}/>
  );
};

Avatar.propTypes = {
  title: PropTypes.string,
};
