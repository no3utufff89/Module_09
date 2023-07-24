import style from './Header.module.css';
import Layout from '../Layout';
import Logo from './Logo';
import Auth from './Auth';
import Search from './Search';
import Heading from './Heading';
import PropTypes from 'prop-types';

export const Header = ({token, delToken}) => (
  <header className={style.header}>
    <Layout>
      <div className={style.gridContainer}>
        <Logo/>
        <Heading text='Заголовок'/>
        <Search/>
        <Auth token={token} delToken={delToken}/>
      </div>
    </Layout>
  </header>
);

Header.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
