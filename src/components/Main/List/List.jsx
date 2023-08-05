import style from './List.module.css';
import Post from './Post';
import {usePosts} from '../../../hooks/usePosts';
import Preloader from '../../../UI/Preloader';

export const List = () => {
  const [posts, loading] = usePosts();
  return (
    <>
      {loading ? (
        <Preloader/>
      ) : (
        <ul className={style.list}>
          {posts.map((postData) => (
            <Post key={postData.id} postData={postData} />
          ))}
        </ul>
      )}
    </>
  );
};
