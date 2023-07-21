import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postData = {
    thumbnail: '',
    title: 'Title',
    author: 'NicName',
    ups: 24,
    date: '2023-07-24T09:45:00.000Z',
  };

  return (
    <ul className={style.list}>
      <Post postData={postData}/>
    </ul>
  );
};
