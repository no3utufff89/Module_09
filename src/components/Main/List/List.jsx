import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postsData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'NicName1',
      ups: 77,
      date: '2023-07-24T09:45:00.000Z',
      id: '123'
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'NicName2',
      ups: 36,
      date: '2023-01-18T09:45:00.000Z',
      id: '456'
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'NicName3',
      ups: 24,
      date: '2023-01-18T09:45:00.000Z',
      id: '678'
    },
    {
      thumbnail: '',
      title: 'Title4',
      author: 'NicName4',
      ups: 124,
      date: '2023-03-10T09:45:00.000Z',
      id: '789'
    },
  ];

  return (
    <ul className={style.list}>
      {postsData.map((postData) => (
        <Post key={postData.id} postData={postData}/>
      ))}
    </ul>
  );
};
