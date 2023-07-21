import PropTypes from 'prop-types';
import style from './Rating.module.css';

export const Rating = ({ups}) => {
  console.log(style);
  return (
    <div className={style.rating}>
      <button className={style.up} aria-label='Увеличить рейтинг'/>
      <p className={style.ups}>{ups}</p>
      <button className={style.down} aria-label='Уменьшить рейтинг'/>
    </div>
  );
};

Rating.propTypes = {
  ups: PropTypes.number,
};
