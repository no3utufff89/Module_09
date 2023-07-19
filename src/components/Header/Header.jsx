import style from './Header.module.css';
import Layout from "../Layout";
import Logo from "./Logo";
import Auth from "./Auth";
import Search from "./Search";
import Heading from "./Heading";
export const Header = () => {
  return (
      <header className={style.header}>
        <Layout>
           <div className={style.gridContainer}>
               <Logo/>
               <Heading text='Заголовок'/>
               <Search/>
               <Auth auth={false}/>
           </div>
        </Layout>
      </header>
  )
}