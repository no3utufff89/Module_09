import PropTypes from 'prop-types';
import style from './Date.module.css';
import formatDate from '../../../../../utils/formatDate';

export const Date = ({date}) => {
  console.log(style);
  return (
    <time className={style.date} dateTime={date}>{formatDate(date)}</time>
  );
};

Date.propTypes = {
  date: PropTypes.string,
};
