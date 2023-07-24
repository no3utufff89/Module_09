import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as AuthIcon} from './img/login.svg';
import {Text} from '../../../UI/Text';
import {urlAuth} from '../../../api/auth';
import {useAuth} from '../../../hooks/useAuth';

export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useAuth({token});

  const handleLogoutToggle = () => {
    const logOutBtn = document.querySelector(`.${style.logout}`);
    logOutBtn.classList.toggle(`${style.logout_active}`);
  };

  const logOut = () => {
    setAuth({});
    delToken();
    handleLogoutToggle();
  };

  return (
    <div className={style.container}>
      {auth.name ? (
        <button className={style.btn} onClick={handleLogoutToggle}>
          <img className={style.img} src={auth.img} title={auth.name} alt={`Аватар ${auth.name}`}/>
          <Text>{auth.name}</Text>
        </button>
      ) : (
        <Text className={style.authLink} As='a' href={urlAuth}>
          <AuthIcon className={style.svg}/>
        </Text>
      )}
      <button className={style.logout} onClick={logOut}>Выйти</button>
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
